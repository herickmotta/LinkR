import React from 'react';
import Login from './pages/Login';
import Timeline from './pages/Timeline';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { UserContextProvider } from './contexts/UserContext';
import { PostContextProvider } from './contexts/PostContext';


export default function App(){

    return (
        <UserContextProvider>
            <PostContextProvider>
                <Router>
                    <Switch>
                        <Route path='/' exact>
                            <Login />
                        </Route>
                        <Route path='/timeline'>
                            <Timeline />
                        </Route>
                        <Route path='/my-posts'>

                        </Route>
                        <Route path='/fulano'>
                            
                        </Route>
                    </Switch>
                </Router>
            </PostContextProvider>
        </UserContextProvider>
    );
}