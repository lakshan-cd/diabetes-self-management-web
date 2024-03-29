import ImageSlider from "../card/ImageSlider";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./ReadMore.module.css";
import SideAddCard from "../card/SideAddCard";
import Footer from "../Footer";
import UpButton from "../UpButton";
import SideAddCardImage from "../images/SideAddCardImage1";

const ReadMore = () => {
  const { id, pageName } = useParams(); //get the id of the article and the page

  const [data, setData] = useState([]);

  useEffect(() => {
    loadWData();
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  //load the data from database
  const loadWData = async () => {
    const result = await axios.get(
      `http://localhost:8082/getKInformationById/${id}`
    );
    setData(result.data);
    console.log(result.data);
  };

  const dataById = data
    ? {
        id: data.kid,
        title: data.title,
        description: data.description,
        imgLink: data.img_url,
      }
    : null;

  return (

<div className={styles.page_container}>
<div className={styles.div_around_content}>
  <div className={styles.mainContent}>
    <div>
      <div className={styles.image_slide_header}>
        <span>{dataById.title}</span>
      </div>
    </div>
    <ImageSlider img1={dataById.imgLink} />
    <div className={styles.desDivArround}>
          <div className={styles.desDiv}>
            <p >{dataById.description}</p>
          </div>
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

export default ReadMore;
