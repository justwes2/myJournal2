const mongoose = require('./schema');
const seedData = require('./seedData');

const Entry = mongoose.model("Entry")

Entry.remove({}, () => {
  Entry.collection.insert(seedData).then( () => {
    process.exit()
  })
})
