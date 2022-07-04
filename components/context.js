/* /context/AppContext.js */
import { React, createContext, useContext, useState, useEffect } from 'react';
import netlifyIdentity from 'netlify-identity-widget';
import router from 'next/router';
//import React from "react";
// create auth context with default value






// // set backup default for isAuthenticated if none is provided in Provider


const AuthContext = createContext({
        user:null,
         login: () => {},
         logout: () => {},
        authReady: false,
       isAuthenticated:false, 
       cart: {items:[], 
       total:0},
       addItem:()=>{},
       removeItem:()=>{}, 
       setUser:()=>{},
       
     //  const [user, setUser] = React.useState(null)
    })




    // const login = async () => {
    //     await supabase.auth.signIn({
    //         provider: "github",
    //     })
    // }
    // const logout = async () => {
    //     await supabase.auth.signOut();
    //     router.push("/")
    // }

export function useUserSession() {
    const {user, logIn, logOut} = useContext(AuthContext)
    return{user, logIn, logOut}
}



    export const AuthContextProvider = ({ children }) => {
        const [user, setUser] = useState(null);
    
        useEffect(() => {
            netlifyIdentity.on('login', (user) => {
              setUser(user)
              netlifyIdentity.close()
              console.log('login event')
            })
        
            // init netlify identity connection
            netlifyIdentity.init()
        
            return () => {
              netlifyIdentity.off('login')
            }
          }, [])
        
          const login = () => {
            netlifyIdentity.open()
          }
        
           const context = { user, login }

        return(
            <AuthContext.Provider value={context} >
                { children }
            </AuthContext.Provider>
        )
    }



export default AuthContext





/* /context/AppContext.js */

// create auth context with default value

// // set backup default for isAuthenticated if none is provided in Provider
// const AuthContext = React.createContext(
//     {isAuthenticated:true, 
//         cart: {items:[], 
//         total:0},
//         addItem:()=>{},
//         removeItem:()=>{},
//         user:false, 
//         setUser:()=>{}
//     });
    
// export default AuthContext;