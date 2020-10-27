import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import Topbar from '../components/TopBar';
import TimelineSection from '../components/TimelineSection';

export default function Timeline(){

    return (
        <Page>
            <Topbar />
            
            <TimelineSection /> 
            <TrendingTopic />
        </Page>
    );
}

const Page = styled.div`
    width: 100%;
    background: #333;
    height: 100vh;
    display:flex;
    justify-content:center;
`
const TrendingTopic = styled.div`
    background: #000;
    width: 300px;
    height: 500px;
    border-radius: 10px;
`