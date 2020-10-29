import React from 'react';
import Login from './pages/Login';
import Timeline from './pages/Timeline';
import TimelineSection from './components/TimelineSection';
import HashtagSection from './components/HashtagSection';
import UserPostsSection from './components/UserPostsSection';
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
                            <Timeline >
                                <TimelineSection title='timeline'/> 
                            </Timeline>
                        </Route>
                        <Route path='/my-posts'>
                            <Timeline >
                                <TimelineSection title='my posts'/> 
                            </Timeline>
                        </Route>
                        <Route path='/hashtag/:hashtag'>
                            <Timeline >
                                <TimelineSection /> 
                            </Timeline>
                        </Route>
                        <Route path='/user/:id'>
                            <Timeline >
                                <TimelineSection /> 
                            </Timeline>
                        </Route>
                    </Switch>
                </Router>
            </PostContextProvider>
        </UserContextProvider>
    );
}