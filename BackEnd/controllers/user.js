const userModel = require("./../models/user");

// to create new user

exports.createUser = async (req , res) => {
        try{
            const saveData = await new userModel(req.body).save();
            res.status(201).json(saveData);
        }catch(err){
            res.status(500).json({err})
        }
}


// to get all user

exports.getAllUser = async (req , res) => {
        try{
            const user = await userModel.find();
            res.json(user);
        }catch(err){
            res.json({err})
        }
}

// to get specific user

exports.getUser = async (req , res) => {
    try{
        const user = await userModel.find({_id:req.params.userID});
        res.json(user);
    }catch(err){
        res.json({err});
    }
}

// to delete user
exports.deleteUser = (req , res) => {
    userModel.findOneAndDelete({_id:req.params.userID}, (err,data) =>{
        if(err){
            res.json({err})
        }else {
            res.json(data)
        }
    })
}


// to update user
exports.updateUser = (req , res) => {
    userModel.findOneAndUpdate({_id:req.params.userID} , req.body , {new:true}, 
        (err , data) => {
            if(err){
                res.json({err})
            }else {
                res.json(data)
            }
        })
}