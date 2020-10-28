import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Topbar from '../components/TopBar';
import TimelineSection from '../components/TimelineSection';

export default function Timeline(){

    return (
        <Page>
            <Topbar />
            <TimelineSection /> 
        </Page>
    );
}

const Page = styled.div`
    width: 100%;
    background: #333;
    display:flex;
    justify-content:center;
    background-repeat: repeat;
`
