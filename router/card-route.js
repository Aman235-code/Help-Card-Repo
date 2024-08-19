const express = require("express");
const cardController = require("../controller/card-controller");
const router = express.Router();

router.route("/").get(cardController.getAllCards);
router.route("/addCard").post(cardController.addCard);
router.route("/search/:title").get(cardController.getCardByTitle)

module.exports = router;