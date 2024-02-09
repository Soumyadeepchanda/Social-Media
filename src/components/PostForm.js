//PostForm.js
import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';// Ensure correct import path
import { AuthContext } from './AuthContext';
import { collection, addDoc, firestore } from '../firebase';
const PostForm = () => {
  const [content, setContent] = useState('');
  const { currentUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(firestore, 'posts'), {
        content: content,
        timestamp: new Date(),
        userId: currentUser.uid
      });
      setContent('');
    } catch (error) {
      console.error('Error adding post: ', error);
    }
  };

  return (
    <div className="mb-4">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="postContent">
          <Form.Label style={{ color: '#fff', textShadow: '0 0 10px #fff',fontWeight: 'bold' }}>Enter your post content:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Group>
        <div>
        <div style={{ marginBottom: '20px' }}></div>
        <Button variant="primary" type="submit" size="lg">
           Post
        </Button>
    </div>
      </Form>
    </div>
  );
};

export default PostForm;
