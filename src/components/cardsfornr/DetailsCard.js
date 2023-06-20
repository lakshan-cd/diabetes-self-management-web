import { Card, Button, Row, Col } from "react-bootstrap";
// import slideShowImage4 from "../../assets/slide-show-home-page/slide-show-4.jpg";
import styles from "./detailsCard.module.css";
// import sildeAdd1 from "../../assets/side-add/slide-add-1.png";
// import slideShowImage6 from "../../assets/slide-show-home-page/slide-show-6.jpg.png";
// import ReadMore from "../Pages/ReadMore";
import {  Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const DetailsCard = (props) => {
  const maxDescriptionLength = 150;
  // console.log(title);
  const pageName = props.pageName;
  const id = props.id;
  // console.log(id);

  console.log(props.createdDate);


  // const handleClick = () => {
  //   setCurrentPage(page);
  //   window.scrollTo(0, 0);
  // };
  return (
    <div className={styles.carddiv}>
      {/* {currentPosts && currentPosts.map((post) => ( */}
      <div key={props.id}>
        <Card style={{ width: "409px" }} className={styles.card}>
          <Card.Img
            style={{ width: "409px", height: "200px", objectFit: "cover" }}
            variant="top"
            src={props.imgLink}
          />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              {props.description.slice(0, maxDescriptionLength)}
            </Card.Text>
            <Card.Text>{props.createdDate}</Card.Text>
            <Link to={`/ReadMore/${props.id}/${pageName}`}>
              <div className="read-more-icon" >
                <FontAwesomeIcon icon={faArrowRight}  /> {/* Icon */}
                {/* <span className="read-more-text">Read more</span>{" "} */}

                
                {/* Read more text */}
              </div>
            </Link>
          </Card.Body>
        </Card>
      </div>
      {/* ))} */}
    </div>
  );
};

export default DetailsCard;

// import { Card, Button } from "react-bootstrap";
// import styles from "./detailsCard.module.css";
// import { Link } from "react-router-dom";

// const DetailsCard = (props) => {
//   const maxDescriptionLength = 200;

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     });
//   };

//   const handleClick = () => {
//     window.scrollTo(0, 0);
//   };

//   return (
//     <div className={styles.carddiv}>
//       <div key={props.id}>
//         <Card style={{ width: "410px" }} className={styles.card}>
//           <Card.Img
//             style={{ width: "409px", height: "200px", objectFit: "cover" }}
//             variant="top"
//             src={props.imgLink}
//           />
//           <Card.Body>
//             <Card.Title>{props.title}</Card.Title>
//             <div className={styles.descriptionContainer}>
//               <Card.Text className={styles.description}>
//                 {props.description.length > maxDescriptionLength
//                   ? props.description.slice(0, maxDescriptionLength) + "..."
//                   : props.description}
//               </Card.Text>
//             </div>
//             <Card.Text>{formatDate(props.createdDate)}</Card.Text>
//             <Link to={`/ReadMore/${props.id}/${props.pageName}`}>
//               <Button variant="primary" onClick={handleClick}>
//                 Read more
//               </Button>
//             </Link>
//           </Card.Body>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default DetailsCard;



