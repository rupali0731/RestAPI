const express = require('express');
const router=express.Router();
const tutorials=require("../controllers/tutorial.controller.js");
const app=express();

// Create a new Tutorial
router.post("/", tutorials.create);

// Retrieve all Tutorials
router.get("/", tutorials.findAll);

// Retrieve all published Tutorials
router.get("/published", tutorials.findAllPublished);

// Retrieve a single Tutorial with id
router.get("/:id", tutorials.findOne);



// Delete a Tutorial with id
router.delete("/:id", tutorials.delete);

// Create a new Tutorial
router.delete("/", tutorials.deleteAll);

app.use('/api/tutorials', router);


module.exports=app;


