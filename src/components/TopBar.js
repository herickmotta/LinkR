import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import UserContext from '../contexts/UserContext';
import { IoIosArrowDown } from "react-icons/io";
export default function Topbar(){
    const [DropMenu,SetDropMenu] = useState(false);
    const {userData} = useContext(UserContext);
    console.log(userData);
    return(
        <Header>
            <h1>
                linkr
            </h1>
            <div>
                <Menu
                 opacity={DropMenu? '1':'0'}
                 translate={DropMenu? 'translateY(0)':'translateY(-20px)'}
                >
                    <IoIosArrowDown onClick={() => SetDropMenu(!DropMenu)} />
                    <nav>
                        <h2>My posts</h2>
                        <h2>Logout</h2>
                    </nav>
                </Menu>
                <img src={userData.pictureUrl} />
            </div>
        </Header>
    );
}

const Header = styled.header`
    width: 100%;
    display:flex;
    justify-content: space-between;
    background:#151515;
    height: 70px;
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
        align-items:center;
    }
    img{
        height: 50px;
        width: 50px;
        border-radius: 50%;
    }
`

const Menu = styled.div`
    position: relative;
    color: #FFF;
    font-size: 3vw;
    margin-right: 10px;
    & :first-child{
        z-index:4;
    }
    nav {
        font-size: 1.5vw;
        top:50px;
        position: absolute;
        background:#151515;
        border-bottom-left-radius: 25px;
        font-family:'Lato', sans-serif;
        width: 200px;
        right: -63px;
        opacity: ${props => props.opacity};
        transition: 400ms ease;
        padding: 20px;
        transform: ${props => props.translate};
    }
    h2{
        padding: 10px;
    }
    
`