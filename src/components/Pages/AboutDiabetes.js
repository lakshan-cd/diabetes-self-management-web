import ImageSlider from "../card/ImageSlider";
import SideAddCard from "../card/SideAddCard";
import styles from "../../css/style.module.css";
import NewsArticle from "../NewsArticle/NewsArticle";
import BlogPostCard from "../card/BlogPostCard";
import BlogPostEnd from "../card/BlogPostEndCard";
import UpButton from "../UpButton";
import Footer from "../Footer";
import SideAddCardImage from "../images/SideAddCardImage1";
import NewsArticleSmall from "../NewsArticle/NewsAticleSmall";

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
      <NewsArticleSmall
       title="What is diabetes?"
       description=" Diabetes is a serious condition where your blood glucose level is too high. It can happen when your body doesn't produce enough insulin or the insulin it produces isn't effective. Or, when your body can't produce any insulin at all."
 
      />
        <NewsArticle
      title="Types of diabetes"
      subtitle = "There are two main types of diabetes: type 1 and type 2."
      description=" When you’ve got type 1 diabetes, you can’t make any insulin at all. If you’ve got type 2 diabetes, it’s a bit different. The insulin you make either can’t work effectively, or you can’t produce enough of it. They’re different conditions, but they’re both serious. 

      Other types of diabetes include gestational diabetes, which some women may go on to develop during pregnancy. And there are many other rarer types of diabetes such as type 3c and Latent Autoimmune Diabetes in Adults (LADA) too. 
      
      In all types of diabetes, glucose can’t get into your cells properly, so it begins to build up in your blood. And too much glucose in your blood causes a lot of different problems. To begin with, it leads to diabetes symptoms. "

    />
    {/* <NewsArticle
      title="Level 1 diebetes"
      description=" Type 1 diabetes is an autoimmune disorder typically diagnosed in children, teens and young adults, but it can develop at any age. Learn about the signs and symptoms of this condition and get expert guidance on blood sugar monitoring, medication, meal planning and more."

    /> */}
    <BlogPostCard
      heading1="Causes of type 1 diabetes"
      heading2="Causes of type 2 diabetes"
      description1="The body’s immune system is responsible for fighting off foreign invaders, such as harmful viruses and bacteria.

      Type 1 diabetes is believed to be caused byTrusted Source an autoimmune reaction. In people with type 1 diabetes, the immune system mistakes the body’s own healthy cells for foreign invaders.
      
      The immune system attacks and destroys the insulin-producing beta cells in the pancreas. After these beta cells are destroyed, the body is unable to produce insulin.
      
      Researchers don’t know why the immune system sometimes attacks the body’s own cells. It may have something to do with genetic and environmental factors, such as exposure to viruses.
      
      Research into autoimmune diseases is ongoing. Diet and lifestyle habits do not cause type 1 diabetes."
      description2="People with type 2 diabetes have insulin resistance. The body still produces insulin, but it’s unable to use it effectively.

      Researchers aren’t sure why some people become insulin resistant and others don’t, but several lifestyle factors may contribute, including being inactive and carrying excess weight.
      
      Other genetic and environmental factors may also play a role. When you develop type 2 diabetes, your pancreas will try to compensate by producing more insulin. Because your body is unable to effectively use insulin, glucose accumulates in your bloodstream."
    />

  <NewsArticle
      title="Prediabetes"
      subtitle = "What is prediabetes?"
      description=" Prediabetes means that your blood sugars are higher than usual, but not high enough for you to be diagnosed with type 2 diabetes. It also means that you are at high risk of developing type 2 diabetes. You are unlikely to be experiencing any symptoms with prediabetes.
      Prediabetes is also sometimes called borderline diabetes. Higher than normal blood sugars can be detected via blood tests. The medical terms for higher-than-normal blood sugars are:
      
      Impaired Fasting Glucose (IFG)
      Impaired Glucose Tolerance (IGT)
      Impaired Glucose Regulation (IGR)
      Non-diabetic hyperglycaemia 
      These tests are a mix of fasting or non-fasting and they all help your healthcare team to understand your risk of developing type 2 diabetes. So, if you’ve been told you have any of these, knowing this is the first step to being able to do something about it. And for many people there are things you can do to reduce your risk of type 2 diabetes."
    />
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

export default AboutDiabetes;
