import styles from './blogPostEndCard.module.css';
import {Card , Row , Col  } from 'react-bootstrap';


const BlogPostEnd = () => {
  return (
    <div>
      <div className={styles.blog_post_end}>
        <Row>
          <Col>
            <div>
              <Card className="bg-dark" style={{ border: "none" }}>
                {/* <Card.Img src={sildeAdd1} alt="Card image" style = {{width : '300px'}} /> */}
                <Card.ImgOverlay>
                  <Card.Title>Blog post 3</Card.Title>
                  <Card.Text>
                    consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </div>
          </Col>

          <Col>
            <div>
              <Card className="bg-dark" style={{ border: "none" }}>
                {/* <Card.Img src={sildeAdd1} alt="Card image" style = {{width : '300px', display : 'block'}} /> */}
                <Card.ImgOverlay>
                  <Card.Title>Blog post</Card.Title>
                  <Card.Text>
                    consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default BlogPostEnd;
