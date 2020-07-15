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

export default function Home_Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <React.Fragment>
                <Navbar bg="dark" fixed="top" expand="lg">
                   <Navbar.Brand className="nav-title">Bolt</Navbar.Brand>
                   <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/signup">Signup</Nav.Link>
                        </Nav>
                   </Navbar.Collapse>
                    <NavDropdown title="Dropdown" id="nav-dropdown">
                        <NavDropdown.Item href="/signup">SignUp</NavDropdown.Item> 
                    </NavDropdown>
                </Navbar>
            </React.Fragment>
        </Suspense>
    )
}
