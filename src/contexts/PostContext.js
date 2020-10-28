import React,{createContext,useState} from 'react';
const PostContext = createContext();
export default PostContext;

export function PostContextProvider(props){
    const [inputPost, setInputPost] = useState({'link':''});
    const [posts,setPosts] = useState([]);

    return(
        <PostContext.Provider value={{inputPost,setInputPost,posts,setPosts}}>
            {props.children}
        </PostContext.Provider>
    );
}

