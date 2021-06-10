const Card = require("../model/cardModel");

const getAll = async (req, res, next) => {
  try {
    const userId = req.user?.id;
    const allCards = await Card.getAll(userId, req.query);
    return res.status(200).json({
      status: "success",
      code: 200,
      data: { ...allCards },
    });
  } catch (e) {
    next(e);
  }
};

const getById = async (req, res, next) => {
  try {
    const userId = req.user?.id;
    const card = await Card.getById(req.params.cardId, userId);
    if (contact) {
      return res.status(200).json({
        status: "success",
        code: 200,
        data: { card },
      });
    } else {
      return res.status(404).json({
        status: "error",
        code: 404,
        data: { message: "Data not found" },
      });
    }
  } catch (e) {
    next(e);
  }
};

const create = async (req, res, next) => {
  try {
    const userId = req.user?.id;
    const card = await Card.create({ ...req.body, owner: userId });
    return res.status(201).json({
      status: "success",
      code: 201,
      data: {
        card,
      },
    });
  } catch (e) {
    next(e);
  }
};

const remove = async (req, res, next) => {
  try {
    const userId = req.user?.id;
    console.log(
      "🚀 ~ file: cardController.js ~ line 61 ~ remove ~ req.params.cardId",
      req.params.cardId
    );
    const card = await Card.remove(req.params.cardId, userId);
    if (card) {
      return res.status(201).json({
        status: "success",
        code: 201,
        data: {
          card,
          message: "card deleted",
        },
      });
    } else {
      return res.status(404).json({
        status: "error",
        code: 404,
        data: { message: "Data not found" },
      });
    }
  } catch (e) {
    next(e);
  }
};

const update = async (req, res, next) => {
  try {
    const userId = req.user?.id;
    if (req.body) {
      const card = await Card.update(req.params.cardId, req.body, userId);

      return res.status(200).json({
        status: "success",
        code: 200,
        data: { card },
      });
    } else {
      return res.status(404).json({
        status: "error",
        code: 404,
        data: { message: "Data not found" },
      });
    }
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getAll,
  getById,
  update,
  remove,
  create,
};
