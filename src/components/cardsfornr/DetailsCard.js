import { Card, Button,Row,Col } from "react-bootstrap";
import slideShowImage4 from "../../assets/slide-show-home-page/slide-show-4.jpg";
import styles from "./detailsCard.module.css";
import sildeAdd1 from "../../assets/side-add/slide-add-1.png";
import slideShowImage6 from "../../assets/slide-show-home-page/slide-show-6.jpg.png";
import ReadMore from "../Pages/ReadMore";
import { Routes ,Route ,Link} from 'react-router-dom';


const DetailsCard = () => {
  return (
    // <div className= {styles.carddiv}>
    //   <Card style={{ width: "20rem" }}>
    //     <Card.Img variant="top" src={slideShowImage4}/>
    //     <Card.Body>
    //       <Card.Title>Card Title</Card.Title>
    //       <Card.Text>
    //         Some quick example text to build on the card title and make up the
    //         bulk of the card's content.
    //       </Card.Text>
    //       <Button variant="primary">Go somewhere</Button>
    //     </Card.Body>
    //   </Card>
    // </div>
    // <div>
      <div className={styles.carddiv}>
        {/* <Row> */}
          {/* <Col> */}
            <div>
              <Card style={{ width: "24.5rem"}}>
                <Card.Img variant="top" src={slideShowImage6} />
                <Card.Body >
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                 <Link to ="/ReadMore"> <Button  variant="primary">Read more</Button></Link>
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
