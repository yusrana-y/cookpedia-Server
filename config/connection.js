const mongoose = require('mongoose')

const dbConnection = process.env.CONNECTION_STRING

mongoose.connect(dbConnection).then(res=>console.log("database connected succesfully")
).catch(err=>console.log("database connection failes")
)


