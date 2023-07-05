const mongoose =  require('mongoose');

const Post = new mongoose.Schema({
  prompt: { type: String, required: true },
  response: { type: String, required: true },
});

const PostSchema = mongoose.model('Post',Post);

export default PostSchema;
