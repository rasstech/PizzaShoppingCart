const mongoose = require('mongoose');
const foodSchema = mongoose.Schema({
   name:{
      type:String,
   },
   img:{
      type:String,
   },
   price:{
      type:Number,
   },
   description:{
      type:String,
   }
    
}
)
const OrderItem = mongoose.model("OrderItem",foodSchema);

module.exports = OrderItem;