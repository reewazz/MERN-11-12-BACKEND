import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({

    fullName : String,
    email : {
        type: String,
        required : true,
        unique :true
    },
    password : String,
    

} ,  { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User

