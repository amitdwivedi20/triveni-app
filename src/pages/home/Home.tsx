import React from 'react';
import CarouselComponent from '../../components/carousel/CarouselComponent';
import 'animate.css';
import styles from './Home.module.css';
import HomeCarousel from '../../components/home-carousel/Home-Carousel';
import Model from '../../components/models/ModelComponent';

const Home = () => {

    return (
        <div className={styles.homePage}>
            <div className={styles.site_banner}>
                <h4 className='animate__animated animate__slideInLeft'>
                    लाडली बिटिया की गृहस्थी में निपटाऊ नहीं टिकाऊ
                </h4>
            </div>
            <section className={styles.homePage__section__1}>
                <HomeCarousel />
            </section>

            <section className={styles.homePage__section__Model}>
                <h1 className={styles.homePage__section__Model___title}>Models</h1>
                <Model />
            </section>
            <section className={styles.homePage__section}>
                <div className='animate__animated animate__fadeInUp' >
                    <h1>Coming Soon...</h1>
                    <h2>Dev in progress..</h2>
                </div>
            </section>

            <section className={styles.carousel__section}>
                <CarouselComponent />
            </section>
            {/* <section className={styles.homePage__section}>
                <div className='animate__animated animate__fadeInUp' >
                    <h1>Coming Soon...</h1>
                    <h2>Dev in progress..</h2>
                </div>
            </section>
            <section className={styles.homePage__section}>
                <div className='animate__animated animate__fadeInUp' >
                    <h1>Coming Soon...</h1>
                    <h2>Dev in progress..</h2>
                </div>
            </section> */}
        </div>
    )
}

export default Home;
