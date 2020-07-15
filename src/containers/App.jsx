// import packages;
import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

// import components;
import Home_Page from '../components/home-page/home-page.jsx';
import SignUp_Page from '../components/signup-page/signup-page.jsx';

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
                    <Route exact path='/' component={Home_Page} />
                    <Route exact path='/signup' component={SignUp_Page} />
                </Suspense>
            </Switch>            
        </React.Fragment>
    )
}