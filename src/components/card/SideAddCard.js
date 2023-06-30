import { Card, Nav } from "react-bootstrap";
import styles from "./SideAdd.module.css";
import sildeAdd1 from "../../assets/side-add/slide-add-2.png";

const SideAddCard = (props) => {
  return (
    <div>
      {/* <h1>Helooo from side add</h1> */}
      <div className={styles.image_slide_add}>
        <Nav.Link>
          <Card className={styles.card_styles}>
            <center>
              <Card.Img
                src={sildeAdd1}
                alt="Card image"
                style={{
                  width: "120px",
                  paddingTop: "80px",
                  alignItems: "center",
                }}
              />{" "}
            </center>
            <Card.ImgOverlay>
              <Card.Title>{props.title}</Card.Title>
              <span
                style={{
                  position: "absolute",
                  bottom: "5%",
                  left: "20%",
                  alignContent: "center",
                  fontWeight: "Blob",
                }}
              >
                {props.description}
              </span>
            </Card.ImgOverlay>
          </Card>
        </Nav.Link>
      </div>
    </div>
  );
};

export default SideAddCard;
