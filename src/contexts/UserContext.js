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
    const userDataStruct = {

    }
    const inputStruct = {
        link: '',
        text:''
    }
    function logOut(){
        setLogIn(loginStruct);
        setSignUp(signUpStruct);
        setUserData(userDataStruct);
    }
    const [logIn,setLogIn] = useState(loginStruct);
    const [signUp,setSignUp] = useState(signUpStruct);
    const [userData,setUserData] = useState(userDataStruct);
    const [inputPost, setInputPost] = useState(inputStruct);
    userData.token = "34d11bbf-f9e9-4934-9b21-ccaada2a1536"; //TEMPORARIO- REMOVER
    return(
        <UserContext.Provider value={{setLogIn,setSignUp,logIn,signUp,setUserData,userData,inputPost,setInputPost,logOut}}>
            {props.children}
        </UserContext.Provider>
    );
}

