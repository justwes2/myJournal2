const express = require('express');
const mongoose = require('./db/schema');
const path = require('path');
const app = express()

const Entry = mongoose.model("Entry")
const Keyword = mongoose.model("Keyword")

app.use("/client", express.static("public"))

app.get('/', (req,  res) =>{
  res.sendFile(path.join(__dirname, '../client/js/ng-views', 'index.html'))
})

app.get('/entries', (req, res) => {
  Entry.find({}).then((entries)=>{
    res.json(entries)
  })
})

app.get('/entry/:title', (req, res) => {
  entriesController.show()
})

app.listen(4000, () => {
  console.log('listening on port 4000');
})
