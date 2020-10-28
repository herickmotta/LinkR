import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import UserContext from '../contexts/UserContext';
import TrendingTopics from './TrendingTopics';
import PostBox from './PostBox';
export default function TimelineSection() {
    const { userData } = useContext(UserContext);

    return (
        <Page>
            <h1 className="title">timeline</h1>
            <Section>
                <PostsSection>
                    <InputPostBox>
                        <LeftBox>
                            <img src={userData.pictureUrl} />
                        </LeftBox>
                        <RightBox>
                            <h1>O que você tem pra favoritar hoje?</h1>
                            <input placeholder="Insira aqui o link" />
                            <textarea placeholder="Comentário" />
                            <div className="buttonDiv">
                                <Button>
                                    Publicar
                            </Button>
                            </div>
                        </RightBox>
                    </InputPostBox>
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

const InputPostBox = styled.div`
    display: flex;
    background: white;
    border-radius: 16px;
    width: 40vw;
    height: 45%;
`
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
    margin: 15px 15px 15px 0px;
    justify-content: center;
    width: 100%;
    h1{
        color: grey;
        font-size: 15px;
        font-family: Lato;
        font-weight: 300;
        margin-bottom:5px;
    }
    input{
        background: #EFEFEF;
        border-radius: 5px;
        font-family: Lato;
        outline: none;
        border: none;
        margin: 5px 0px;
        padding: 5px 10px;
    }
    textarea{
        resize: none;
        background: #EFEFEF;
        font-family: Lato;
        border-radius: 5px;
        outline: none;
        border: none;
        margin: 0px 0px 5px 0px;
        padding: 5px 10px;
    }
    .buttonDiv{
        display: flex;
        justify-content: flex-end;
    }
`;
const Button = styled.button`
    background: #1877F2;
    border-radius: 5px;
    color: white;
    width: 112px;
    height: 28px;
    font-family: Lato;
    text-align: center;
    font-size: 14px;
`;
const PostsSection = styled.div`
    display: flex;
    flex-direction: column;
`;