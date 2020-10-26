import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
export default function Login(){
    const [signUp,setSignUp] = useState(false);
    return (
        <Page>
            <TitleContainer>
                <div>
                    <h1>linkr</h1>
                    <p>save, share and discover<br/> the best links on the web</p>                
                </div>
            </TitleContainer>
            <Aside>
                {
                    signUp ?
                    <Form>
                        <input type="email" placeholder="e-mail" />
                        <input type="password" placeholder="password" />
                        <input type="text" placeholder="username" />
                        <input type="url" placeholder="picture url" />
                        <button type="submit">Sign Up</button>
                    </Form>
                    :
                     <Form>
                        <input type="email" placeholder="e-mail" />
                        <input type="password" placeholder="password" />
                        <button type="submit">Log In</button>
                     </Form>
                }
                <span onClick={() => setSignUp(!signUp)}>
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
const Aside = styled.form`
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

const Form = styled.form`
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
