import { Carousel } from "react-bootstrap";
import styles from "./imageSlider.module.css";

const ImageSlider = (props) => {
  const { img1, img2, img3, img4 } = props;

  // Determine the number of images
  const imageCount = [img1, img2, img3, img4].filter(Boolean).length;

  if (imageCount <= 1) {
    // Only one image, render it directly without Carousel
    return (
      <div className={styles.image_slider}>
        <img
          className="d-block w-100"
          src={img1 || img2 || img3 || img4}
          alt="Slide"
          style={{ height: "500px", objectFit: "cover" }}
        />
      </div>
    );
  }

  // Multiple images, render Carousel
  return (
    <div className={styles.image_slider}>
      <Carousel>
        {img1 && (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img1}
              alt="Slide"
              style={{ height: "500px", objectFit: "cover" }}
            />
          </Carousel.Item>
        )}
        {img2 && (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img2}
              alt="Slide"
              style={{ height: "500px", objectFit: "cover" }}
            />
          </Carousel.Item>
        )}
        {img3 && (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img3}
              alt="Slide"
              style={{ height: "500px", objectFit: "cover" }}
            />
          </Carousel.Item>
        )}
        {img4 && (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img4}
              alt="Slide"
              style={{ height: "500px", objectFit: "cover" }}
            />
          </Carousel.Item>
        )}
      </Carousel>
    </div>
  );
};

export default ImageSlider;
