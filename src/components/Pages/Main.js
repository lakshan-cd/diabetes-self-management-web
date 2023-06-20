import ImageSlider from "../card/ImageSlider";
import SideAddCard from "../card/SideAddCard";
import styles from "../../css/style.module.css";
import NewsArticle from "../NewsArticle/NewsArticle";
import BlogPostCard from "../card/BlogPostCard";
import BlogPostEnd from "../card/BlogPostEndCard";
import UpButton from "../UpButton";
import Footer from "../Footer";
import SideAddCardImage from "../images/SideAddCardImage1";
// import DetailsCard from "../cardsfornr/DetailsCard";
import { useState,useEffect } from "react";

const Main = () => {
  // const [showUpButton, setShowUpButton] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     const windowHeight = window.innerHeight;
  //     const documentHeight = document.documentElement.scrollHeight;

  //     // Calculate the scroll position as a percentage of the page height
  //     const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;

  //     // Set the state to show/hide the UpButton based on the scroll percentage
  //     setShowUpButton(scrollPercentage > 40);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // const handleUpButtonClick = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   });
  // };


return (
    <div className={styles.page_container}>
    
      <div className={styles.div_around_content}>
        <div className={styles.mainContent}>
          <div>
            <div className={styles.image_slide_header}>
              <span>Diabetes Support system</span>
            </div>
          </div>
          <ImageSlider 
           img1 = "https://i.postimg.cc/jjSkbFLM/slide-show-2.jpg"
          // img1 = "https://firebasestorage.googleapis.com/v0/b/diabetesselfmanagement-fb7d5.appspot.com/o/knowladegesharingcenter%2Fnews%20and%20reaserch%2Fmedical-technology-icon-set-health-wellness-min.jpg?alt=media&token=f20db236-f32a-4252-9da2-e99f28f2082a"
          img2 = "https://firebasestorage.googleapis.com/v0/b/diabetesselfmanagement-fb7d5.appspot.com/o/knowladegesharingcenter%2Fhomepage%2Fcloseup-apple-female-hand-blurred-background-with-vegetables-min.jpg?alt=media&token=c85558e4-2b26-4172-8bda-b8ee8474617a"
          img3 = "https://firebasestorage.googleapis.com/v0/b/diabetesselfmanagement-fb7d5.appspot.com/o/knowladegesharingcenter%2Fhomepage%2Fgreen-organic-vegetarian-products-with-heart-near-stethoscope-min.jpg?alt=media&token=6a372197-df79-4e6a-b7a5-907994c4909e"
          img4 = "https://firebasestorage.googleapis.com/v0/b/diabetesselfmanagement-fb7d5.appspot.com/o/knowladegesharingcenter%2Fhomepage%2Fcloseup-apple-female-hand-blurred-background-with-vegetables-min.jpg?alt=media&token=c85558e4-2b26-4172-8bda-b8ee8474617a"
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
          {/* {showUpButton && <UpButton onClick={handleUpButtonClick} />}         */}
          <UpButton/>
            </div>
        </div>

        <div>
        <Footer />
        </div>
        
      </div>
    </div>
  );
};

export default Main;
