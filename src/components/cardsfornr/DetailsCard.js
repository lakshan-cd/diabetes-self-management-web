import { Card, Button, Row, Col } from "react-bootstrap";
import styles from "./detailsCard.module.css";
import {  Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const DetailsCard = (props) => {
  const maxDescriptionLength = 150;
  // console.log(title);
  const pageName = props.pageName;
  const id = props.id;
  // console.log(id);

  // console.log(props.createdDate);
     // Extract date and time from the createdDate
  let date = '';
  let time = '';
  if (props.createdDate) {
    const createdDate = new Date(props.createdDate);
    date = createdDate.toLocaleDateString();
    time = createdDate.toLocaleTimeString();
  } else {
    // Display default values when createdDate is null
    date = 'N/A';
    time = 'N/A';
  }

  // const handleClick = () => {
  //   setCurrentPage(page);
  //   window.scrollTo(0, 0);
  // };
  return (
    <div className={styles.carddiv}>
      {/* {currentPosts && currentPosts.map((post) => ( */}
      <div key={props.id}>
      {/* <Card className={styles.card}> */}
        <Card style={{ width: "409px" }} className={styles.card}>
          {/* <Card.Img
            style={{ width: "409px", height: "200px", objectFit: "cover" }}
            variant="top"
            src={props.imgLink}
          /> */}
            <Card.Img
              className={styles.cardImg}
              variant="top"
              src={props.imgLink}
            />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              {props.description.slice(0, maxDescriptionLength)}
            </Card.Text>
            <Card.Text>Posted at : {date} {time}</Card.Text>
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



