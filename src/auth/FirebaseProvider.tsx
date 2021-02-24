import firebase from 'firebase/app'
import { createContext } from 'react';

export interface IFirebaseContext {
    firebase: firebase.app.App,
}
  
export const FirebaseContext = createContext({} as IFirebaseContext)

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_PUBLIC_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
}

const initFirebase = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
}

export const FirebaseProvider = ({ children }: any) => {
    initFirebase();
    return (
        <div>
            <FirebaseContext.Provider value={{ firebase: firebase.app() } as IFirebaseContext}>
                {children}
            </FirebaseContext.Provider>
        </div>
    );
}