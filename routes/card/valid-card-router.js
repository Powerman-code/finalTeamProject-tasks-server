const Joi = require("joi");
const mongoose = require("mongoose");

const schemaCreateCard = Joi.object({
  title: Joi.string().min(2).max(30).required(),
  difficulty: Joi.string().optional(),
  category: Joi.string().optional(),
  date: Joi.string().optional(),
  time: Joi.string().optional(),
  type: Joi.string().optional(),
});

const schemaUpdateCard = Joi.object({
  title: Joi.string().min(2).max(30).optional(),
  difficulty: Joi.string().optional(),
  category: Joi.string().optional(),
  date: Joi.string().optional(),
  time: Joi.string().optional(),
  type: Joi.string().optional(),
});

const validate = async (schema, obj, next) => {
  try {
    await schema.validateAsync(obj);
    return next();
  } catch (err) {
    console.log(err);

    if (
      err.name === "ValidationError" &&
      err.message.includes("password" && "fails to match the required pattern")
    ) {
      next({
        status: 400,
        message: "password must be at least 7 characters long",
      });
    }

    next({ status: 400, message: err.message.replace(/"/g, "'") });
  }
};

module.exports = {
  validationUserData: async (req, res, next) => {
    return await validate(schemaUserData, req.body, next);
  },
  validationObjectId: async (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return next({ status: 400, message: "Invalid Object Id" });
    }
    next();
  },
};
