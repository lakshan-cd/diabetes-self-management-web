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

const HealthyLiving = () => {
  return (
    <div>
      {/* <div>
        <Header />
      </div>
      <div>
        <NavbarComp />
        </div> */}
    
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
      </div>
      {/* <div>
        <SideAddCard />
      </div>
      <div>
        <SideAddCard />
      </div> */}
     
      <UpButton />
      <div>
      <Footer />
      </div>
      <Routes>
    <Route path="/ReadMore" element={<ReadMore />}/>
   

   </Routes>
    </div>
  );
};

export default HealthyLiving;
