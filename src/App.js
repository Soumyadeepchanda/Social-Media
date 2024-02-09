//App.js
import React from 'react';
import './App.css';
import { Container, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import UserProfile from './components/UserProfile';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import { AuthProvider } from './components/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="#home" style={{ color: '#fff', textShadow: '0 0 10px #fff', fontSize: '36px',fontWeight:'bold' }}>Share Sphere</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <SignIn />
              </Navbar.Text>
              <Navbar.Text>
                <SignOut />
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container className="main-content">
          <UserProfile />
          <PostForm />
          <PostList />
        </Container>
        <footer className="footer">
          <Container>
            <p style={{ color: '#fff', textShadow: '0 0 10px #fff',fontWeight:'bold' }}>&copy; 2024 Social Media App</p>
          </Container>
        </footer>
      </div>
    </AuthProvider>
  );
}

export default App;
