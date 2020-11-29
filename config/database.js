const mongoose = require('mongoose')
mongoose.Promise = global.Promise 

const CONNECTION_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/user-posts'

// mongoose.set('useCreateIndex', true)
mongoose.connect(CONNECTION_URI,{
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true,
    useFindAndModify: false
})
    .then(() => {
        console.log('connected to db')
    })
    .catch((err) => {
        console.log('errr connecting to db', err)
    })

module.exports = mongoose


