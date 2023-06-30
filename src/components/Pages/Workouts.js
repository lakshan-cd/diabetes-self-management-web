import ImageSlider from "../card/ImageSlider";
import styles from "./Workouts.module.css";
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



const Workouts = () => {
  const [wdata, setWData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostperPage] = useState(10);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    loadWData();
  }, []);

  // const loadWData = async () => {
  //   const result = await axios.get(
  //     "http://localhost:8082/getKInformationByCategory/workouts"
  //   );
  //   setWData(result.data);
  //   console.log(result.data);
  // };

  const loadWData = async () => {
    try{
    const result = await axios.get(
      "http://localhost:8082/getKInformationByCategory/workouts"
    );
    const sortedData = result.data.sort(
      (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
    );
    setWData(result.data);
    console.log(result.data);
    setIsLoading(false);
    }catch (error){
      console.log(error);
      setError(true);
      setIsLoading(false);
    }
  };
  
  const workoutsData = wdata.map((data, index) => ({
    id: data.wid,
    title: data.d_title,
    description: data.w_description,
    imgLink: data.w_imglink,
  }));

   // Get current posts
   const indexOfLastPost = currentPage * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
   const currentPosts = wdata
   .slice(indexOfFirstPost, indexOfLastPost)
   .map((post) => ({
     ...post,
     createdDate: post.createdDate, // Add the created_date property
   }));
  return (
    // <div>
    //   <div className={styles.div_around_content}>
    //     <div>
    //       <div className={styles.image_slide_header}>
    //         <span>Workouts for healthy living</span>
    //       </div>
    //     </div>
    //     <ImageSlider />
    //     <SideAddCard />
    //     <SideAddCard />

    //     <div className={styles.divstyles}>
    //       {/* <div> */}
    //       <Row className="g-4" xs={1} md={2} style={{ paddingTop: "40px" }}>
    //         {/* {Array.from({ length: 3 }).map((_, idx) => ( */}
    //         {currentPosts.map((post) => (
    //           <Col key={post.kid}>
    //             <DetailsCard
    //               title={post.title}
    //               description={post.description}
    //               imgLink={post.img_url}
    //               id={post.kid}
    //               pageName="workouts"
    //             />
    //           </Col>
    //           //  {/* ))} */}
    //         ))}
    //       </Row>
    //     </div>
    //   </div>
    //   <div className={styles.div_around_pagination}>
    //     {/* <div>Hello</div> */}
    //     <Pagination
    //       postsPerPage={postsPerPage}
    //       totalPosts={wdata.length}
    //       setCurrentPage={setCurrentPage}
    //       currentPage={currentPage}
    //     />
    //   </div>
    //   <UpButton />
    //   <Footer />
    // </div>


              
<div className={styles.page_container}>
<div className={styles.div_around_content}>
  <div className={styles.mainContent}>
    <div>
      <div className={styles.image_slide_header}>
        <span>Workouts for healthy living</span>
      </div>
    </div>
    <ImageSlider 
          img1 = "https://i.postimg.cc/ydphcN9J/emma-simpson-m-NGaa-Le-WEp0-unsplash.jpg"
          img2 = "https://i.postimg.cc/PJLW4kzS/anastase-maragos-7k-Ep-UPB8v-Nk-unsplash.jpg"
          img3 = "https://i.postimg.cc/kMk1pj62/lucas-van-oort-47-O2-NAy-Nrvs-unsplash.jpg"
          img4 = "https://i.postimg.cc/tT4ts61Q/oscar-aguilar-elias-Ku8-MDO-Fca-Y-unsplash.jpg"
         />
           <div style={{paddingTop : '5px' , paddingLeft:'30px'}}>
          {isLoading ? (
            <Spinner animation="border" variant="blue" />
          ) : error ? (
            <Alert variant="danger">Error occurred! Try again shortly.</Alert>
          ) : (
         <Row className="g-4" xs={1} md={2} style={{ paddingTop: "40px" }}>
            {/* {Array.from({ length: 3 }).map((_, idx) => ( */}
            {currentPosts.map((post) => (
              <Col key={post.kid} style={{marginTop : "50px"}}>
                <DetailsCard
                  title={post.title}
                  description={post.description}
                  imgLink={post.img_url}
                  id={post.kid}
                  pageName="workouts"
                  createdDate = {post.createdDate}

                />
              </Col>
              
            ))}
          </Row>
           )}

          <Pagination
          postsPerPage={postsPerPage}
          totalPosts={wdata.length}
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

  <div>
    <Footer />
  </div>
</div>
</div>
  );
};

export default Workouts;
