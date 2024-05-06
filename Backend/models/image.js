var mongoose=require( 'mongoose' );
const ImageSchema=new mongoose.Schema({
    image:{
        type:"String",
    }
})
const image=new mongoose.model('image',ImageSchema);
module.exports=image;