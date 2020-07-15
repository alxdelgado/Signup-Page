// import packages; 
import React, { Suspense } from 'react';

// import material-ui components; 
import { Container } from '@material-ui/core';

// import react-bootstrap components; 
import Card from 'react-bootstrap/Card';

// import custom styles; 
import '../signup-page/signup-page.css';

export default function SignUp_Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <React.Fragment>
                <div className="signup-card">
                    <h1 className="card-title">Hello World</h1>
                </div>
            </React.Fragment>
        </Suspense>
    )
};