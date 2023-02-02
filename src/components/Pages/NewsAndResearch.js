import { Row, Col } from "react-bootstrap";
import ImageSlider from "../card/ImageSlider";
import SideAddCard from "../card/SideAddCard";
import DetailsCard from "../cardsfornr/DetailsCard";
import Footer from "../Footer";
import Header from "../Header";
import NavbarComp from "../NavbarComp";
import UpButton from "../UpButton";
import styles from "./newsandresearch.module.css";

const NewsAndResearch = () => {
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
            <span>News & Research</span>
          </div>
        </div>
      

      <ImageSlider />

      <SideAddCard />
      <SideAddCard />

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
      <div className={styles.divstyles} style={{ height: "900px" }}>
        <Row style={{ paddingTop: "400px" }}>
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
      <div>
        <SideAddCard />
      </div>
      <UpButton />
      <Footer />
    </div>
  );
};

export default NewsAndResearch;
