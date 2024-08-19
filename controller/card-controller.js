const Card = require("../model/card-model");

// Get Card
const getAllCards = async (req, res) => {
  try {
    const cards = await Card.find();
    if (!cards || cards.length === 0) {
      return res.status(404).json({ message: "No Cards Found" });
    }
    return res.status(200).json(cards);
  } catch (error) {
    return res.status(404).json({ message: "No Cards Found" });
  }
};

// Get Card By Title
const getCardByTitle = async (req, res) => {
  try {
    const title = req.params.title;

    if (!title) {
      return res.status(404).json({ message: "Title Is Required" });
    }
    const regex = new RegExp(title, "i");
    const cards = await Card.find();
    const card = cards.filter((card) => regex.test(card.title));

    if (!card) {
      return res.status(404).json({ message: "No Card Found" });
    }

    return res.status(200).json(card);
  } catch (error) {
    return res.status(404).json({ message: "Error Occured" });
  }
};

// Add Card
const addCard = async (req, res) => {
  try {
    const resp = req.body;

    await Card.create(resp);

    return res.status(200).json({ message: "Card Created Successfully" });
  } catch (error) {
    return res.status(400).json({ message: "Card Is Not Created" });
  }
};

module.exports = { getAllCards, addCard, getCardByTitle };
