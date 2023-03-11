// import ImageSlider from "../card/ImageSlider";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import styles from "./ReadMore.module.css";
// import SideAddCard from "../card/SideAddCard";
// import Footer from "../Footer";
// import UpButton from "../UpButton";

// const ReadMore = () => {
//   const { id ,pageName } = useParams();

//   if (pageName == "newresearch"){
//     console.log("hello from news and reaserch");
//   }
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     loadData();
//   }, []);

//   const loadData = async () => {
//     const result = await axios.get(
//       `http://localhost:8082/gettingnewsreasearchdata/${id}`
//     );
//     //   const dataArray = Object.values(result.data); //set retrive data too an array
//     setData(result.data);
//     console.log(result.data);
//   };

//   const newsResearchData = data
//     ? {
//         id: data.did,
//         title: data.d_title,
//         description: data.nr_description,
//         imgLink: data.nr_imglink,
//       }
//     : null;

//   return (
//     <div>
//       <div className={styles.header}>
//         <h1>{newsResearchData.title}</h1>
//       </div>

//       <div className={styles.headerImage}>
//         <ImageSlider imgLink={newsResearchData.imgLink} />
//       </div>
//       <div>
//         <SideAddCard />
//         <SideAddCard />
//       </div>
//       <div className={styles.desDivArround}>
//         <div className={styles.desDiv}>
//           <p>{newsResearchData.description}</p>
//         </div>
//       </div>
// <UpButton/>
//       {/* <Footer/> */}

//     </div>
//   );
// };

// export default ReadMore;

import ImageSlider from "../card/ImageSlider";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./ReadMore.module.css";
import SideAddCard from "../card/SideAddCard";
import Footer from "../Footer";
import UpButton from "../UpButton";

const ReadMore = () => {
  const { id, pageName } = useParams();

  const [data, setData] = useState([]);
  const [wData, setWData] = useState([]);
  const [nData, setNData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      if (pageName === "newresearch") {
        const result = await axios.get(
          `http://localhost:8082/gettingnewsreasearchdata/${id}`
        );
        setData(result.data);
        // console.log(result.data);
      } else if (pageName === "workouts") {
        const result = await axios.get(
          `http://localhost:8082/getworkoutsdatabyid/${id}`
        );
        setWData(result.data);
        console.log(result.data);
      } else if (pageName === "nutrition") {
        const result = await axios.get(
          `http://localhost:8082/getdietplanbyid/${id}`
        );
        setNData(result.data);
        console.log(result.data);
      }
    };
    loadData();
  }, [id, pageName]);

  const newsResearchData = data
    ? {
        id: data.did,
        title: data.d_title,
        description: data.nr_description,
        imgLink: data.nr_imglink,
      }
    : null;

  //object for workouts
  const workoutsData = wData
    ? {
        id: wData.wid,
        title: wData.d_title,
        description: wData.w_description,
        imgLink: wData.w_imglink,
      }
    : null;

  //object fro nutritions
  const nutritionData = nData
    ? {
        id: nData.did,
        title: nData.d_title,
        description: nData.d_description,
        imgLink: nData.d_imglink,
      }
    : null;
  // console.log(workoutsData.description);

  if (pageName === "newresearch") {
    return (
      <div>
        <div className={styles.div_around_content}>
        <div className={styles.header}>
          <h1>{newsResearchData.title}</h1>
        </div>

        <div className={styles.headerImage}>
          <ImageSlider imgLink={newsResearchData.imgLink} />
        </div>
        <div>
          <SideAddCard />
          <SideAddCard />
        </div>
        <div className={styles.desDivArround}>
          <div className={styles.desDiv}>
            <p style={{ whiteSpace: "pre-wrap" }}>
              {newsResearchData.description}
            </p>
          </div>
        </div>
        </div>
        <UpButton />
        <Footer/>
      </div>
    );
  } else if (pageName === "workouts") {
    return (
      <div>
        <div className={styles.div_around_content}>

        <div className={styles.header}>
          <h1>{workoutsData.title}</h1>
        </div>

        <div className={styles.headerImage}>
          <ImageSlider imgLink={workoutsData.imgLink} />
        </div>
        <div>
          <SideAddCard />
          <SideAddCard />
        </div>
        <div className={styles.desDivArround}>
          <div className={styles.desDiv}>
            <p>{workoutsData.description}</p>
          </div>
        </div>
        </div>

        <UpButton />
        <Footer/>
      </div>
    );
  } else if (pageName === "nutrition") {
    return (
      <div>
        <div className={styles.div_around_content}>

        <div className={styles.header}>
          <h1>{nutritionData.title}</h1>
        </div>

        <div className={styles.headerImage}>
          <ImageSlider imgLink={nutritionData.imgLink} />
        </div>
        <div>
          <SideAddCard />
          <SideAddCard />
        </div>
        <div className={styles.desDivArround}>
          <div className={styles.desDiv}>
            <p>{nutritionData.description}</p>
          </div>
        </div>
        </div>
        <UpButton />
        <Footer/>
      </div>
    );
  }
};

export default ReadMore;
