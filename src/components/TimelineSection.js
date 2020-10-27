import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import UserContext from '../contexts/UserContext';

export default function TimelineSection(){
    return (
        <Section>
            <h1>timeline</h1>
        </Section>
    );
}

const Section = styled.section`
    color:#FFF;
    padding-top:100px;
    h1{
        font-size: 3vw;
        font-family: 'Oswald', sans-serif;
    }
`;