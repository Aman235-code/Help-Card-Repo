const {Schema, model} = require('mongoose')
const cardSchema = new Schema({
    title : { type: String, required: true },
    description : { type: String, required: true },
    
})

const Card = new model("Card", cardSchema);

module.exports = Card;