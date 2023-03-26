import styles from '../css/style.module.css';
import {Card , Row , Col , Carousel ,Nav } from 'react-bootstrap';
import sildeAdd1 from '../assets/side-add/slide-add-1.png';
import slideShowImage1 from '../assets/slide-show-home-page/slide-show-1.jpg';
import slideShowImage2 from '../assets/slide-show-home-page/slide-show-2.jpg';
import slideShowImage3 from '../assets/slide-show-home-page/slide-show-3.jpg';
import slideShowImage4 from '../assets/slide-show-home-page/slide-show-4.jpg';



const ImagesSlide = () => {
    return (
        <div style={{ height : 'fit-content' }}>     
            <div >
                    <div className={styles.image_slide_header} >
                        <span>Diabetes Support system</span>
            </div>
                    <div className={styles.image_slide_add}>
                    <Nav.Link>

                    <Card className={styles.card_styles}>
                          <center><Card.Img src={sildeAdd1} alt="Card image" style = {{width : '200px' , paddingTop:'40px', alignItems:'center'}}/> </center>
                    <Card.ImgOverlay>
                        <Card.Title>Download app</Card.Title>
                        <span style={{  
                                position: 'absolute',
                                bottom: '5%',
                                left: '30%',
                                alignContent : 'center',
                                fontWeight : 'Blob',
                            
                                }}> For better service</span>
                    </Card.ImgOverlay>

                    </Card>
                    </Nav.Link>

                    </div>
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
                    <div className={styles.image_slide_add}>
                            <Card className={styles.card_styles}>
                            {/* <Card.Img src={sildeAdd1} alt="Card image" style = {{width : '200px'}}/> */}
                            <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </Card.ImgOverlay>
                            </Card>
                         </div>  
                        
                        <div className ={styles.blog_post}>
                                <span className ={styles.blog_post_header}>Lorem ipsum dolor sit amet</span><br></br>
                                <span>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </span>

                        </div>
                   

                         <div className={styles.image_slide_add}>
                            <Card className={styles.card_styles}>
                            {/* <Card.Img src={sildeAdd1} alt="Card image" style = {{width : '200px'}}/> */}
                            <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </Card.ImgOverlay>
                            </Card>
                         </div>
                         <div className ={styles.blog_post}>
                                <span className ={styles.blog_post_header}>Lorem ipsum dolor sit amet</span><br></br>
                                <span>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </span>

                        </div>

                        <div className={styles.blog_post}>
                            <Row>
                                <Col>
                                    <div>
                                    <Card className={styles.card_styles}>
                                    {/* <Card.Img src={sildeAdd1} alt="Card image" style = {{width : '200px'}} /> */}
                                    <Card.ImgOverlay>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content. This content is a little bit longer.
                                        </Card.Text>
                                        <Card.Text>Last updated 3 mins ago</Card.Text>
                                    </Card.ImgOverlay>
                                    </Card>
                                    </div>

                                </Col>

                                <Col>
                                    <div >
                                    <Card className={styles.card_styles}>
                                    {/* <Card.Img src={sildeAdd1} alt="Card image" style = {{width : '200px', display : 'block'}} /> */}
                                    <Card.ImgOverlay>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content. This content is a little bit longer.
                                        </Card.Text>
                                        <Card.Text>Last updated 3 mins ago</Card.Text>
                                    </Card.ImgOverlay>
                                    </Card>
                                    </div>
                                </Col>
                                </Row>
                            </div>

                            <div className={styles.image_slide_add}>
                                <Card className={styles.card_styles}>
                                {/* <Card.Img src={sildeAdd1} alt="Card image" style = {{width : '200px'}}/> */}
                                <Card.ImgOverlay>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text>Last updated 3 mins ago</Card.Text>
                                </Card.ImgOverlay>
                                </Card>
                            </div> 

                            {/* botom blog */}
                            <div className={styles.blog_post_end}>
                            <Row>
                                <Col>
                                    <div>
                                    <Card className="bg-dark" style={{border : 'none'}}>
                                    {/* <Card.Img src={sildeAdd1} alt="Card image" style = {{width : '300px'}} /> */}
                                    <Card.ImgOverlay>
                                        <Card.Title>Blog post 3</Card.Title>
                                        <Card.Text>
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </Card.Text>
                                        <Card.Text>Last updated 3 mins ago</Card.Text>
                                    </Card.ImgOverlay>
                                    </Card>
                                    </div>

                                </Col>

                                <Col>
                                    <div >
                                    <Card className="bg-dark" style={{border : 'none' }}>
                                    {/* <Card.Img src={sildeAdd1} alt="Card image" style = {{width : '300px', display : 'block'}} /> */}
                                    <Card.ImgOverlay>
                                        <Card.Title>Blog post</Card.Title>
                                        <Card.Text>
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </Card.Text>
                                        <Card.Text>Last updated 3 mins ago</Card.Text>
                                    </Card.ImgOverlay>
                                    </Card>
                                    </div>
                                </Col>
                                </Row>
                            </div>
                            <div className={styles.image_slide_add} >
                                <Card className={styles.card_styles}>
                                {/* <Card.Img src={sildeAdd1} alt="Card image" style = {{width : '200px'}}/> */}
                                <Card.ImgOverlay>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text>Last updated 3 mins ago</Card.Text>
                                </Card.ImgOverlay>
                                </Card>
                            </div>  
    
            </div>


        </div>
    );
}

export default ImagesSlide;