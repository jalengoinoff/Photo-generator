import mongoose from "mongoose";

const Post = new mongoose.Schema({
    name: { type: String, required: true },
    prompt: { type: String, required: true },
    photo: { type: String, required: true },
});

const PostSchema = mongoose.model('Post', Post);  // Corrected from 'mongoose.modell' to 'mongoose.model'

export default PostSchema;
