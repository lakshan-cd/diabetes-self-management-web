import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  
} from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../css/style.module.css";


export default class NavbarComp extends Component {
  render() {
    return (
      <div>
        <Navbar variant="dark" expand="lg" className={styles.navbarColors}>
          <Container fluid>
            {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                {/* <Nav.Link> */}
                <Link
                  to="/"
                  className={styles.link}
                  style={{ paddingLeft: "20px" }}
                >
                  Home
                </Link>

                <NavDropdown
                  title="Helathy Living"
                  id="navbarScrollingDropdown"
                  style={{ paddingLeft: "40px" }}
                >
                  <Link to="/nutrition" className={styles.dropDown_link}>
                    <NavDropdown.Item href="#action3">
                      Nutrition
                    </NavDropdown.Item>
                  </Link>
                  <Link to="/workouts" className={styles.dropDown_link}>
                    <NavDropdown.Item href="#action3">
                      Workouts
                    </NavDropdown.Item>
                  </Link>
                </NavDropdown>

                {/* <Link to ="/healthyliving"  className={styles.link} style={{ paddingLeft: "40px" }}>Helathy Living</Link> */}
                <Link
                  to="/newsandresearch"
                  className={styles.link}
                  style={{ paddingLeft: "40px" }}
                >
                  News and Reserach
                </Link>
                <Link
                  to="/aboutdiabetes"
                  className={styles.link}
                  style={{ paddingLeft: "40px" }}
                >
                  About Diabetes
                </Link>
                {/* <Nav.Link >Meet your doctor</Nav.Link> */}
                {/* <Nav.Link>About Us</Nav.Link> */}
              </Nav>
              {/* <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button >Search</Button>
                </Form> */}
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* <Routes>
            <Route path="/" element={<Main/>}></Route>
        </Routes> */}
      </div>
    );
  }
}
