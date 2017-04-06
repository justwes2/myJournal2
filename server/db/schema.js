const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/entries')

const db = mongoose.connection

db.on('error', err => {
  console.log(err);
})

db.once('open', () => {
  console.log('database conneted');
})

const Schema = mongoose.Schema

const KeywordSchema = new Schema({
  word: String,
  sadness: Number,
  joy: Number,
  fear: Number,
  disgust: Number,
  anger: Number
})
const EntrySchema = new Schema({
  date: String,
  text: String,
  keywords: [KeywordSchema]
})

const Keyword = mongoose.model("Keyword", KeywordSchema)
const Entry = mongoose.model("Entry", EntrySchema)
