const mongoose = require("mongoose")

const database=process.env.DB_URL

mongoose.connect(database,{
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false,
}).then(() => {
    console.log("Databse Connected")
}).catch((err) => {
    console.log("Cant connect to database")
})