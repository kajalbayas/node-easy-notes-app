var mongoose =require('mongoose');

/*var restful = require('node-restful');
var mongoose = restful.mongoose;*/

var  NoteSchema= new mongoose.Schema(
    {
       title:String,
       content:String
    }
);

    module.exports=mongoose.model('Note',NoteSchema);