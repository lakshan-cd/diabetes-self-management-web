import { Card, Button, Row, Col } from "react-bootstrap";
import slideShowImage4 from "../../assets/slide-show-home-page/slide-show-4.jpg";
import styles from "./detailsCard.module.css";
import sildeAdd1 from "../../assets/side-add/slide-add-1.png";
import slideShowImage6 from "../../assets/slide-show-home-page/slide-show-6.jpg.png";
import ReadMore from "../Pages/ReadMore";
import { Routes, Route, Link } from "react-router-dom";

const DetailsCard = (props) => {
  const maxDescriptionLength = 200;
  const truncatedDescription = props.description.slice(0, maxDescriptionLength); // Extract a substring of the description that is no longer than the maximum length
  const id = props.did;
  const pageName = props.pageName;
  console.log(pageName);

  return (
    <div className={styles.carddiv}>
      {/* <Row> */}
      {/* <Col> */}
      <div>
        <Card
          key={props.key}
          style={{ width: "410px" }}
          className={styles.card}
        >
          <Card.Img
            style={{ width: "409px", height: "200px", objectFit: "cover" }}
            variant="top"
            src={props.imgLink}
          />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{truncatedDescription}</Card.Text>
            <Link to={`/ReadMore/${id}/${pageName}`}>
              {" "}
              <Button variant="primary">Read more</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
      {/* </Col> */}

      {/* <Col>
            <div>
              <Card style={{ width: "25rem" }}>
                <Card.Img variant="top" src={slideShowImage4} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </Col> */}
      {/* </Row> */}

      {/* <Routes>
    <Route path="/ReadMore" element={<ReadMore />}/>

   </Routes> */}
    </div>
    // </div>
  );
};

export default DetailsCard;
