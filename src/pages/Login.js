import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
export default function Login() {
    const history = useHistory();
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const { setLogIn, setSignUp, logIn, signUp,setUserData } = useContext(UserContext);
    const [signUpState, setSignUpState] = useState(false);
    function submitForm(event) {
        event.preventDefault();
        if (signUpState) {
            trySignUp();
        } else tryLogin();
    }
    function tryLogin() {
        if (buttonDisabled) return;
        const entries = Object.entries(logIn);
        let cont = 0;
        entries.forEach(entrie => {
            if(entrie[1] === ""){
                cont ++;
                alert(`Preencha o campo ${entrie[0]}`);
            }
        });
        if (cont === 0) {
            setButtonDisabled(true);
        }
        if (cont === 0) {
            const request = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/sign_in', logIn);

            request.then((response) => {
                console.log(response)
                setUserData({...response.data.user,'token':response.data.token});
                history.push('/timeline');
            });
            request.catch((error) => {
                alert('E-mail/senha inválidos')
                setButtonDisabled(false);
            });
        }
    }
    function trySignUp() {
        let cont = 0;
        if (buttonDisabled) return;
        const entries = Object.entries(signUp);
        entries.forEach(entrie => {
            if(entrie[1] === ""){
                cont ++;
                alert(`Preencha o campo ${entrie[0]}`);
            }
        });
        if (cont === 0) {
            setButtonDisabled(true);
            const request = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/sign_up', signUp);

            request.then((response) => {
                console.log(response)
                history.push('/timeline');
            });
            request.catch((error) => {
                alert('Erro ao cadastrar! Verifique os campos!')
                setButtonDisabled(false);
            });
        }
    }

    //não achei a solução do cont++ elegante, futuramente pensar numa solução melhor

    //verificar como guardar o token do usuário
    //}
    return (
        <Page>
            <TitleContainer>
                <div>
                    <h1>linkr</h1>
                    <p>save, share and discover<br /> the best links on the web</p>
                </div>
            </TitleContainer>
            <Aside>
                <form onSubmit={(event) => submitForm(event)}>
                    {
                        signUpState ?
                            <Form>
                                <input type="email" placeholder="e-mail" onChange={e => setSignUp({ ...signUp, 'email': e.target.value })} />
                                <input type="password" placeholder="password" onChange={e => setSignUp({ ...signUp, 'password': e.target.value })} />
                                <input type="text" placeholder="username" onChange={e => setSignUp({ ...signUp, 'username': e.target.value })} />
                                <input type="url" placeholder="picture url" onChange={e => setSignUp({ ...signUp, 'pictureUrl': e.target.value })} />
                                <button type="submit">Sign Up</button>
                            </Form>
                            :
                            <Form>
                                <input type="email" placeholder="e-mail" onChange={e => setLogIn({ ...logIn, 'email': e.target.value })} />
                                <input type="password" placeholder="password" onChange={e => setLogIn({ ...logIn, 'password': e.target.value })} />
                                <button type="submit">Log In</button>
                            </Form>
                    }
                </form>
                <span onClick={() => { setSignUpState(!signUpState) }}>
                    {signUpState ? 'Switch back to log in' : 'First time? Create an account!'}
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
const Aside = styled.div` //esse Aside estava como form, precisei trocar pra div pq tava dando erro no console de um form dentro do outro
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