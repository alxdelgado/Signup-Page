// import packages; 
import React, { Suspense, useState } from 'react';

// import material-ui components; 
import Container from '@material-ui/core/Container';

// import react-bootstrap components; 
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';


// import custom styles; 
import '../signup-page/signup-page.css';

export default function SignUp_Page() {
    function formValidation() {
        const [validated, setValidated] = useState(false);

        const handleSubmit = (event) => {
            const form = event.currentTarget;
            if(form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            setValidated(true);
        }
    }; 

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <React.Fragment>
                <div className="signup-backdrop">
                    <Container component="div" fixed="false" maxWidth='lg'>
                        <Form controlId=''>

                        </Form>
                    </Container>
                </div>
            </React.Fragment>
        </Suspense>
    )
};