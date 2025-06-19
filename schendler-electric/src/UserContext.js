import React, { useState, useEffect, createContext, useContext } from 'react'
import { db } from './firebase_setup/firebase'
import { query, collection, onSnapshot } from 'firebase/firestore'
import postsArr from './postArr.json' 
import recommendationArr from './RecoArr.json' 



const UserContext = createContext()
const UserUpdateContext = createContext()

export function useUserContext() {
    return useContext(UserContext)
}

export function UserProvider({ children }) {
    const [carouselImages, setCarouselImages] = useState([])
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [recoArray, setRecoArray] = useState([])

    useEffect(() => {
        const tempUrl = query(collection(db, 'CarouselPics'));
        const unsubscribe = onSnapshot(tempUrl, (querySnapshot) => {
            const temp = [];
            querySnapshot.forEach((doc) => {
                temp.push(doc.data().imgUrl);
            });
            setCarouselImages(temp);
        });
        // Fetch recommendations
        setRecoArray(recommendationArr);

        return () => unsubscribe();
    }, []);


    const value = {
        carouselImages,
        postsArr,
        recoArray,
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;