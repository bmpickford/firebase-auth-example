import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseProvider } from './auth/FirebaseProvider';
import { UserProvider } from './auth/UserContext';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </FirebaseProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
