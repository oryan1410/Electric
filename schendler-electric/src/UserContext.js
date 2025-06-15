import React, { useState, useEffect, createContext, useContext } from 'react'
import { db } from './firebase_setup/firebase'
import { query, collection, onSnapshot } from 'firebase/firestore'



const UserContext = createContext()
const UserUpdateContext = createContext()

export function useUserContext() {
    return useContext(UserContext)
}

export function UserProvider({ children }) {
    const [carouselImages, setCarouselImages] = useState([])
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const tempUrl = query(collection(db, 'CarouselPics'));
        const unsubscribe = onSnapshot(tempUrl, (querySnapshot) => {
            const temp = [];
            querySnapshot.forEach((doc) => {
                temp.push(doc.data().imgUrl);
            });
            console.log(temp);
            setCarouselImages(temp);
        });
        return () => unsubscribe();
    }, []);


    const value = {
        carouselImages,
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;