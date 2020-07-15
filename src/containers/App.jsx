// import packages;
import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

// Lazy Loading components; 
const HomePage = lazy(() => import('../components/home-page/home-page.jsx'));
const SignUp_Page = lazy(() => import('../components/signup-page/signup-page.jsx')); 

// import styled-components; 
import { ThemeProvider } from 'styled-components';

// import material-ui components; 
import { Box, Container, Grid } from '@material-ui/core';

// import react-bootstrap components; 
import Card from 'react-bootstrap/Card'; 

// import custom styles; 
import './App.css';

export default function App() {
    return (
        <React.Fragment>
            <Switch>
                <Suspense fallback={<div>Loading...</div>}>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/signup' component={SignUp_Page} />
                </Suspense>
            </Switch>            
        </React.Fragment>
    )
}