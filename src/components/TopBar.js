import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import UserContext from '../contexts/UserContext';
import { IoIosArrowDown } from "react-icons/io";
export default function Topbar(){
    const [DropMenu,SetDropMenu] = useState(false);
    return(
        <Header>
            <h1>
                linkr
            </h1>
            <div>
                <Menu opacity={DropMenu? '1':'0'}>
                    <IoIosArrowDown />
                    <nav>
                        <h2>My posts</h2>
                        <h2>Logout</h2>
                    </nav>
                </Menu>
                {/* <Avatar /> */}
            </div>
        </Header>
    );
}

const Header = styled.header`
    width: 100%;
    display:flex;
    justify-content: space-between;
    background:#151515;
    height: 7%;
    position:fixed;
    top: 0;
    left: 0;
    padding: 0 15px;
    align-items: center;
    h1{
        font-family: 'Passion One', cursive;
        font-size: 3vw;
        letter-spacing: 0.05em;
        color:#FFF;
    }
    div{
        display:flex;
    }
`

const Menu = styled.div`
    position: relative;
    color: #FFF;
    font-size: 3vw;
    nav{
        position: absolute;
        background:#151515;
        border-radius: 10px;
        font-family:'Lato', sans-serif;
        width: 200px;
        height: 300px;
        opacity: ${props => props.opacity}
    }
`