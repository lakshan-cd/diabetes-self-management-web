import axios from "axios";
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import ImageSlider from "../card/ImageSlider";
import SideAddCard from "../card/SideAddCard";
import DetailsCard from "../cardsfornr/DetailsCard";
import Footer from "../Footer";
// import Header from "../Header";
// import NavbarComp from "../NavbarComp";
import Pagination from "../Pagination/Pagination";
import UpButton from "../UpButton";
import styles from "./newsandresearch.module.css";
import SideAddCardImage from "../images/SideAddCardImage1";
import { Spinner,Alert  } from 'react-bootstrap'; // Assuming you have a loading spinner component


const NewsAndResearch = () => {
  const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostperPage] = useState(10);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);


  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try{
    const result = await axios.get(
      "http://localhost:8082/getKInformationByCategory/news and reaserach"
    );
    const sortedData = result.data.sort(
      (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
    );
    setData(sortedData);
    console.log(sortedData);
    setIsLoading(false);
    }catch (error){
      console.log(error);
      setError(true);
      setIsLoading(false);
    }
  };
  
  const NewsResearchData = data.map((data, index) => ({
    id: data.did,
    title: data.d_title,
    description: data.nr_description,
    imgLink: data.nr_imglink,
    createdDate: data.createdDate, // Add the created_date property
  }));
  

  console.log(data.description);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data
  .slice(indexOfFirstPost, indexOfLastPost)
  .map((post) => ({
    ...post,
    createdDate: post.createdDate, // Add the created_date property
  }));


  // Change page
  // const paginate = pageNumber => setCurrentPage(pageNumber);

  return (

    <div className={styles.page_container}>
      <div className={styles.div_around_content}>
        <div className={styles.mainContent}>
          <div>
            <div className={styles.image_slide_header}>
              <span>News & Research</span>
            </div>
          </div>
          <ImageSlider 
          img1 = "https://i.postimg.cc/0y56SY2N/closeup-shot-boy-getting-checkup-by-doctor-min.jpg"
          img2 = "https://i.postimg.cc/kM8tPMp7/medical-banner-with-doctor-wearing-goggles-min.jpg"
          img3 = "https://i.postimg.cc/kM8tPMp7/medical-banner-with-doctor-wearing-goggles-min.jpg"
          img4 = "https://i.postimg.cc/xd4bnXQ1/medical-technology-icon-set-health-wellness-min.jpg"
         />
        <div style={{paddingTop : '5px' , paddingLeft:'30px'}}>
          {isLoading ? (
            <Spinner animation="border" variant="blue" />
          ) : error ? (
            <Alert variant="danger">Error occurred! Try again shortly.</Alert>
          ) : (
            <Row className="g-4" xs={1} md={2} style={{ paddingTop: "20px" }}>
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
          totalPosts = {data.length} 
          setCurrentPage = {setCurrentPage}
          currentPage = {currentPage}
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

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default NewsAndResearch;
