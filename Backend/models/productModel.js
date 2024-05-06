var mongoose=require('mongoose');
const productSchema = new mongoose.Schema({
    title:
     { 
        type: String,
        //  required: true 
        },
    price:
     {
         type: Number,
        //   required: true
         },
    description:
     {
         type: String 
        },
    discountPercentage:
     {
         type: Number,
        //   required: true 
        },
    rating:
     {
         type: Number,
        //   required: true
         },
    category:
     {
         type: String, 
        //  required: true 
        },
    images:
     { 
        type: [String],
         required: true 
        },
    brand:
     {
         type: String,
        //   required: true
         },
    stock:
     { 
        type: Number, 
        // required: true 
    }
});

const  Product = mongoose.model('Product',productSchema);
module.exports=Product;