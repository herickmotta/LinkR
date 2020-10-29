import React, { useContext, useEffect} from 'react';
import styled from 'styled-components';
import UserContext from '../contexts/UserContext';
import TrendingTopics from './TrendingTopics';
import InputPostBoxSection from './InputPostBoxSection';
import PostBox from './PostBox';
import PostContext from '../contexts/PostContext';
export default function MyPostsSection() {
    const {timeline,getMyPosts} = useContext(PostContext);
    useEffect( () => {
        getMyPosts();
     },[])
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