import ImageSlider from "../card/ImageSlider";
import SideAddCard from "../card/SideAddCard";
import styles from "../../css/style.module.css";
import NewsArticle from "../NewsArticle/NewsArticle";
import BlogPostCard from "../card/BlogPostCard";
import BlogPostEnd from "../card/BlogPostEndCard";
import UpButton from "../UpButton";
import Footer from "../Footer";
import SideAddCardImage from "../images/SideAddCardImage1";
import SideAddCardImage2 from "../images/SideAddCardImage2";
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
            title="Prevent from diabetes"
            description=" Preventing diabetes involves adopting a healthy lifestyle and making mindful choices. Regular physical activity is crucial, aiming for at least 30 minutes of exercise most days of the week. Incorporating a balanced diet is essential, emphasizing whole grains, lean proteins, fruits, and vegetables while limiting sugary and processed foods. Maintaining a healthy weight through portion control and avoiding excessive calorie intake is vital. Minimizing the consumption of sugary beverages and opting for water or unsweetened alternatives is recommended. Quitting smoking and limiting alcohol intake can also reduce the risk of developing diabetes. Regular check-ups with healthcare professionals help monitor blood glucose levels and identify any early signs of diabetes. Stress management techniques such as meditation, yoga, or hobbies can assist in preventing diabetes as stress affects blood sugar levels. By adopting these preventive measures, one can take proactive steps towards reducing the risk of diabetes and improving overall health."
          />
          <BlogPostCard
            heading1="Being heathy"
            heading2=" Not being helthy"
            description1="Maintaining good health is crucial for a fulfilling life. A healthy lifestyle revolves around balanced eating habits and regular exercise. Incorporating fresh fruits, vegetables, whole grains, and lean proteins while minimizing processed foods and sugary snacks provides vital nutrients for optimal functioning. Engaging in physical activities such as walking, jogging, or cycling strengthens muscles, improves cardiovascular health, and boosts energy levels. Prioritizing mental well-being through mindfulness, meditation, and stress management techniques enhances overall health. Additionally, adequate sleep, maintaining a healthy weight, and avoiding tobacco and excessive alcohol consumption contribute to a healthy lifestyle. By embracing these habits, individuals can enhance their well-being and enjoy a happier, healthier life."
            description2="Neglecting one's health can have detrimental consequences on overall well-being. Unhealthy habits, such as poor dietary choices and sedentary lifestyles, can lead to weight gain, nutritional deficiencies, and increased risk of chronic diseases. Lack of exercise weakens muscles, reduces cardiovascular fitness, and negatively impacts mental health. Insufficient sleep disrupts the body's natural rhythms, impairing cognitive function and weakening the immune system. Smoking and excessive alcohol consumption have profound negative effects on multiple organs, including the lungs, liver, and heart. Ignoring regular check-ups and preventive screenings can result in undiagnosed health issues and delayed treatment. By disregarding health, individuals put themselves at risk for various physical and mental ailments, hampering their overall quality of life. "
          />

        <NewsArticle
            title="Why it is important to prevent form diabetes"
            description=" Preventing diabetes is of paramount importance due to the numerous detrimental effects it can have on health. Diabetes increases the risk of heart disease, stroke, kidney failure, nerve damage, and vision problems. It can also lead to complications during pregnancy and impair the immune system, making individuals more susceptible to infections. Moreover, managing diabetes requires lifelong medication, monitoring blood sugar levels, and making significant lifestyle changes. By focusing on prevention through healthy eating, regular exercise, weight management, and avoiding tobacco and excessive alcohol consumption, individuals can significantly reduce their risk of developing diabetes and mitigate its potential complications, leading to a healthier and more fulfilling life.




            "
          />
        </div>
  
        <div className={styles.sideContent}>
          <div className={styles.sideColumn}>
            <SideAddCard 
            title="Explore the new"
            description="For accessing more services"
            photo={SideAddCardImage2}
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
