const mongoose = require('mongoose');

const Tutorial = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    published:{
        type: Boolean,
        default: true
    }

})


Tutorial.method("toJSON",function(){
    const {__v,_id,...object}=this.toObject();
    object.id=_id;
    return object;
    
});



module.exports=mongoose.model('Tutorial',Tutorial);