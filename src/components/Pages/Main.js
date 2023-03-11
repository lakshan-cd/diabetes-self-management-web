import ImageSlider from "../card/ImageSlider";
import SideAddCard from "../card/SideAddCard";
import styles from "../../css/style.module.css";
import NewsArticle from "../NewsArticle/NewsArticle";
import BlogPostCard from "../card/BlogPostCard";
import BlogPostEnd from "../card/BlogPostEndCard";
import UpButton from "../UpButton";
import Footer from "../Footer";
import SideAddCardImage from "../images/SideAddCardImage1";
import DetailsCard from "../cardsfornr/DetailsCard";



const Main = () => {
  return (
    <div style={{position:"relative",paddingBottom:"380px"}}>
    
      <div>
        <div className={styles.image_slide_header}>
          <span>Diabetes Support system</span>
        </div>
      </div>
      <ImageSlider />
      <SideAddCard title = 'Download app now' description = 'For accessing more services' photo = {SideAddCardImage}/>
      <SideAddCard />
      <NewsArticle
        title="News article one"
        description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
      />
      <SideAddCard />
      <NewsArticle
        title="News article 2"
        description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
      />
      <SideAddCard />
      <BlogPostCard 
      heading1 ='Healthy life' 
      heading2 = 'Live freely'  
      description1 = 'card 1 description card with supporting text below as a natural lead-in to additional conte.'
      description2 = 'card 2 s a naturallead-in to additional conte.'
      time1 = 'Last updated 3 mins ago'
      time2 = 'Last updated 6 mins ago'
      />
      <SideAddCard />
      <BlogPostEnd />
      <UpButton />



      <Footer />
    </div>
  );
};

export default Main;
