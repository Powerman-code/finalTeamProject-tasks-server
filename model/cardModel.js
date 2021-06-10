const Card = require("./schemas/card");

const getAll = async (userId) => {
  const result = await Card.find({ owner: userId });
  return result;
};

const getById = async (contactId, userId) => {
  const result = await Card.findOne({
    _id: contactId,
    owner: userId,
  });
  //       .populate({
  //     path: "owner",
  //     select: "email subscription", //если нужно исключить поле, -_id например
  //   });
  return result;
};

const create = async (body) => {
  const result = await Card.create(body);
  return result;
};

const update = async (contactId, body, userId) => {
  const result = await Card.findByIdAndUpdate(
    { _id: contactId, owner: userId },
    { ...body },
    { new: true }
  );
  return result;
};

const remove = async (contactId, userId) => {
  const result = await Card.findByIdAndRemove({
    _id: contactId,
    owner: userId,
  });
  return result;
};

module.exports = {
  getAll,
  getById,
  remove,
  create,
  update,
};
