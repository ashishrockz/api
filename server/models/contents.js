const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contentSchema = new Schema({

    title:{
        type : String,
        required : true
    },
    description:{
        type : String,
        required : true
    }
});
const Contents = mongoose.model("Contents",contentSchema);
module.exports = Contents;