
/*var Note =require ('../model/note.model.js');
var notes = require('../controller/note.controller.js');
var mongoose =require('mongoose');


module.exports = (app) => 
{
    

  
    // Create a new Note
    app.post('/notes',(res,req)=>
    {
       let newrecord= new Note({
            
        title:req.body.title,
        content:req.body.content
      
         //notes.create
         })
         newrecord.save(function(error,NEWENTERRECORD)
         {
             res.send(NEWENTERRECORD);
         })

    });
    
       
 

    // Retrieve all Notes
    app.get('/notes', function(req,res)
   {
    notes.findAll
   });

    // Retrieve a single Note with noteId
    app.get('/notes/:noteId',function(req,res) 
    {notes.findOne
    });

    // Update a Note with noteId
    app.put('/notes/:noteId', function(res,req)
    {
        notes.update
    });

    // Delete a Note with noteId
    app.delete('/notes/:noteId', function(res,req)
    {
    notes.delete
    });
}*/