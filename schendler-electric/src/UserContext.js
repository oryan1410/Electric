import React, { useState, useEffect, createContext, useContext } from 'react'
import { db } from './firebase_setup/firebase'
import { query, getDocs, collection, onSnapshot, addDoc, where, orderBy, or } from 'firebase/firestore'



const UserContext = createContext()
const UserUpdateContext = createContext()

export function useUserContext() {
    return useContext(UserContext)
}

export function UserProvider({ children }) {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const texttext='asdasd'


    const value = {
texttext
    }
   
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;