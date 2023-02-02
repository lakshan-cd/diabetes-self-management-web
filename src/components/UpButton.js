import {Button} from 'react-bootstrap';
import styles from '../css/style.module.css';

const UpButton = () =>{
    const toTop = () =>{
        window.scrollTo(0,0);
    };
    return(
        <div className = {styles.button_to_top} >
           <Button onClick={toTop}>Go to top</Button>


        </div>
    );
}
export default UpButton;