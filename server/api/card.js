
const express = require('express');
const router = express.Router();
const checkToken = require("../config/config");

const List = require('../models/list');
const Card = require('../models/card');

/* 
    @route POST api/card/:listId/new
    @desc Create new card
    @access private
*/
router.post("/:listId/new", checkToken, async (req, res) => {
  console.log(req.body)

  try {
    let cardData = {
      content: req.body.content,
      list: req.params.listId,
    };
    let card = new Card(cardData);
    let savedCard = await card.save();

    let updatedList = await List.findByIdAndUpdate(cardData.list, {
      $push: { cards: card._id },
    });

    if (savedCard && updatedList) {
      res.status(201).json({
        message: "card successfully created",
      });
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "failed to create card",
    });
  }
});

/* 
    @route GET api/card/all
    @desc Load all cards in current list
    @access private
*/
router.get("/:listId", checkToken, async (req, res) => {

  try {
    let allCards = await List.findById(req.params.listId)
    .populate({
      path: 'board'
    })
    .populate({ path: 'cards', model: Card })

    res.status(200).json({
      message: "card(s) loaded",
      allLists,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "failed to load card(s)",
    });
  }
});

/* 
    @route PUT api/card/:cardId
    @desc updates one card
    @access private
*/
router.put("/:listId", async (req, res) => {
  try {
    let card = await Card.findByIdAndUpdate(req.params.listId, req.body);

    if (card) {
      res.status(200).json({
        message: "card updated"
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "unable to update card",
    });
  }
});

/* 
    @route DELETE api/card/delete/:cardId
    @desc deletes one card
    @access private
*/
router.delete("/delete/:cardId", checkToken, async (req, res) => {
  try {
    let deleteCard = await (await Card.findByIdAndDelete(req.params.cardId));

    if (deleteCard) {
      res.status(200).json({
        message: "card deleted",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "card could not be deleted",
    });
  }
});

module.exports = router;
