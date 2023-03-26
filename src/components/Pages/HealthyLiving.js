import { Row, Col } from "react-bootstrap";
import ImageSlider from "../card/ImageSlider";
import SideAddCard from "../card/SideAddCard";
import DetailsCard from "../cardsfornr/DetailsCard";
import Footer from "../Footer";
import Header from "../Header";
import NavbarComp from "../NavbarComp";
import UpButton from "../UpButton";
import styles from "./HealthyLiving.module.css";
import { Routes ,Route} from 'react-router-dom';
import ReadMore from "./ReadMore";
import { useEffect, useState } from "react";
import axios from "axios";


const HealthyLiving = () => {
  const [wdata, setWData] = useState([]);

  useEffect(() => {
    loadWData();
  }, []);

  const loadWData = async () => {
    const result = await axios.get(
      "http://localhost:8082/getworkoutsdata"
    );
    setWData(result.data);
    console.log(result.data);
  };
  const workoutsData = wdata.map((data, index) => ({
    id: data.w_did,
    title: data.d_title,
    description: data.w_description,
    imgLink: data.w_imglink,
  }));

  const [ndata, setNData] = useState([]);

  useEffect(() => {
    loadNData();
  }, []);

  const loadNData = async () => {
    const result = await axios.get(
      "http://localhost:8082/getdietplan"
    );
    setNData(result.data);
    console.log(result.data);
  };
  const nutritionData = ndata.map((data, index) => ({
    id: data.d_did,
    title: data.d_title,
    description: data.d_description,
    imgLink: data.d_imglink,
  }));



  return (

    
    <div>
  
    
        <div>
          <div className={styles.image_slide_header}>
            <span>Healthy Living</span>
          </div>
        </div>

      <ImageSlider />

      <SideAddCard />
      <SideAddCard />
      
          <div className={styles.sub_header}>
            <span>Nutrition</span>
          </div>

          <div className={styles.divstyles}>
        {/* <div> */}
        <Row className="g-4" xs={1} md={2} style={{ paddingTop: "40px" }}>
          {/* {Array.from({ length: 3 }).map((_, idx) => ( */}
          {workoutsData.map((wd, index) => (
            <Col>
              <DetailsCard
                key={index}
                title={wd.title}
                description={wd.description}
                imgLink={wd.imgLink}
                did={wd.id}
              />
            </Col>
            //  {/* ))} */}
          ))}
        </Row>
        
      </div>


      <div className={styles.sub_header2}>
            <span>Workouts</span>
          </div>
          <div className={styles.divstyles}>
        {/* <div> */}
        <Row className="g-4" xs={1} md={2} style={{ paddingTop: "40px" }}>
          {/* {Array.from({ length: 3 }).map((_, idx) => ( */}
          {nutritionData.map((nd, index) => (
            <Col>
              <DetailsCard
                key={index}
                title={nd.title}
                description={nd.description}
                imgLink={nd.imgLink}
                did={nd.id}
              />
            </Col>
            //  {/* ))} */}
          ))}
        </Row>
        
      </div>





       
      {/* <div className={styles.divstyles}>
        <Row style={{ paddingTop: "50px" }}>
          <Col>
            <div>
              <DetailsCard />
            </div>
          </Col>
          <Col>
            <div>
              <DetailsCard />
            </div>
          </Col>
        </Row>
      </div>

      <div>
        <SideAddCard />
      </div>

      <div className={styles.divstyles}>
        <Row style={{ paddingTop: "230px" }}>
          <Col>
            <div>
              <DetailsCard />
            </div>
          </Col>
          <Col>
            <div>
              <DetailsCard />
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <SideAddCard />
      </div>
      
      <div className={styles.sub_header2}>
      <div style={{paddingTop:"390px"}}>
            <span>Workouts</span>
        </div>
        </div>
        
      <div className={styles.divstyles} style={{ height: "470px" }}>
        <Row style={{ paddingTop: "20px" }}>
          <Col>
            <div>
              <DetailsCard />
            </div>
          </Col>
          <Col>
            <div>
              <DetailsCard />
            </div>
          </Col>
        </Row>
      </div>

      <div className={styles.divstyles} style={{ height: "400px" }}>
        <Row style={{ paddingTop: "20px" }}>
          <Col>
            <div>
              <DetailsCard />
            </div>
          </Col>
          <Col>
            <div>
              <DetailsCard />
            </div>
          </Col>
        </Row>
      </div> */}
      {/* <div>
        <SideAddCard />
      </div>
      <div>
        <SideAddCard />
      </div> */}
     
      {/* <UpButton />
      <div>
      <Footer />
      </div>
      <Routes>
    <Route path="/ReadMore" element={<ReadMore />}/>
   

   </Routes> */}
    </div>
  );
};

export default HealthyLiving;
