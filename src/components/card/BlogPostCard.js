import styles from "./blogPostCard.module.css";
import { Card, Row, Col } from "react-bootstrap";

const BlogPostCard = (props) => {
  return (
    <div>
      <div className={styles.blog_post}>
        <Row>
          <Col>
            <div>
              <Card className={styles.card_styles}>
                {/* <Card.Img src={sildeAdd1} alt="Card image" style = {{width : '200px'}} /> */}
                <Card.ImgOverlay>
                  <Card.Title>{props.heading1}</Card.Title>
                  <Card.Text>
                   {props.description1}
                  </Card.Text>
                  <Card.Text>{props.time1}</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </div>
          </Col>

          <Col>
            <div>
              <Card className={styles.card_styles}>
                {/* <Card.Img src={sildeAdd1} alt="Card image" style = {{width : '200px', display : 'block'}} /> */}
                <Card.ImgOverlay>
                  <Card.Title>{props.heading2}</Card.Title>
                  <Card.Text>
                  {props.description2}
                  </Card.Text>
                  <Card.Text>{props.time2}</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default BlogPostCard;
