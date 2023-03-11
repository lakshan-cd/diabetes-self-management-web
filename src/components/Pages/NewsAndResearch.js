import axios from "axios";
import { useEffect, useState } from "react";
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
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const result = await axios.get(
      "http://localhost:8082/gettingnewsreasearchdata"
    );
    setData(result.data);
    console.log(result.data);
  };
  const NewsResearchData = data.map((data, index) => ({
    id: data.did,
    title: data.d_title,
    description: data.nr_description,
    imgLink: data.nr_imglink,
  }));

  // const cardInfo =()=>{
  //   data.map((dataF , index)=>(
  //     {id:"{dataF.id}" , description:"{dataF.description}"}
  //   ))
  // }
  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.image_slide_header}>
          <span>News & Research</span>
        </div>
      </div>

      <ImageSlider
        imgLink="https://res.cloudinary.com/dsvziakmb/image/upload/v1678465907/diabetes-self-management/slide-show-1_e4yahe.jpg"
        imgLink2="https://res.cloudinary.com/dsvziakmb/image/upload/v1678465904/diabetes-self-management/slide-show-5_-_Copy_hwzosw.jpg"
        imgLink3="https://res.cloudinary.com/dsvziakmb/image/upload/v1678465903/diabetes-self-management/slide-show-3_kjo8gy.jpg"
      />

      <SideAddCard />
      <SideAddCard />

      <div className={styles.divstyles}>
        {/* <div> */}
        <Row className="g-4" xs={1} md={2} style={{ paddingTop: "40px" }}>
          {/* {Array.from({ length: 3 }).map((_, idx) => ( */}
          {NewsResearchData.map((nr, index) => (
            <Col>
              <DetailsCard
                key={index}
                title={nr.title}
                description={nr.description}
                imgLink={nr.imgLink}
                did={nr.id}
                pageName = "newresearch"
              />
            </Col>
            //  {/* ))} */}
          ))}
        </Row>
        
      </div>
      <div>
        <SideAddCard />
      </div>

      {/* <Col>
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
      </div> */}

      {/* </div> */}
      {/* <UpButton /> */}

      {/* <Footer /> */}
    </div>
  );
};

export default NewsAndResearch;
