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
        username:"HerickM",
        pictureUrl:"https://pbs.twimg.com/profile_images/802982691478114304/UdQD82ju_400x400.jpg"
    }
    const [logIn,setLogIn] = useState(loginStruct);
    const [signUp,setSignUp] = useState(signUpStruct);
    const [userData,setUserData] = useState(userDataStruct);
    const [inputPost, setInputPost] = useState({});
    console.log(userData);
    return(
        <UserContext.Provider value={{setLogIn,setSignUp,logIn,signUp,setUserData,userData,inputPost,setInputPost}}>
            {props.children}
        </UserContext.Provider>
    );
}

