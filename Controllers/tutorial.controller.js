const Tutorial=require('../Models/tutorial.model');

//Create and Save a new Tutorial

exports.create=(req,res)=>{
    //validate request
    if(!req.body.title){
        res.status(400).send({message:"Title cannot be empty"})
        
        return;
    }

    //Create tutorial
    const tutorial=new Tutorial({
        title:req.body.title,
        description:req.body.description,
        published:req.body.published
    })

    //Save tutorial in database
    tutorial.save(tutorial)
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({message:err})
    })

};

// Retrieve all Tutorials from the database ..find by title
exports.findAll = (req, res) => {
    // const title =req.params.title
    Tutorial.find()
    .then(data=>{
        res.send(data)
    })

    .catch(err=>{
        res.status(500).send({
            message:err.message
        })
    })

  
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id=req.params.id;

    Tutorial.findById(id)
    .then(data=>{
        if(!data)
        res.status(404).send({message: "Not found tutorial with id "+ id})
        else res.send(data);
    })

    
  
};



// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id=req.params.id;
  Tutorial.findByIdAndRemove(id)
  .then(data=>{
    if(!data){
        res.status(400).send({
            message:`Cannot delete with id= ${id}`
        })
    }
        else {
            res.send({
                message:"Tutorial deleted successfully!"
            })
        }
    })
  }


// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Tutorial.deleteMany({})
    .then(data=>{
        res.send({
            message:"All records deleted successfully!"
        })
    })
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  Tutorial.find({published:true})
  .then(data=>{
    res.send(data)
  })
  .catch(err=>{
    res.status(500).send({
        message: err.message
    })
  })
};

