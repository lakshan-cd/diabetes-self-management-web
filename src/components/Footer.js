import { Nav, Card, Row, Col } from "react-bootstrap";
import styles from "../css/style.module.css";
import navIcon1 from "../assets/images-header/navIcon-f.png";
import navIcon2 from "../assets/images-header/navIcon-y.png";
import navIcon3 from "../assets/images-header/navIcon-i.png";
import navIcon4 from "../assets/images-header/navIcon-t.png";
import navIcon5 from "../assets/images-header/navIcon-login.png";
import sildeAdd1 from "../assets/side-add/slide-add-1.png";

const Footer = () => {
  // const alertClicked = () => {
  //   alert("You clicked the third ListGroupItem");
  // };

  return (
    <div>
      <div className={styles.footer}>
        <Card className={styles.footer_card}>
          <Card.Body>
            <Row>
              <Col>
                <div className={styles.list_items_left}>
                  <span>
                    <a href=".." className={styles.list_items_links}>
                      Lorem ipsum dolord ipsum
                    </a>
                  </span>
                  <br />
                  <span>
                    <a href=".." className={styles.list_items_links}>
                      Lorem ipsum dolor
                    </a>
                  </span>
                  <br />
                  <span>
                    <a href=".." className={styles.list_items_links}>
                      Lorem ipsum dolor ipsum ipsum
                    </a>
                  </span>
                  <br />
                  <span>
                    <a href=".." className={styles.list_items_links}>
                      Lorem ipsum dolor{" "}
                    </a>
                  </span>
                  <br />
                  <span>
                    <a href=".." className={styles.list_items_links}>
                      Lorem ipsum dolor
                    </a>
                  </span>
                  <br />
                  <span>
                    <a href=".." className={styles.list_items_links}>
                      Lorem ipsum doloripsum
                    </a>
                  </span>
                  <br />
                  <span>
                    <a href=".." className={styles.list_items_links}>
                      Lorem ipsum{" "}
                    </a>
                  </span>
                </div>
              </Col>
              <Col>
                <div className={styles.list_items_center}>
                  <span>
                    <a href=".." className={styles.list_items_links}>
                      Home
                    </a>
                  </span>
                  <br />
                  <span>
                    <a href=".." className={styles.list_items_links}>
                      Helathy Living
                    </a>
                  </span>
                  <br />
                  <span>
                    <a href=".." className={styles.list_items_links}>
                      News and Reserach
                    </a>
                  </span>
                  <br />
                  <span>
                    <a href=".." className={styles.list_items_links}>
                      About Diabetes
                    </a>
                  </span>
                  <br />
                  <span>
                    <a href=".." className={styles.list_items_links}>
                      About us
                    </a>
                  </span>
                  <br />
                </div>
              </Col>

              <Col>
                <div className={styles.list_items_right}>
                  <span>
                    <a href=".." className={styles.list_items_links}>
                      Lorem ipsum dolord ipsum
                    </a>
                  </span>
                  <br />
                  <span>
                    <a href=".." className={styles.list_items_links}>
                      Lorem ipsum dolor
                    </a>
                  </span>
                  <br />
                  <span>
                    <a href=".." className={styles.list_items_links}>
                      Lorem ipsum dolor ipsum ipsum
                    </a>
                  </span>
                  <br />
                  <span>
                    <a href=".." className={styles.list_items_links}>
                      Lorem ipsum dolor
                    </a>
                  </span>
                  <br />
                  <span>
                    <a href=".." className={styles.list_items_links}>
                      Lorem ipsum dolor
                    </a>
                  </span>
                  <br />
                  <span>
                    <a href=".." className={styles.list_items_links}>
                      Lorem ipsum doloripsum
                    </a>
                  </span>
                  <br />
                  <span>
                    <a href=".." className={styles.list_items_links}>
                      Lorem ipsum dolor
                    </a>
                  </span>
                  <br />
                </div>
              </Col>
            </Row>
            <br></br>
            <div className={styles.social_media}>
              <span>Stay with us</span> <br />
              <span style={{ paddingTop: "50px", paddingBottom: "50px" }}>
                Download app
                <Nav.Link href="#home">
                  <img src={sildeAdd1} alt="" width={20} />
                </Nav.Link>
              </span>
              <Nav className={styles.social_icon_nav}>
                <Nav.Link href="#home">
                  <img src={navIcon1} alt="" width={20} />
                </Nav.Link>
                <Nav.Link href="#projects">
                  <img src={navIcon3} alt="" width={20} />
                </Nav.Link>
                <Nav.Link href="#projects">
                  <img src={navIcon4} alt="" width={20} />
                </Nav.Link>
                <Nav.Link href="#skills">
                  <img src={navIcon2} alt="" width={20} />
                </Nav.Link>
                <Nav.Link href="#skills">
                  <img src={navIcon5} alt="" width={20} />
                </Nav.Link>
              </Nav>
            </div>
          </Card.Body>
          <span style={{ marginBottom: "30px" }}>
            All Rights Reserved @Technocrats 2023
          </span>
        </Card>
      </div>
    </div>
  );
};
export default Footer;
