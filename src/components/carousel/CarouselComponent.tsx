import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from './CarouselComponent.module.css';
const CarouselComponent = ()=>{

     
    return(
        <div>
             <Carousel infiniteLoop centerMode autoPlay={true} showThumbs={false}>
                <div className={styles.slide}>
                    <img src="https://picsum.photos/300" />
                    <p className="legend">Legend 1</p>
                </div>
                <div className={styles.slide}>
                    <img src="https://picsum.photos/300" />
                    <p className="legend">Legend 2</p>
                </div>
                <div className={styles.slide}>
                    <img src="https://picsum.photos/300" />
                    <p className="legend slide-up">Legend 3</p>
                </div>
            </Carousel>
        </div>
    )
}

export default CarouselComponent;