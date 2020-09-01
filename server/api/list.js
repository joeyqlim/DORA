
const express = require('express');
const router = express.Router();
const checkToken = require("../config/config");

const Board = require('../models/board');
const List = require('../models/list');
const Card = require('../models/card');


/* 
    @route POST api/list/:boardId/new
    @desc Create new list
    @access private
*/
router.post("/:boardId/new", checkToken, async (req, res) => {
  console.log(req.body)

  try {
    let listData = {
      title: req.body.title,
      board: req.params.boardId,
    };
    let list = new List(listData);
    let savedList = await list.save();

    let updatedBoard = await Board.findByIdAndUpdate(listData.board, {
      $push: { lists: list._id },
    });

    if (savedList && updatedBoard) {
      res.status(201).json({
        message: "list successfully created",
      });
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "failed to create list",
    });
  }
});

/* 
    @route GET api/list/:boardId
    @desc Load all lists in current board
    @access private
*/
router.get("/:boardId", checkToken, async (req, res) => {

  try {
    let allLists = await Board.findById(req.params.boardId)
    .populate({
      path: 'owner'
    })
    .populate({ path: 'lists', model: List })

    res.status(200).json({
      message: "list(s) loaded",
      allLists,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "failed to load list(s)",
    });
  }
});

/* 
    @route PUT api/list/:listId
    @desc updates one list
    @access private
*/
router.put("/:listId", async (req, res) => {
  try {
    let list = await List.findByIdAndUpdate(req.params.listId, req.body);

    if (list) {
      res.status(200).json({
        message: "list updated"
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "unable to update list",
    });
  }
});

/* 
    @route DELETE api/list/delete/:listId
    @desc deletes one list
    @access private
*/
router.delete("/delete/:listId", checkToken, async (req, res) => {
  try {
    let deleteList = await List.findByIdAndDelete(req.params.listId);

    if (deleteList && deleteChildCards) {
      res.status(200).json({
        message: "list & cards deleted",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "list & cards could not be deleted",
    });
  }
});

module.exports = router;
