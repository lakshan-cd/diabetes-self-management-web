import {Button} from 'react-bootstrap';
import styles from '../css/style.module.css';

const UpButton = () =>{
    return(
        <div className = {styles.button_to_top} >
           <Button>Go to top</Button>
        </div>
    );
}
export default UpButton;