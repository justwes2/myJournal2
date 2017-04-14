const Schema = require('../db/schema.js')
const Keyword = Schema.Keyword
const Entry = Schema.Entry

entriesController.index = function(){
  Entry.find({}, (err, entries) => {
    //do the thing not sure what
    console.log(entries)
  })
}
// const entriesController = {
//   index() {
//     Entry.find({}, (err, entries) => {
//       //do the thing not sure what
//     })
//   },
//   show(req, res) {
//     Entry.findOne({name:req.params.title}).then( (entry) => {
//       res.json(entry)
//     })
//   },
//   update(req, update) {
//     Entry.findOneAndUpdate(req, update, {new: true}, (err, docs) => {
//       if(err){
//         console.log(err);
//       }
//       else{
//         //do the thing
//       }
//     })
//   },
//   destroy(req) {
//     Entry.findOneAndRemove(req, (err, docs) => {
//       if(err){
//         console.log(err)
//       }else{
//         //do a thing
//       }
//     })
//   }
// }

module.export = entriesController
