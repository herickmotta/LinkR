import React, { useContext, useEffect} from 'react';
import styled from 'styled-components';
import TrendingTopics from './TrendingTopics';
import PostBox from './PostBox';
import PostContext from '../contexts/PostContext';
import { useParams } from 'react-router';
import UserContext from '../contexts/UserContext';
import axios from 'axios';
export default function HashtagSection() {
    const {setPosts} = useContext(PostContext);
    let {hashtag} = useParams();
    const { userData } = useContext(UserContext);
    useEffect( () => {
        getHashtagPosts();
     },[])
     function getHashtagPosts(){
        const headers = {
            'user-token': userData.token
        }
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/hashtags/${hashtag}/posts`, {headers})
        request.then((response) => setPosts(response.data.posts)).catch(e=>alert('Houve uma falha ao obter os posts, por favor atualize a página'));
    }
    return (
        <Page>
            <h1 className="title">my posts</h1>
            <Section>
                <PostsSection>
                    <PostBox />
                </PostsSection>
                <TrendingTopics />
            </Section>
        </Page>
    );
}
const Page = styled.div`
    color:#FFF;
    padding-top:100px;
    .title{
        font-size: 3vw;
        font-family: 'Oswald', sans-serif;
        margin-bottom: 20px;
    }
`;

const Section = styled.section`
    display:flex;
`;


const PostsSection = styled.div`
    display: flex;
    flex-direction: column;
`;