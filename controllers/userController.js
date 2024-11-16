const users = require('../models/userModel')
const bcrypt = require('bcrypt')
//register logic

exports.registerController = async(req,res)=>{
    console.log("inside logic controller")

    //get data from frontend
    const {username,email,password} = req.body

    //check if data in mongodb
    try
    {
        const existingUser = await users.findOne({email})
        console.log(existingUser);
        
        if(existingUser)
        {
            res.status(406).json("Already existing account")
        }
        else
        {
            const encryptedPassword = await bcrypt.hash(password,14)
            const newUser = new users({
                username,email,password:encryptedPassword,profilePik:""
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    }
    catch(err)
    {
        res.status(401).json(err)
    }
    
}