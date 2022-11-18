import mongoose from "mongoose";
import  {Schema}  from "mongoose";

const userSchema = new Schema({
    name: String
});

const User = mongoose.model('user', userSchema);

export default User;