import React,{createContext,useState,useContext} from 'react';
import axios from 'axios';
import UserContext from '../contexts/UserContext';
const PostContext = createContext();
export default PostContext;

export function PostContextProvider(props){
    const [inputPost, setInputPost] = useState({'link':'','text':''});
    const [posts,setPosts] = useState(null);
    const { userData } = useContext(UserContext);
    const [timeline,setTimeline] = useState(true);
    console.log(posts);
    function getPosts(){
        const headers = {
            'user-token': userData.token
        }
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts?offset=0&limit=10`, {headers})
        request.then((response) => setPosts(response.data.posts)).catch(e=>alert('Houve uma falha ao obter os posts, por favor atualize a página'));
    }
    function getMyPosts(){
        const headers = {
            'user-token': userData.token
        }
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/${userData.id}/posts`, {headers})
        request.then((response) => setPosts(response.data.posts)).catch(e=>alert('Houve uma falha ao obter os posts, por favor atualize a página'));
    }
    return(
        <PostContext.Provider value={{inputPost,setInputPost,posts,setPosts,getPosts,timeline,setTimeline,getMyPosts}}>
            {props.children}
        </PostContext.Provider>
    );
}

