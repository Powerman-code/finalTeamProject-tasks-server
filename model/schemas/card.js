const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const bcrypt = require("bcryptjs");
const { nanoid } = require("nanoid");
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
      default: Type.TASK,
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

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(SALT_FACTOR);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

userSchema.methods.validPassword = async function (password) {
  return await bcrypt.compare(String(password), this.password);
};

const Card = model("card", cardSchema);

module.exports = Card;
