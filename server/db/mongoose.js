const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

//change the database with yours
mongoose.connect(
  "mongodb+srv://dwijjoshi02:IyLQ1ph3tfFab0Uq@hospital.sqza9z7.mongodb.net/hospi?retryWrites=true&w=majority"
);
//
module.exports = { mongoose };
