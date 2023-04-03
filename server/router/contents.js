const express = require("express");
const router = express.Router();
const Contents =require('../models/contents');




router.get('/',(req,res) =>{
    Contents.find()
      .then(content => res.json(content))
      .catch(err => res.status(400).res.json(`Error: ${err}`));

});
//Request to add new course
router.post("/add",(req,res) => {
  const newContents = new Contents({
      title: req.body.title,
      description:req.body.description,
  });
  newContents
    .save()
    .then(() => res.json("The new Data posted Successfuly!"))
    .catch(err => res.status(400).json(`Error: ${err}`));
});
//find
router.get("/:id",(req,res) => {
  Contents.findById(req.params.id)
    .then(content => res.json(content))
    .catch(err => res.status(400).json(`Error: ${err}`));

});
//Request to update
router.put("/update/:id",(req,res) =>{
  Contents.findById(req.params.id)
    .then(content => {
      content.title = req.body.title;
      content.description = req.body.description;

      content
        .save()
        .then(() => res.json("The new Data Updated Successfuly!"))
        .catch(err => res.status(400).json(`Error: ${err}`));
      
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
});
//to delete
router.delete('/:id',(req,res) => {
  Contents.findByIdAndDelete(req.params.id)
    .then(() => res.json("The data was Deleted!"))
    .catch(err => res.status(400).json(`Error: ${err}`));

});

module.exports=router;