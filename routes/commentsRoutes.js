const express = require('express');
const commentController = require('../controllers/commentsControllers')
const router = express.Router();

router.post('/:postId/addComment', commentController.addComment);

module.exports = router;
