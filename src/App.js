import React from 'react';
import Login from './pages/Login';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { UserContextProvider } from './contexts/UserContext';


export default function App(){

    return (
        <UserContextProvider>
            <Router>
                <Switch>
                    <Route path='/' exact>
                        <Login />
                    </Route>
                    <Route path='/timeline'>
                        <h1>timeline</h1>
                    </Route>
                </Switch>
            </Router>
        </UserContextProvider>
    );
}