import React,{createContext,useState} from 'react';
const UserContext = createContext();
export default UserContext;

export function UserContextProvider(props){
    const [logIn,setLogIn] = useState({});
    const [signUp,setSignUp] = useState({});
    
    return(
        <UserContext.Provider value={{setLogIn,setSignUp,logIn,signUp}}>
            {props.children}
        </UserContext.Provider>
    );
}

/* 
    const logIn = {
        email:
        password:
    }
    const signUp = {
        email:
        password:
        username:
        pictureUrl:
    }
*/