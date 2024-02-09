import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { getAllPosts } from '../firebase';
import Sentiment from 'sentiment'; // Import sentiment analysis library
const PostList = () => {
 const [posts, setPosts] = useState([]);
 const sentiment = new Sentiment(); // Initialize sentiment analysis
 useEffect(() => {
  const fetchPosts = async () => {
   try {
    const postsData = await getAllPosts();
    setPosts(postsData);
   } catch (error) {
    console.error('Error fetching posts: ', error);
   }
  };
  fetchPosts();
 }, []);
 const getSentimentEmoji = (score) => {
  if (score > 0) {
   return '😊'; // Positive sentiment
  } else if (score < 0) {
   return '😞'; // Negative sentiment
  } else {
   return '😐'; // Neutral sentiment
  }
 };
 return (
  <div className="mb-4" style={{ height: '300px', overflowY: 'scroll' }}>
   <h2 className="mb-3" style={{ color: '#fff', textShadow: '0 0 10px #fff', fontWeight: 'bold' }}>Posts</h2>
   {posts.map(post => (
    <Card key={post.id} className="mb-3">
     <Card.Body>
      <Card.Text>{post.content}</Card.Text>
      <Card.Subtitle className="text-muted">
       Posted by: {post.userEmail} 
       {/* Display sentiment emoji */}
       {getSentimentEmoji(sentiment.analyze(post.content).score)}
      </Card.Subtitle>
     </Card.Body>
    </Card>
   ))}
  </div>
 );
};
export default PostList;

