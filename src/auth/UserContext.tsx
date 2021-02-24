import { createContext, useContext, useState } from 'react';
import { FirebaseContext } from './FirebaseProvider';

export interface IUser {
    displayName: string;
    email: string;
}

export interface IUserContext {
    user: IUser;
    setUser: (user: IUser) => void
    logout: () => Promise<void>
}

export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({ children }: any) => {
    const { firebase } = useContext(FirebaseContext);
    const [user, setUser] = useState({} as IUser);
    const logout = async () => {
        await firebase.auth().signOut();
        window.location.reload();
    }
    return (
        <div>
            <UserContext.Provider value={{ user, setUser, logout }}>
                {children}
            </UserContext.Provider>
        </div>
    );
}