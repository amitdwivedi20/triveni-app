import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styles from './Home-Carousel.module.css';
const HomeCarousel = () => {
    const options = {
        loop: true,
        margin: 10,
        items: 1,
        autoplay: true,
        mouseDrag: true,
        touchDrag: true,
        dots: true
    };

    return (
        <OwlCarousel className="owl-theme" {...options}>
            <div className="item">
                <img className={styles.image}
                    src="https://d2rdb56lmj4es2.cloudfront.net/data/photo/2019/3/28/0328194-2590-FCBD-5A4FCA54E307E0AB.jpg"
                    alt="road"
                />
                <div className={styles.overlay}>
                    <div className={styles.content__header}>
                        <h1><a href="">Think Big Do Creative Grow Business</a></h1>
                        <p><a href="">Shaped By performance</a></p>
                    </div>
                </div>
            </div>
            <div className="item">
                <img className={styles.image}
                    src="https://d2rdb56lmj4es2.cloudfront.net/data/photo/2019/2/18/0218196-2590-FCBD-5AA19539BBCE5DDF.jpg"
                    alt="sunrise"
                />
                <div className={styles.overlay}>
                    <div className={styles.content__header}>
                        <h1><a href="">Think Big Do Creative Grow Business</a></h1>
                        <p><a href="">Shaped By performance</a></p>
                    </div>
                </div>
            </div>
            <div className="item">
                <img className={styles.image}
                    src="https://d2rdb56lmj4es2.cloudfront.net/data/photo/2019/3/28/0328192-2590-FCBD-5A018FCFA66A0706.jpg"
                    alt="road2"
                />
                <div className={styles.overlay}>
                    <div className={styles.content__header}>
                        <h1><a href="">Think Big Do Creative Grow Business</a></h1>
                        <p><a href="">Shaped By performance</a></p>
                    </div>
                </div>
            </div>
        </OwlCarousel>
    )
}

export default HomeCarousel;