// import { Button } from "react-bootstrap";
// import styles from "../css/style.module.css";
// import { useState, useEffect } from "react";

// const UpButton = () => {
//   // const toTop = () =>{
//   //     window.scrollTo(0,0);
//   // };

//   const [showButton, setShowButton] = useState(false);

//   useEffect(() => {
//     function handleScroll() {
//       // Check if the user has scrolled past a certain threshold
//       if (window.scrollY > 200) {
//         setShowButton(true);
//       } else {
//         setShowButton(false);
//       }
//     }

//     // Add event listener to the window object
//     window.addEventListener("scroll", handleScroll);

//     // Remove event listener on cleanup
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   function handleClick() {
//     // Scroll to the top of the page when the button is clicked
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }
//   return (
//     <div>
//       <div className={styles.button_to_top}>
//         {/* <Button onClick={toTop}>Go to top</Button> */}
//         <Button
//           //    className={styles.scroll-button}
//           style={{ display: showButton ? "block" : "none" }}
//           onClick={handleClick}
//         >
//           Scroll to Top
//         </Button>
//       </div>
//     </div>
//   );
// };
// export default UpButton;


import { Button } from "react-bootstrap";
// import styles from "../css/style.module.css";
import styles from "../css/style.module.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';


const UpButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      // Check if the user has scrolled past a certain threshold
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }

    // Add event listener to the window object
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleClick() {
    // Scroll to the top of the page when the button is clicked
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    // <div className={styles.button_to_top}>
    //   <Button
    //     className={showButton ? styles.scroll_button_show : styles.scroll_button_hide}
    //     onClick={handleClick}
    //   >
    //     Scroll to Top
    //   </Button>
    // </div>
<div className={styles.button_to_top}>
  <button
    className={`${styles.scroll_button} ${showButton ? styles.scroll_button_show : styles.scroll_button_hide}`}
    onClick={handleClick}
  >
    <span className={styles.scroll_button_text}>Scroll to Top</span>
    <FontAwesomeIcon icon={faArrowUp} className={styles.scroll_button_icon} />
  </button>
</div>
  );
};

export default UpButton;

