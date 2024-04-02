import mongoose from "mongoose"


export const Connection = async(username,password)=>{

const URL=`mongodb+srv://${username}:${password}@blog-app.o7yqubv.mongodb.net/`;
try {
  useNewUrlParser: true,
  //useUnifiedTopology: true,
  console.log('Connected to MongoDB');

}
catch(error) {

 console.log('Error connecting to MongoDB:', error);
}
}
export default Connection;