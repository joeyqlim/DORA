
const express = require('express');
const router = express.Router();
const checkToken = require("../config/config");

const Board = require('../models/board');
const User = require('../models/user');

/* 
    @route POST api/board/new
    @desc Create new board
    @access private
*/
router.post("/new", checkToken, async (req, res) => {
  console.log(req.body)
  console.log(req.user.id);

  try {
    let boardData = {
      name: req.body.name,
      owner: req.user.id,
    };
    let board = new Board(boardData);
    let savedBoard = await board.save();

    let updatedUser = await User.findByIdAndUpdate(boardData.owner, {
      $push: { boards: board._id },
    });

    if (savedBoard && updatedUser) {
      res.status(201).json({
        message: "board successfully created",
      });
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "failed to create board",
    });
  }
});

/* 
    @route GET api/board/all
    @desc Load all of current user's boards
    @access private
*/
router.get("/all", checkToken, async (req, res) => {
  console.log(req.body)
  console.log(req.user.id);

  try {
    let allBoards = await User.findById(req.user.id)
    .populate({
      path: 'boards'
    })
    .populate({ path: 'owner', model: User })

    res.status(200).json({
      message: "board(s) loaded",
      allBoards,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "failed to load board(s)",
    });
  }
});

/* 
    @route GET api/board/:id
    @desc View one board
    @access private
*/
router.get("/:id", checkToken, async (req, res) => {
  try {
    let board = await Board.findById(req.params.id)
    // populate board with lists, cards

    res.status(200).json({
      message: "board loaded",
      board,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "failed to load board",
    });
  }
});

/* 
    @route PUT api/board/:id
    @desc updates one board
    @access private
*/
router.put("/:id", async (req, res) => {
  try {
    let board = await Board.findByIdAndUpdate(req.params.id, req.body);

    if (board) {
      res.status(200).json({
        message: "board updated"
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "unable to update board",
    });
  }
});

/* 
    @route DELETE api/board/delete/:id
    @desc deletes one board
    @access private
*/
router.delete("/delete/:id", checkToken, async (req, res) => {
  try {
    let deleteBoard = await Board.findByIdAndDelete(req.params.id).remove().exec();

    if (deleteBoard) {
      res.status(200).json({
        message: "board deleted",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "board could not be deleted",
    });
  }
});

module.exports = router;
