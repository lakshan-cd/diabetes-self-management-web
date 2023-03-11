import {Button} from 'react-bootstrap';
import styles from '../css/style.module.css';
import { useState,useEffect } from 'react';

const UpButton = () =>{
    // const toTop = () =>{
    //     window.scrollTo(0,0);
    // };



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
          window.addEventListener('scroll', handleScroll);
      
          // Remove event listener on cleanup
          return () => window.removeEventListener('scroll', handleScroll);
        }, []);
      
        function handleClick() {
          // Scroll to the top of the page when the button is clicked
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    return(
        <div>

        
        <div className = {styles.button_to_top} >
           {/* <Button onClick={toTop}>Go to top</Button> */}
           <Button 
        //    className={styles.scroll-button}
           style={{ display: showButton ? 'block' : 'none' }}
        onClick={handleClick}>
            Scroll to Top</Button>


        </div>

        </div>
    );
}
export default UpButton;