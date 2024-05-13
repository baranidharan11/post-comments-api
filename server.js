const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentsRoutes');

const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://admin:admin000@atlascluster.bdvohkm.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


