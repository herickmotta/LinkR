import React from 'react';
import ReactDOM from 'react-dom';
import Login from './pages/Login';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

export default function App(){

    return (
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
    );
}