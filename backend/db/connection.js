const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/Food_DB",
{
   useCreateIndex:true, 
   useNewUrlParser:true,
   useUnifiedTopology:true,
   useFindAndModify:false
}).then(() => {
       console.log('Database connected');
}).catch((err) => {
   console.log("unable to connect")
});
module.exports = mongoose;
