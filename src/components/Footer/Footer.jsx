import React from 'react'
import './footer.css'

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
// import logo from '../../assets/images/eco-logo.png'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg='4' className='mb-4' md='6'>
                        <div className="logo">
                            <div>
                                <h1 className='text-white'>Multimart</h1>
                            </div>
                            <div>
                                <h1>MiltiMart</h1>
                                {/* <p> Since 1995</p> */}
                            </div>
                        </div>
                        <p className='footer_text mt-4'> Moi ngay toi chon mot niem vui. Ngoi ngam que huong
                            va nghi lai minh. Tui chot biet rang, vi sao tui song
                            vi dat nuoc can mot trai tim.</p>
                    </Col>
                    <Col lg='3' md='3' className='mb-4'>
                        <div className='footer_quick-links'>
                            <h4 className='quick_links-title'>Top Categories</h4>
                            <ListGroup>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/shop'>Mobile Phones</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/cart'>Morden Sofa</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/login'>Arm chair</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to=''>Smart watch</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='2' md='3' className='mb-4'>
                        <div className='footer_quick-links'>
                            <h4 className='quick_links-title'>Useful Links</h4>
                            <ListGroup>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/shop'>Shop</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/cart'>Cart</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/login'>Login</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to=''>Privacy Policy</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='3' md='4'>
                        <div className='footer_quick-links'>
                            <h4 className='quick_links-title'>Contact</h4>
                            <ListGroup className='footer_contact'>
                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <span><i class="ri-map-pin-fill"></i></span>
                                    <p> 140 Tran Dai Nghia, Da Nang</p>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <span><i class="ri-phone-fill"></i></span>
                                    <p> 0386681969</p>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <span><i class="ri-mail-fill"></i></span>
                                    <p> shop@gmail.com</p>
                                </ListGroupItem>
                            </ListGroup>
                        </div>

                    </Col>
                    <Col lg='12'>
                        <p className='footer_copyright'>CopyRight {year} developed by me</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer