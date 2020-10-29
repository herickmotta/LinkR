import React, { useContext, useEffect} from 'react';
import styled from 'styled-components';
import TrendingTopics from './TrendingTopics';
import InputPostBoxSection from './InputPostBoxSection';
import PostBox from './PostBox';
import PostContext from '../contexts/PostContext';
import { useParams } from 'react-router';
export default function TimelineSection(props) {
    const {getPosts,getMyPosts,getHashtagPosts,getUserPosts} = useContext(PostContext);
    const {title:displayTitle} = props;
    const {hashtag} = useParams();
    const {id} = useParams();

    if(!(hashtag && id)){
        useEffect( () => {
            choosePosts();
         },[displayTitle,hashtag,id])
    }
    function choosePosts(){
        if(displayTitle === 'timeline'){
            getPosts();
        } else if(displayTitle === 'my posts'){
            getMyPosts();
        } else if(hashtag){
            getHashtagPosts(hashtag);
        } else if(id){
            getUserPosts(id);
        }
    }

    return (
        <Page>
            <h1 className="title">{displayTitle}</h1>
            <Section>
                <PostsSection>
                    <InputPostBoxSection /> 
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
    @media (max-width: 600px){
        width: 100%;
        .title{
            font-size: 7vw;
            margin-left: 15px;
        }
    }
`;

const Section = styled.section`
    display:flex;
    @media (max-width: 600px){
        width: 100%;
    }
`;

const PostsSection = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 600px){
        width: 100%;
    }
`;