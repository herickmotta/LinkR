import React, { useContext } from 'react'
import getPosts from '../data/postsMock';
import styled from 'styled-components';
import UserContext from '../contexts/UserContext';

export default function PostBox() {
    const { userData } = useContext(UserContext);
    const { posts } = getPosts();
    return (
        <>
            {posts.map((post) => {
                return(
                <Post>
                    <LeftBox>
                        <img src={userData.pictureUrl} />
                    </LeftBox>
                    <RightBox>
                        <a>{post.user.username}</a>
                        <p>{post.text}</p>
                        <ImgBox>
                        <div>
                        <p className="titleLink">{post.linkTitle}</p>
                        <p className="small grey">{post.linkDescription}</p>
                        <p className="small">{post.link}</p>
                        </div>
                        <img src={post.linkImage} />
                        </ImgBox>
                    </RightBox>
                </Post>
                )
            })}
        </>
    )
}

const Post = styled.div`
    margin-top: 20px;
    display: flex;
    background: #151515;
    border-radius: 16px;
    width: 40vw;
`;
const LeftBox = styled.div`
    height: 100;
    width: 60px;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
    display:flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15px;
    margin-right: 5px;
    img{
        border-radius: 26.5px;
        width: 70%;
    }
`;
const RightBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px 15px 15px 0px;
    width: 100%;
    padding-top: 15px;
    a{
        color: white;
        font-size: 15px;
        font-family: Lato;
        font-weight: 300;
    }
    p{
        color: #B7B7B7;
        margin-top: 5px;
        font-family: Lato;
    }
`;
const ImgBox = styled.div`
    border-radius: 11px;
    border: 1px solid grey;
    font-family: Lato;
    padding-left: 15px;
    margin-top: 10px;
    display: flex;
    .small{
        font-size: 11px;
    }
    .grey{
        color: #9B9595;
    }
    .titleLink{
        color: #CECECE;
        font-size: 16px;
    }
    div{
        padding-top: 15px;
        padding-bottom: 15px;
        margin-right: 10px;
    }
    img{
        border-top-right-radius: 11px;
        border-bottom-right-radius: 11px;
        height: 100%;
        width: 40%;
    }
    p{
        margin: 10px 0px;
    }
`;