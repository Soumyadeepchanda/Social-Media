import React from 'react';
import { createRoot } from 'react-dom/client'; // Correct import
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './components/AuthContext'; // Import AuthProvider from AuthContext
import { firebaseConfig } from './firebase'; // Import firebaseConfig from firebase
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // Import getFirestore from firebase/firestore
import 'bootstrap/dist/css/bootstrap.min.css';

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp); // Get Firestore instance

createRoot(
  document.getElementById('root')
).render(
  <React.StrictMode>
    {/* Wrap the App component with AuthProvider */}
    <AuthProvider firebaseApp={firebaseApp} firestore={firestore}> {/* Pass firestore instance to AuthProvider */}
      <App />
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
