const mongoose = require("mongoose");
const { Schema, SchemaTypes, model } = mongoose;
// const { nanoid } = require("nanoid");
const { Difficulty, Category, Type } = require("./../../helper/constants");

const cardSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    difficulty: {
      type: String,
      //   required: [true, "difficulty is required"],
      //   unique: true,
      enum: {
        values: [Difficulty.EASY, Difficulty.NORMAL, Difficulty.HARD],
        message: "Card's difficulty",
      },
      default: Difficulty.EASY,
    },
    category: {
      type: String,
      enum: {
        values: [
          Category.STUFF,
          Category.FAMILY,
          Category.HEALTH,
          Category.Learning,
          Category.LEISURE,
          Category.WORK,
        ],
        message: "Card's category",
      },

      default: null,
    },

    date: {
      type: String,
      default: null,
    },

    time: {
      type: String,
      default: null,
    },

    type: {
      type: String,
      enum: {
        values: [Type.TASK, Type.CHALLENGE],
        message: "Card's type",
      },
      default: null,
    },

    status: {
      type: String,
      default: false,
    },

    owner: {
      type: SchemaTypes.ObjectId,
      ref: "user",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Card = model("card", cardSchema);

module.exports = Card;
