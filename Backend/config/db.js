var mongoose=require( 'mongoose' );
const Dbconnect=()=>{
mongoose.connect("mongodb://localhost:27017/testapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 10000, // Increase server selection timeout
  socketTimeoutMS: 45000, 
}).then((data) => {
    console.log(`MongoDB connected with server data ${data.connection.host}`);
}).catch((err) => {
    console.error("Error in MongoDB connection:", err);
});
}
module.exports=Dbconnect;