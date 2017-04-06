// db/schema.js

var Schema = mongoose.Schema

var ProjectSchema = new Schema({
  title: String,
  unit: String
})

var StudentSchema = new Schema({
  name: String,
  age: Number,
  projects: [ProjectSchema]
})

var Student = mongoose.model("Student", StudentSchema);
var Project = mongoose.model("Project", ProjectSchema);

// db/schema.js

var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

var ProjectSchema = new Schema({
  title: String,
  unit: String
});

var StudentSchema = new Schema({
  name: String,
  age: Number,
  projects: [ {type: Schema.ObjectId, ref: "Project"}]
});

var Student = mongoose.model("Student", StudentSchema);
var Project = mongoose.model("Project", ProjectSchema);
