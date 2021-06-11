const express = require("express");
const router = express.Router();
// const Contacts = require("../../model/index");
const cardController = require("../../controllers/cardController");
// const validate = require("./validation");
const guard = require("../../helper/guard");

router
  .get("/", guard, cardController.getAll)

  .post(
    "/",
    guard,
    // validate.createCard,
    cardController.create
  );

router
  // .get(
  //   "/:contactId",

  //   // validate.queryMongoIdValid("cardId"),
  //   cardController.getById
  // )

  .delete("/:cardId", guard, cardController.remove)

  .patch(
    "/:cardId",
    guard,
    // validate.queryMongoIdValid("cardId"),
    // validate.updateContact,

    cardController.update
  );
module.exports = router;
