import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import UserContext from '../contexts/UserContext';
import getTrending from '../data/trendingMock';
export default function TrendingTopics(){
    const {hashtags} = getTrending();
    return (
        <Section>
            <h1>Trending</h1>
            <ul>
                {hashtags.map(t => 
                    <li>{t.name}</li>
                )}
            </ul>
        </Section>
    );
}

const Section = styled.section`
    background: #151515;
    color:#FFF;
    width: 300px;
    height: 500px;
    border-radius: 10px;
    padding-top: 80px;
`;

const List = styled.ul`

`;

