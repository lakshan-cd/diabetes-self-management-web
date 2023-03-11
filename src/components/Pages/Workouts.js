import ImageSlider from "../card/ImageSlider";
import styles from "./Workouts.module.css";
import SideAddCard from "../card/SideAddCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import DetailsCard from "../cardsfornr/DetailsCard";


const Workouts = () =>{
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
      id: data.wid,
      title: data.d_title,
      description: data.w_description,
      imgLink: data.w_imglink,
    }));


    return(
        <div>
        <div>
          <div className={styles.image_slide_header} >
            <span>Workouts for healthy living</span>
          </div>
        </div>
        <ImageSlider />
        <SideAddCard />
        <SideAddCard />

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
                pageName = "workouts"
              />
            </Col>
            //  {/* ))} */}
          ))}
        </Row>
        
      </div>
        </div>
    );
}

export default Workouts;