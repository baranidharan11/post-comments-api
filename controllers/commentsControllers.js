// controllers/commentController.js
const Post = require('../models/Post');

// Add a comment to a post
exports.addComment = async (req, res) => {
    try {
        const { text } = req.body;
        const postId = req.params.postId;

        // Check if the post exists
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        // Create the comment object
        const newComment = { text };
        post.comments.push(newComment);
        await post.save();

        res.status(201).json({ message: 'Comment added successfully', comment: newComment });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};
