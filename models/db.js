const mongoose = require('mongoose')

mongoose.set("strictQuery", false)

module.exports = mongoose.connect('mongodb+srv://amarnath:amarnath@cluster0.xzpc6dv.mongodb.net/tasks?retryWrites=true&w=majority' , {
    useUnifiedTopology : true,
    useNewUrlParser : true,
    useFindAndModify : false
    // useNewUrlParser: true,
    //       useUnifiedTopology: true,

}, err => {
    if(err) console.log(`error is DB connection ${err}`)
    console.log(`mongoDB connection Success`)
})