import styles from './newsArticle.module.css';

const NewsArticle = (props) => {
  return (
    <div>
      <div className={styles.blog_post}>
        <span className={styles.blog_post_header}>
          {props.title}
        </span>
        <br></br>
        <span>
         {props.description}
        </span>
      </div>
    </div>
  );
};

export default NewsArticle;
