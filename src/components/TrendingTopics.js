import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import UserContext from '../contexts/UserContext';
import getTrending from '../data/trendingMock';

export default function TrendingTopics(){
    const {hashtags} = getTrending();
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

