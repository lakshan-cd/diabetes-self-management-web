import {Card , Row , Col , Carousel ,Nav } from 'react-bootstrap';
import styles from './imageSlider.module.css';
import slideShowImage1 from '../../assets/slide-show-home-page/slide-show-1.jpg';
import slideShowImage2 from '../../assets/slide-show-home-page/slide-show-2.jpg';
import slideShowImage3 from '../../assets/slide-show-home-page/slide-show-3.jpg';
import slideShowImage4 from '../../assets/slide-show-home-page/slide-show-4.jpg';

const ImageSlider = () => {
    return (
        <div>
                 <div className={styles.image_slider}>
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={slideShowImage1}
                            alt="First slide"
                            style = {{height : '500px'}}
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={slideShowImage2}
                            alt="Second slide"
                            style = {{height : '500px'}}
                            />

                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={slideShowImage3}
                            alt="Third slide"
                            style = {{height : '500px'}}
                            />

                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={slideShowImage4}
                            alt="Forth slide"
                            style = {{height : '500px'}}
                            />

                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        </Carousel>
                        

                    </div>
        </div>
    );

}
export default ImageSlider;