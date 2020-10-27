import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import Topbar from '../components/TopBar';

export default function Timeline(){

    return (
        <Page>
            <Topbar />
            {/* <TimelineSection /> */}
            {/* <TrendingTopics /> */}
        </Page>
    );
}

const Page = styled.div`
    width: 100%;
    background: #333;
    height: 100vh;
`