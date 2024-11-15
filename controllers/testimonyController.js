const testimonials = require('../models/testimonyModel')

//logic for saving

exports.addTestimonyController = async(req,res)=>{
    console.log("inside add testimony controller");
    //get data from front end

    const {name,email,message} = req.body

    //save data to mongodb
    try
    {
        const newTestimony = new testimonials({
            name,email,message
        })
        await newTestimony.save()
        res.status(200).json(newTestimony)
    }
    catch(err)
    {
        res.status(401).json(err)
    }


    
}