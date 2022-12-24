import React from "react";
import HomeCarousel from "../../components/home-carousel/Home-Carousel";
import styles from './Awards.module.css';

const Awards = () => {
    return (
        <div className={styles.awards}>
            <div className={styles.awards__banner}>
                <div className={styles.awards__banner___title}>
                    Award and Recognitions
                </div>
            </div>

            <div className={styles.awards__content__whowearesection__awards}>
            <h1>Our ACHIEVEMENTS</h1>
            <HomeCarousel/>
                
                <p>
                    Under the guidance of our mentor, "Mr. Varun Kumar Tiwari", Chairman & Managing Director we have been able to carve a niche for ourselves in the industry. His rich industry experience and sharp business ethics have helped us in forming a strong foothold in the market. In result we are awarded by the government as follows:-
                    <ul>
                        <li>Award for Best Industries by U.P Govt. in 2008.</li>
                        <li>Award of Star Rating by Industrial Dept of U.P Govt. in 2013.</li>
                        <li>Award for Best Contribution in Industries by India Govt. in 2014.</li>
                        <li>Award for Best Innovation by Govt. of India in 2015.</li>
                        <li>Award for Startup industry in 2016.</li>
                        <li>Award for Most trusted brand in North India in 2017.</li>
                        <li>Award for Business Excellence by Govt. of India in 2017.</li>
                        <li>Award for Excellence by U.P. State Govt. in 2017.</li>
                        <li>Award for Vishishtha Udyog Samman by U.P. State Govt. in 2018.</li>
                        <li>Award for Excellence in Customer Service by Govt. of India in 2018.</li>
                        <li>Award for Business Leadership Jointly by Zee News & Deputy Chief Minister U.P. Govt. in 2020.</li>
                        <li>Award for “UP के अनमोल रत्न” by Shri Narayan Rane, MSME Minister, Govt. Of India organised by ABP News in 2021.</li>
                        <li>Award by रक्षा मंत्री भारत सरकार एवं मुख्य मंत्री उत्तर प्रदेश द्वारा सम्मान, in 2021.</li>
                    </ul>
                </p>
            </div>
        </div>
    )
}

export default Awards;