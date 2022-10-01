import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from './CarouselComponent.module.css';
const CarouselComponent = ()=>{

     
    return(
        <div>
             <Carousel infiniteLoop centerMode autoPlay={true} showThumbs={false} autoFocus={true}>
                <div className={styles.slide}>                    
                    <img src="https://picsum.photos/id/1001/500/500" />
                    <p className="legend">Legend 1</p>
                    <h2>Header 1</h2>
                </div>
                <div className={styles.slide}>                
                    <img src="https://picsum.photos/id/1040/500/500" />
                    <p className="legend">Legend 2</p>
                    <h2>Header 1</h2>
                </div>
                <div className={styles.slide}>                
                    <img src="https://picsum.photos/id/1047/500/500" />
                    <p className="legend slide-up">Legend 3</p>
                    <h2>Header 1</h2>
                </div>
                <div className={styles.slide}>
                
                    <img src="https://picsum.photos/id/1070/500/500" />
                    <p className="legend slide-up">Legend 4</p>
                    <h2>Header 1</h2>
                </div>
                <div className={styles.slide}>                
                    <img src="https://picsum.photos/id/1072/500/500" />
                    <p className="legend slide-up">Legend 5</p>
                    <h2 >Header 1</h2>
                </div>
                <div className={styles.slide}>                
                    <img src="https://picsum.photos/id/1071/500/500" />
                    <p className="legend slide-up">Legend 6</p>
                    <h2>Header 1</h2>
                </div>
                <div className={styles.slide}>
                    <img src="https://picsum.photos/id/111/500/500" />
                    <p className="legend slide-up">Legend 7</p>
                    <h2>Header 1</h2>
                </div>
            </Carousel>
        </div>
    )
}

export default CarouselComponent;