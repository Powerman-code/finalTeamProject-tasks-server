const Card = require("../model/cardModel");
const { HttpCode } = require("../helper/constants");

const getAll = async (req, res, next) => {
  try {
    const userId = req.user?.id;
    const allCards = await Card.getAll(userId, req.query);
    return res.status(HttpCode.OK).json({
      status: "success",
      code: HttpCode.OK,
      data: { ...allCards },
    });
  } catch (e) {
    next(e);
  }
};

const create = async (req, res, next) => {
  try {
    const userId = req.user?.id;
    const card = await Card.create(req.body, userId);
    return res.status(HttpCode.CREATED).json({
      status: "success",
      code: HttpCode.CREATED,
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

    const card = await Card.remove(req.params.cardId, userId);
    if (card) {
      return res.status(HttpCode.CREATED).json({
        status: "success",
        code: HttpCode.CREATED,
        data: {
          card,
          message: "card deleted",
        },
      });
    } else {
      return res.status(HttpCode.NOT_FOUND).json({
        status: "error",
        code: HttpCode.NOT_FOUND,
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

      return res.status(HttpCode.OK).json({
        status: "success",
        code: HttpCode.OK,
        data: { card },
      });
    } else {
      return res.status(HttpCode.NOT_FOUND).json({
        status: "error",
        code: HttpCode.NOT_FOUND,
        data: { message: "Data not found" },
      });
    }
  } catch (e) {
    next(e);
  }
};

const updateStatus = async (req, res, next) => {
  try {
    const userId = req.user?.id;
    if (req.body) {
      const { status } = await Card.updateStatus(
        req.params.cardId,
        req.body,
        userId
      );

      return res.status(HttpCode.OK).json({
        status: "success",
        code: HttpCode.OK,
        data: {
          status,
          message: `Status changed to ${[status]}`,
        },
      });
    } else {
      return res.status(HttpCode.NOT_FOUND).json({
        status: "error",
        code: HttpCode.NOT_FOUND,
        data: { message: "Data not found" },
      });
    }
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getAll,
  update,
  updateStatus,
  remove,
  create,
};
