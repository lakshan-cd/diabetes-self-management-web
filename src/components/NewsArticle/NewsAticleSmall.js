
import styles from './newsArticleSmall.module.css';
import React, { useState, useEffect } from "react";

const NewsArticleSmall = (props) => {
  const [isTyping, setIsTyping] = useState(false);
  const [typingIndex, setTypingIndex] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const element = document.getElementById("newsArticle");
  //     const scrollPosition = window.scrollY + window.innerHeight;
  //     const elementPosition = element.offsetTop + element.offsetHeight;

  //     if (scrollPosition > elementPosition) {
  //       setIsTyping(true);
  //     } else {
  //       setIsTyping(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   let timeout;

  //   if (isTyping && typingIndex < props.description.length) {
  //     timeout = setTimeout(() => {
  //       setTypingIndex((prevIndex) => prevIndex + 1);
  //     }, 30);
  //   }

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, [isTyping, typingIndex, props.description.length]);

  // const typedText = props.description.slice(0);

  return (
    <div id="newsArticle" className={styles.blog_post}>
      <h2 className={styles.blog_post_header}>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
};

export default NewsArticleSmall;




