// import styles from "./Pagination.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styles from "./Pagination.module.css"


const Pagination = ({
  postsPerPage,
  totalPosts,
  setCurrentPage,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (page) => {
    setCurrentPage(page);
    window.scrollTo(100, 700);
  };

  return (
    <div className={styles.pagination}>
       <div
      onClick={() => handleClick(1)}
      className={`number ${currentPage === 1 ? "active" : ""}`}
    >
      <FontAwesomeIcon icon={faAngleDoubleLeft} className={styles.icon} size="lg"  /> {/* Icon */}
     
      {pageNumbers.map((page, index) => {
        return (
          
          <button
            key={index}
            onClick={() => handleClick(page)}
            className={page === currentPage ? "active" : ""}
          >
            {page}
          </button>
        );
      })}
      </div>
    </div>
  
  //   <div className={styles.pagination}>
  //   <div
  //     onClick={() => handleClick(1)}
  //     className={`number ${currentPage === 1 ? "active" : ""}`}
  //   >
  //     <FontAwesomeIcon icon={faAngleDoubleLeft} /> {/* Icon */}
  //   </div>
  //   {pageNumbers.map((page, index) => {
  //     return (
  //       <button
  //         key={index}
  //         onClick={() => handleClick(page)}
  //         className={`number ${page === currentPage ? "active" : ""}`}
  //       >
  //         {page}
  //       </button>
  //     );
  //   })}
  // </div>
    
    
  );
};

export default Pagination;