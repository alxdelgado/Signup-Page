// import packages;
import React, { Suspense } from 'react'; 

// import material-ui components; 
import Container from '@material-ui/core/Container';

// import react-bootstrap components; 
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown';

// import custom styles; 
import './home-page.css';

export default function HomePage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <React.Fragment>
                <Navbar fill="true" variant="tabs" bg="dark" fixed="top" expand="lg">
                   <Navbar.Brand className="nav-title">Bolt</Navbar.Brand>
                   <Nav.Item>
                        <Nav.Link className="signup-link" href='/signup'>Sign Up</Nav.Link>
                   </Nav.Item>
                </Navbar>
            </React.Fragment>
        </Suspense>
    )
}
