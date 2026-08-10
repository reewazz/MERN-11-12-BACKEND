import mongoose, { mongo } from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({

    title : {
        type: String,
        required : true
    },
    description : String,
    category : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "Category"
    },
    likes : Number,
    status : Boolean,
    author : String,
    image : String
  

} ,  { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema);

export default Blog

