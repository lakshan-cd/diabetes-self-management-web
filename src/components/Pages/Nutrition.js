import ImageSlider from "../card/ImageSlider";
import styles from "./Workouts.module.css";
import styleForn from "./Nutrition.module.css"
import SideAddCard from "../card/SideAddCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import DetailsCard from "../cardsfornr/DetailsCard";


const Nutrition = () =>{
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
      id: data.did,
      title: data.d_title,
      description: data.d_description,
      imgLink: data.d_imglink,
    }));
  

    return(
        <div>
                   <div>
          <div className={styles.image_slide_header} >
            <span>Nutritions for healthy living</span>
          </div>
        </div>
        <ImageSlider/>
        <SideAddCard/>
        <SideAddCard/>


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
                pageName = "nutrition"
              />
            </Col>
            //  {/* ))} */}
          ))}
        </Row>
        
      </div>
        </div>
    );
}

export default Nutrition;