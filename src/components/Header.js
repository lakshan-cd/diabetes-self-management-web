import { Row,Col,Nav } from 'react-bootstrap';
import navIcon1 from '../assets/images-header/navIcon-f.png';
import navIcon2 from '../assets/images-header/navIcon-y.png';
import navIcon3 from '../assets/images-header/navIcon-i.png';
import navIcon4 from '../assets/images-header/navIcon-t.png';
import navIcon5 from '../assets/images-header/navIcon-login.png';

import sildeAdd1 from '../assets/side-add/slide-add-1.png';
import styles from '../css/style.module.css';


const Header =  () => {
    return(
       
        <div>
        <div>
            <Row>
                <Col>
                    <div style={{ float : 'left' , paddingLeft : '30px', marginTop : '10px' , color:'gray'}}>
                        <span >Manage Your </span> 
                    </div>
                </Col>
                <Col xs={6}></Col>
                <Col >
                <div style={{float : 'right' , paddingRight : '30px', marginTop : '10px'}}>
                        <span><a href='...' className={styles.header_open_mobile_app}>Open Mobile App  <img src= {sildeAdd1} width = {20}></img></a></span> 
                </div>
                </Col>
            </Row>
            <Row>
                <Col>
                <div style={{float : 'left' , paddingLeft : '30px'}}>
                        <h3 >Diabetes</h3>
                </div>
                </Col>
            <Col xs={6}></Col>
            <Col >
            <div style={{float : 'right' , paddingRight : '10px'}}>

                <Nav className="me-auto">
                    <Nav.Link href="#home" ><img src = {navIcon1} alt="" width={20}/></Nav.Link>
                    <Nav.Link href="#projects" ><img src = {navIcon3} alt="" width={20}/></Nav.Link>
                    <Nav.Link href="#projects" ><img src = {navIcon4} alt="" width={20}/></Nav.Link>
                    <Nav.Link href="#skills" ><img src = {navIcon2} alt="" width={20}/></Nav.Link>
                    <Nav.Link href="#skills" ><img src = {navIcon5} alt="" width={20}/></Nav.Link>



                </Nav>
            </div>
            </Col> 
            </Row>
                   
        </div>

        </div>
    );
}

export default Header;