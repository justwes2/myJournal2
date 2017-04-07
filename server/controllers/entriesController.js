const Schema = require('../db/schema.js')
const Keyword = Schema.Keyword
const Entry = Schema.Entry

const entriesController = {
  index() {
    Entry.find({}, (err, entries) => {
      //do the thing not sure what
    })
  }
  show(req) {
    Entry.findOne({name:req.title}, (err, entry) => {
      //do the thing not sure what
    })
  }
  update(req, update) {
    Entry.findOneAndUpdate(req, update, {new: true}, (err, docs) => {
      if(err){
        console.log(err);
      }
      else{
        //do the thing
      }
    })
  }
  destroy(req) {
    Entry.findOneAndRemove(req, (err, docs) => {
      if(err){
        console.log(err)
      }else{
        //do a thing
      }
    })
  }
}
