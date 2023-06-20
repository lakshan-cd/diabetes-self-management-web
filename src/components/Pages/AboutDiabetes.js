import ImageSlider from "../card/ImageSlider";
import SideAddCard from "../card/SideAddCard";
import styles from "../../css/style.module.css";
import NewsArticle from "../NewsArticle/NewsArticle";
import BlogPostCard from "../card/BlogPostCard";
import BlogPostEnd from "../card/BlogPostEndCard";
import UpButton from "../UpButton";
import Footer from "../Footer";
import SideAddCardImage from "../images/SideAddCardImage1";

const AboutDiabetes = () => {
  return (
    // <div>
    //   <div className={styles.div_around_content}>
    //     <div>
    //       <div className={styles.image_slide_header}>
    //         <span>About Diabetes</span>
    //       </div>
    //     </div>
    //     <ImageSlider />
    //     <SideAddCard />
    //     <SideAddCard />
    //     <NewsArticle
    //       title="Level 1 diebetes"
    //       description=" Type 1 diabetes is an autoimmune disorder typically diagnosed in children, teens and young adults, but it can develop at any age. Learn about the signs and symptoms of this condition and get expert guidance on blood sugar monitoring, medication, meal planning and more."
    //     />
    //     <SideAddCard />

    //     <BlogPostCard
    //       heading1="Healthy life"
    //       heading2="Live freely"
    //       description1="card 1 description card with supporting text below as a natural lead-in to additional conte."
    //       description2="card 2 s a naturallead-in to additional conte."
    //       // time1="Last updated 3 mins ago"
    //       // time2="Last updated 6 mins ago"
    //     />
    //     <NewsArticle
    //       title="Level 2 diebetes"
    //       description=" Type 1 diabetes is an autoimmune disorder typically diagnosed in children, teens and young adults, but it can develop at any age. Learn about the signs and symptoms of this condition and get expert guidance on blood sugar monitoring, medication, meal planning and more."

    //     />
    //     <SideAddCard />
    //     <BlogPostCard
    //       heading1="Healthy life"
    //       heading2="Live freely"
    //       description1="card 1 description card with supporting text below as a natural lead-in to additional conte."
    //       description2="card 2 s a naturallead-in to additional conte."
    //       // time1="Last updated 3 mins ago"
    //       // time2="Last updated 6 mins ago"
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
        <span>About Diabetes</span>
      </div>
    </div>
    {/* <a href='https://postimg.cc/75jN1X1z' target='_blank'><img src='https://i.postimg.cc/jjSkbFLM/slide-show-2.jpg' border='0' alt='slide-show-2'/></a> */}
    <ImageSlider 
          img1 = "https://i.postimg.cc/xdBs4TcW/man-holding-hearing-aids-front-view-min.jpg"

          img2 = "https://i.postimg.cc/4dh0fHDf/medium-shot-girl-recording-her-makeup-routine-min.jpg"
          img3 = "https://i.postimg.cc/qqT1pbcw/world-diabetes-day-medical-equipment-front-blackboard-min.jpg"
          img4 = "https://firebasestorage.googleapis.com/v0/b/diabetesselfmanagement-fb7d5.appspot.com/o/knowladegesharingcenter%2Fhomepage%2Fcloseup-apple-female-hand-blurred-background-with-vegetables-min.jpg?alt=media&token=c85558e4-2b26-4172-8bda-b8ee8474617a"
         />
    <NewsArticle
      title="Level 1 diebetes"
      description=" Type 1 diabetes is an autoimmune disorder typically diagnosed in children, teens and young adults, but it can develop at any age. Learn about the signs and symptoms of this condition and get expert guidance on blood sugar monitoring, medication, meal planning and more."

    />
    <BlogPostCard
      heading1="prevent from diabetes"
      heading2="Live freely"
      description1="card 1 description card with supporting text below as a natural lead-in to additional content."
      description2="card 2 is a natural lead-in to additional content."
    />

  <NewsArticle
      title="prevent from diabetes"
      description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
      culpa qui officia deserunt mollit anim id est laborum."
    />
  </div>

  <div className={styles.sideContent}>
    <div className={styles.sideColumn}>
      <SideAddCard />
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

export default AboutDiabetes;
