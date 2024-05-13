Post-Comments Service
This project implements a basic Post-Comments Service using Node.js, Express.js, and MongoDB. It allows users to create posts and add comments to those posts.

Setup Instructions
Clone the repository:
git clone <repository-url>

Navigate to the project directory:
cd post-comments-service

Install dependencies:
npm install

Set up environment variables:
Add your MongoDB Atlas connection string as MONGODB_URI=<your-connection-string>
Replace <your-connection-string> with your actual MongoDB connection string.
Running the Server
To start the server, run:


npm start
The server will start at http://localhost:5000.

API Endpoints
Create a Post
Endpoint: POST /api/posts/create
Request Body: JSON with title and content fields.
json
{
    "title": "New Post Title",
    "content": "Lorem ipsum dolor sit amet..."
}
Get All Posts
Endpoint: GET /api/posts/getAllPosts
Add a Comment
Endpoint: POST /api/comments/:postId/addComment
Request Body: JSON with text field for the comment text.
json
{
    "text": "This is a new comment."
}
Replace :postId with the actual ObjectId of the post you want to add a comment to.

Architecture Overview
Server: Node.js with Express.js for handling HTTP requests.
Database: MongoDB Atlas for storing posts and comments.
Models: Mongoose for defining schemas and interacting with the MongoDB database.
Routes: Express.js routes for handling API endpoints.
Controllers: Logic for handling business operations such as creating posts and adding comments.
Environment Variables: Managed using the dotenv package for configuring sensitive information like database connection strings.
Testing the API
You can test the API endpoints using tools like Postman or cURL. See the API Endpoints section above for details on each endpoint.

Dependencies
Node.js
Express.js
Mongoose
dotenv
