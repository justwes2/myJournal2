const express = require('express');
const mongoose = require('./db/schema');
const bodyParser = require('body-parser');
const path = require('path');
const app = express()

const Entry = mongoose.model("Entry")
const Keyword = mongoose.model("Keyword")
const entriesController = require('./controllers/entriesController');

app.use("/client", express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req,  res) =>{
  res.sendFile(path.join(__dirname, '../client/js/ng-views', 'index.html'))
})

//index
app.get('/entries', (req, res) => {
  // Entry.find({}).then((entries)=>{
  //   res.json(entries)
  // })
  entriesController.index()
})

//create
app.post('/entries', (req, res) => {
  console.log(req.body)
  Entry.create(req.body).then( (entry) => {
    res.json(entry)
  })
})

//show
app.get('/entry/:title', (req, res) => {
  entriesController.show()
})

app.listen(4000, () => {
  console.log('listening on port 4000');
})
