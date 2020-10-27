import React,{createContext,useState} from 'react';
const UserContext = createContext();
export default UserContext;

export function UserContextProvider(props){
    const loginStruct = {
        email:"",
        password:""
    };
    const signUpStruct = {
        email:"",
        password:"",
        username:"",
        pictureUrl:""
    };
    const [logIn,setLogIn] = useState(loginStruct);
    const [signUp,setSignUp] = useState(signUpStruct);
    const [userData,setUserData] = useState({});
    console.log(userData);
    return(
        <UserContext.Provider value={{setLogIn,setSignUp,logIn,signUp,setUserData}}>
            {props.children}
        </UserContext.Provider>
    );
}

