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
        pictureUrl:"https://pbs.twimg.com/profile_images/802982691478114304/UdQD82ju_400x400.jpg",
        id:'49'
    }

    const [logIn,setLogIn] = useState(loginStruct);
    const [signUp,setSignUp] = useState(signUpStruct);
    const [userData,setUserData] = useState(userDataStruct);
    const [inputPost, setInputPost] = useState({'link':''});
    userData.token = "34d11bbf-f9e9-4934-9b21-ccaada2a1536"; //TEMPORARIO- REMOVER
    return(
        <UserContext.Provider value={{setLogIn,setSignUp,logIn,signUp,setUserData,userData,inputPost,setInputPost}}>
            {props.children}
        </UserContext.Provider>
    );
}

