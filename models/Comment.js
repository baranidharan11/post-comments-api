const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    text: String,
    postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
});

module.exports = mongoose.model('Comment', commentSchema);
