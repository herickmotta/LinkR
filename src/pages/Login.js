import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import axios from 'axios';

export default function Login() {
    const [signUp, setSignUp] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const userData = { "email": email, "password": password, "username": username, "pictureUrl": imgUrl };

    function tryLogin(event) {
        event.preventDefault();
        let cont = 0;
        if (username === "") {
            cont++;
            alert("Preencha o username!");
        }
        if (email === ""){
            cont++;
            alert("Preencha o email!");
        }
        if (password === ""){
            cont++;
            alert("Preencha a senha!");
        } 
        if (imgUrl === ""){
            cont++;
            alert("Insira uma imagem!");
        } 

        if (cont === 0) {
            const request = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/sign_up', userData);
            request.then((response) => console.log(response)).catch((error) => console.log(error));
        }

        //não sei pq ele não está me retornando erro quando deixou algum campo em branco, aparentemente a API aceita requisições com username vazio e nós que precisamos tratar
        
        //não achei a solução do cont++ elegante, futuramente pensar numa solução melhor
    }
    return (
        <Page>
            <TitleContainer>
                <div>
                    <h1>linkr</h1>
                    <p>save, share and discover<br /> the best links on the web</p>
                </div>
            </TitleContainer>
            <Aside>
                <form onSubmit={(event) => tryLogin(event)}>
                    {
                        signUp ?
                            <Form>
                                <input type="email" placeholder="e-mail" onChange={e => setEmail(e.target.value)} />
                                <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
                                <input type="text" placeholder="username" onChange={e => setUsername(e.target.value)} />
                                <input type="url" placeholder="picture url" onChange={e => setImgUrl(e.target.value)} />
                                <button type="submit" onClick={(e) => tryLogin(e)}>Sign Up</button>
                            </Form>
                            :
                            <Form>
                                <input type="email" placeholder="e-mail" onChange={e => setEmail(e.target.value)} />
                                <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
                                <button type="submit">Log In</button>
                            </Form>
                    }
                </form>
                <span onClick={() => { setSignUp(!signUp) }}>
                    {signUp ? 'Switch back to log in' : 'First time? Create an account!'}
                </span>
            </Aside>
        </Page>
    );
}

const Page = styled.div`
    width: 100%;
    display:flex;
    height: 100vh;
`

const TitleContainer = styled.div`
    background:#151515;
    width: 62%;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    color: #fff;
    h1{
        font-size: 7vw;
        margin-bottom:25px;
        font-family: 'Passion One', cursive;
    }
    p{
        font-size: 2vw;
        line-height: 45px;
    }
`
const Aside = styled.div`
    background: #333;
    width: 38%;
    color: #FFF;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    span{
        text-decoration: underline;
        cursor: pointer;
        color: #FFF;
        font-size: 1vw;
        font-family:'Lato', sans-serif;
        letter-spacing: 1.2px;
    }
`

const Form = styled.div`
    width: 90%;
    display: flex;
    flex-direction:column;
    
    input{
        border-radius: 5px;
        margin-bottom:10px;
        height: 50px;
        padding: 0 15px;
        font-size: 1.5vw;
        font-family:inherit;
    }
    input::placeholder{
        color: rgba(159,159,159,0.8);
        font-weight: lighter;
    }
    button{
        font-size: 1.5vw;
        border-radius: 5px;
        background: #1877F2;
        height: 50px;
        color:#FFF;
        font-family:inherit;
        margin-bottom: 20px;
    }
`