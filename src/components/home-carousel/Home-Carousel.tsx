import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styles from './Home-Carousel.module.css';
import carousel1 from '../../assets/images/carousel1.jpg';
import carousel2 from '../../assets/images/carousel2.jpg';
import carousel3 from '../../assets/images/carousel3.jpg';
import carousel1Large from '../../assets/images/carousel1_large.jpg';

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
                    src="https://picsum.photos/id/1002/900/900"
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
                    src="https://picsum.photos/id/1021/900/900"
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
                    src="https://picsum.photos/id/1060/900/900"
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