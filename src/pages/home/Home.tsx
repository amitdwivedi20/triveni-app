import React from 'react';
import CarouselComponent from '../../components/carousel/CarouselComponent';
import styles from './Home.module.css';

const Home = () => {

    return (
        <div className={styles.homePage}>

            लाडली बिटिया की गृहस्थी में निपटाऊ नहीं टिकाऊ
            <section className={styles.homePage__section}></section>
            <section></section>
            <section></section>
            
            <section>
                <CarouselComponent/>
            </section>
            <section></section>
            <section></section>
        </div>
    )
}

export default Home;
