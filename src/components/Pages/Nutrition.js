import ImageSlider from "../card/ImageSlider";
import styles from "./Workouts.module.css";
import pageSpecificStyles from "./Nutrition.module.css";
// import styleForn from "./Nutrition.module.css";
import SideAddCard from "../card/SideAddCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import DetailsCard from "../cardsfornr/DetailsCard";
import UpButton from "../UpButton";
import Footer from "../Footer";
import Pagination from "../Pagination/Pagination";
import SideAddCardImage from "../images/SideAddCardImage1";
import { Spinner,Alert  } from 'react-bootstrap'; // Assuming you have a loading spinner component


const Nutrition = () => {
  const [ndata, setNData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostperPage] = useState(10);
  //for loaidng controllers
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    loadNData();
  }, []);

  const loadNData = async () => {
    try {
      const result = await axios.get(
        "http://localhost:8082/getKInformationByCategory/diet plans"
      );
      setNData(result.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setIsLoading(false);
    }
  };

  

  const nutritionData = ndata.map((data, index) => ({
    id: data.did,
    title: data.d_title,
    description: data.d_description,
    imgLink: data.d_imglink,
  }));

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = ndata
  .slice(indexOfFirstPost, indexOfLastPost)
  .map((post) => ({
    ...post,
    createdDate: post.createdDate, // Add the created_date property
  }));
  return (
    <div className={styles.page_container}>
      <div className={styles.div_around_content}>
        <div className={styles.mainContent}>
          <div>
            <div className={styles.image_slide_header}>
              <span>Nutritions for healthy living</span>
            </div>
          </div>
          <ImageSlider 
            img1="https://i.postimg.cc/L4TvFV79/flat-lay-health-still-life-with-copy-space-min.jpg"
            img2="https://firebasestorage.googleapis.com/v0/b/diabetesselfmanagement-fb7d5.appspot.com/o/knowladegesharingcenter%2Fhomepage%2Fcloseup-apple-female-hand-blurred-background-with-vegetables-min.jpg?alt=media&token=c85558e4-2b26-4172-8bda-b8ee8474617a"
            img3="https://firebasestorage.googleapis.com/v0/b/diabetesselfmanagement-fb7d5.appspot.com/o/knowladegesharingcenter%2Fhomepage%2Fgreen-organic-vegetarian-products-with-heart-near-stethoscope-min.jpg?alt=media&token=6a372197-df79-4e6a-b7a5-907994c4909e"
            img4="https://firebasestorage.googleapis.com/v0/b/diabetesselfmanagement-fb7d5.appspot.com/o/knowladegesharingcenter%2Fhomepage%2Fcloseup-apple-female-hand-blurred-background-with-vegetables-min.jpg?alt=media&token=c85558e4-2b26-4172-8bda-b8ee8474617a"
          />
          <div style={{paddingTop : '5px' , paddingLeft:'30px'}}>
          {isLoading ? (
            <Spinner animation="border" variant="blue" />
          ) : error ? (
            <Alert variant="danger">Error occurred! Try again shortly.</Alert>
          ) : (
            <Row className="g-4" xs={1} md={2} style={{ paddingTop: "40px" }}>
              {currentPosts.map((post) => (
                <Col key={post.kid} style={{marginTop : "50px"}}>
                  <DetailsCard
                    title={post.title}
                    description={post.description}
                    imgLink={post.img_url}
                    id={post.kid}
                    pageName="nutrition"
                  createdDate = {post.createdDate}

                  />
                </Col>
              ))}
            </Row>
          )}
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={ndata.length}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>

        </div>

        <div className={styles.sideContent}>
          <div className={styles.sideColumn}>
            <SideAddCard 
            title="Explore the new"
            description="For accessing more services"
            />
          </div>
          <div className={styles.sideColumn}>
            <SideAddCard
              title="Download app now"
              description="For accessing more services"
              photo={SideAddCardImage}
            />
          </div>
          <div className={styles.sideColumn}>
            <UpButton />
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Nutrition;
