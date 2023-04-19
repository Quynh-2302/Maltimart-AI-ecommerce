import React, { useState, useEffect } from 'react'
import Helmet from '../components/Helmet/Helmet'

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import products from '../assets/data/products'

import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img.png'
import counterImg from '../assets/images/counter-timer-img.png'
import '../styles/home.css'

import Services from '../services/Services'
import ProductList from '../components/UI/ProductList'
import Clock from '../components/UI/Clock'

const Home = () => {
    const [trendingProducts, setTrendingProducts] = useState([]);
    const [bestSalesProducts, setBestSalesProducts] = useState([]);
    const [wirelessProducts, setWirelessProducts] = useState([]);
    const [mobileProducts, setMobileProducts] = useState([]);
    const [popularCategory, setPopularCategory] = useState([]);

    const year = new Date().getFullYear();

    useEffect(() => {
        const filteredTrendingProducts = products.filter(
            (item) => item.category === "chair"
        );

        const filteredBestSalesProducts = products.filter(
            (item) => item.category === "sofa"
        );

        const filteredMobileProducts = products.filter(
            (item) => item.category === "mobile"
        );
        const filteredWirelessProducts = products.filter(
            (item) => item.category === "wireless"
        );

        const filteredPoppularCategory = products.filter(
            (item) => item.category === "watch"
        );

        setTrendingProducts(filteredTrendingProducts);
        setBestSalesProducts(filteredBestSalesProducts);
        setMobileProducts(filteredMobileProducts);
        setWirelessProducts(filteredWirelessProducts)
        setPopularCategory(filteredPoppularCategory);
    }, []);
    return (
        <Helmet title={'Home'}>
            <section className="hero_section">
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                            <div className="hero_content">
                                <p className="hero_subtitle">Trending product in {year}</p>
                                <h2>Make your Interior More Minimalistic & Modern</h2>
                                <p> Moi ngay toi chon mot niem vui. Ngoi ngam que huong
                                    va nghi lai minh. Tui chot biet rang, vi sao tui song
                                    vi dat nuoc can mot trai tim.</p>
                                <motion.button whileTap={{ scale: 1.2 }} className="buy_btn">
                                    <Link to="shop"> SHOP NOW </Link>
                                </motion.button>

                            </div>
                        </Col>
                        <Col lg="6" md="6" >
                            <div className="hero_img">
                                <img src={heroImg} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Services />

            <section className='trending_products'>
                <Container>
                    <Row>
                        <Col lg='12' className='text-center'>
                            <h2 className='section_title'>Trending Products</h2>
                        </Col>
                        <ProductList data={trendingProducts} />
                    </Row>
                </Container>
            </section>

            <section className='best_sales'>
                <Container>
                    <Row>
                        <Col lg='12' className='text-center'>
                            <h2 className='section_title'>Best Sales</h2>
                        </Col>
                        <ProductList data={bestSalesProducts} />
                    </Row>
                </Container>
            </section>

            <section className='timer_count'>
                <Container>
                    <Row>
                        <Col lg='6' md='12' className='count_down-col'>
                            <div className="clock_top-content">
                                <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
                                <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
                            </div>

                            <Clock />

                            <motion.button whileTap={{ scale: 1.2 }} className="buy_btn store_btn">
                                <Link to='/shop'>Visit Store</Link>
                            </motion.button>

                        </Col>

                        <Col lg='6' md='12' className='text-end counter_img'>
                            <img src={counterImg} alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='trending_products'>
                <Container>
                    <Row>
                        <Col lg='12' className='text-center mb-5'>
                            <h2 className='section_title'>New Arrivals</h2>
                        </Col>
                        <ProductList data={wirelessProducts} />
                        <ProductList data={mobileProducts} />
                    </Row>
                </Container>
            </section>

            <section className='popular_category'>
                <Container>
                    <Row>
                        <Col lg='12' className='text-center mb-5'>
                            <h2 className='section_title'>Popular In Category</h2>
                        </Col>
                        <ProductList data={popularCategory}></ProductList>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}
export default Home