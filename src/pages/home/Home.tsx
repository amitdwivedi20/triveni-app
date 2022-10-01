import React from 'react';
import CarouselComponent from '../../components/carousel/CarouselComponent';
import styles from './Home.module.css';

const Home = () => {

    return (
        <div className={styles.homePage}>
            <p className='animate__animated animate__slideInLeft'>
            लाडली बिटिया की गृहस्थी में निपटाऊ नहीं टिकाऊ
            </p>
            
            <section className={styles.homePage__section}>
                <div className='animate__animated animate__fadeInUp' >
                <h1>Coming Soon...</h1>
                <h2>Dev in progress..</h2>
                </div>
                
            </section>
            <section className={styles.homePage__section}></section>
            <section className={styles.homePage__section}></section>
            
            <section className={styles.carousel__section}>
                <CarouselComponent/>
            </section>
            <section className={styles.homePage__section}></section>
            <section className={styles.homePage__section}></section>
        </div>
    )
}

export default Home;
