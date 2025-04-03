// we will wrap the entire frontend with the UserContext.jsx in the App.jsx file.

import React, { createContext, useState } from 'react'

export const UserDataContext = createContext()


const UserContext = ({ children }) => {

    const [ user, setUser ] = useState({
        email: '',
        fullName: {
            firstName: '',
            lastName: ''
        }
    })

    return (
        <div>
            {/*This will provide the user data in every part of the website because we have wrapped the website with the UserContext in the main.jsx file.*/}
            <UserDataContext.Provider value={{ user, setUser }}>
                {children}                 {/*Children represents the content of each page.*/}
            </UserDataContext.Provider>
        </div>
    )
}

export default UserContext