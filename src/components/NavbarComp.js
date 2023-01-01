import React, { Component } from 'react';
import { Navbar,Nav , NavDropdown ,Container ,Form  ,Button } from 'react-bootstrap';
import styles from '../css/style.module.css';

export default class NavbarComp extends Component {
    
    render() { 
        return (
    
        <div>
            <Navbar variant='dark' expand="lg" className = {styles.navbarColors}>
            <Container fluid>
                {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link style={{paddingLeft : '20px'}}>Home</Nav.Link>
                    {/* <Nav.Link >Recipes</Nav.Link> */}
                    <NavDropdown title="Helathy Living" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Recipes</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                        Workouts
                    </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link >News and Reserach</Nav.Link>
                    <Nav.Link >About Diabetes</Nav.Link>
                    <Nav.Link >Meet your doctor</Nav.Link>
                    <Nav.Link >About Us</Nav.Link>
                    
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button >Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
        
  
        
            );
    }
}
 
