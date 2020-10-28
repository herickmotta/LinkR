import Axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import UserContext from '../contexts/UserContext';
import axios from 'axios';
export default function TrendingTopics(){
    const {userData} = useContext(UserContext);
    const [hashtags,setHashtags] = useState([]);
    useEffect(()=> {
        const headers = {
            'user-token': userData.token
        }
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/hashtags/trending`,{headers})
        request.then((response) => setHashtags(response.data.hashtags)).catch(e=>console.log(e));
    },[])
    if(hashtags.length===0) return <h1>Carregando...</h1>
    return (
        <>
        <Section>
            <h2>trending</h2>
            <List>
                {hashtags.map(t => 
                    <li key={t.id}>
                        {`# ${t.name}`}
                    </li>
                )}
            </List>
        </Section>
        </>
    );
}

const Section = styled.section`
    
    background: #151515;
    color:#FFF;
    width: 300px;
    height: 350px;
    border-radius: 10px;
    margin: 0 0 0 20px;

    h2{
        padding:15px;
        border-bottom: 1px solid rgba(255,255,255,0.3);
        font-size: 2vw;
    }
`;

const List = styled.ul`
    font-family: 'Lato', sans-serif;
    font-weight:bold;
    padding: 20px 0 0 15px;
    li{
        margin-bottom: 10px;
    }
`;

