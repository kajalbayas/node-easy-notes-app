//var connect = require('connect');
var http=require('http');
var express=require('express');
const logger=require('morgan');
var app = express();
var bodyparser=require('body-parser');
var db;
//basically tells the system that you want json to be used
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }))


//var dbConfig =require('./config/database.config.js');
var mongoose =require('mongoose');
mongoose.Promise=global.Promise;


var Note = require('./app/model/note.model.js');


var Schema=mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/easy-notes',
    {
        useNewUrlParser: true
          //db=client.db('easy-notes')
    }).then(()=>
    {
        console.log('Successfully connected to DB');
    });

//define simple route
app.get('/notes',(req,res)=>
{
    console.log('get')
    Note.find((error,data)=>
    {
       console.log(data);
       res.send(data);
    })
    //res.json({"messsage":"welcome to easynote application "});
})


app.post('/notes',(req, res)=>
{
   
console.log('Rwequest body : '+JSON.stringify(req.body));
 var newrecord= new Note
   ({
      
       title:req.body.title,
      
       content:req.body.content
    });
    newrecord.save().then(post => res.json(post));

    
});

//to edit record 
app.put('/notes/:id',(req,res)=>
{ 
    console.log("put");
    Note.findByIdAndUpdate({_id:req.params.id},
        {
            title:req.body.title,
            content:req.body.content
        },
        function(err,data)
        {
            if(err) res.json(err);
            else{
                console.log("updated data "+data);
                res.send(data);
            }
        })

   /* Note.findById(req.params.id,(data)=>
    {
        console.log(req.params.id);
        console.log('updated body:'+JSON.stringify(req.body));
        var jsonbody=JSON.stringify(req.body);
        console.log(jsonbody);
        Object.assign(data,jsonbody);
     
        console.log('updated data---'+ data);
    })*/

});

//to delete record by id 
app.delete('/notes/:id',(req,res)=>
{
    console.log('delete');
    Note.findByIdAndRemove({_id:req.params.id},
        function(err,data)
        {
            if(err) res.json(err);
            else
            {
               console.log('deleted data'+data);
               res.send(data);
            }

        })
})


//port listening to req
app.listen(8000,()=>
{
    console.log('server is listening to port 8000');

})