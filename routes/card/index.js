const express = require("express");
const router = express.Router();
// const Contacts = require("../../model/index");
const cardController = require("../../controllers/cardController");
// const validate = require("./validation");
// const guard = require("../../../helpers/guard");

router
  .get("/", cardController.getAll)

  .post(
    "/",
    // validate.createCard,
    cardController.create
  );

router
  // .get(
  //   "/:contactId",

  //   // validate.queryMongoIdValid("cardId"),
  //   cardController.getById
  // )

  .delete("/:contactId", cardController.remove)

  .patch(
    "/:contactId",

    // validate.queryMongoIdValid("cardId"),
    // validate.updateContact,
    cardController.update
  );
