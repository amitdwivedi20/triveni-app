import React from "react";
import styles from './AboutUs.module.css';

const AboutUs = () => {
    return (
        <div className={styles.aboutus}>
            <div className={styles.aboutus__banner}>
                <div className={styles.aboutus__banner___title}>
                    About Triveni Almirah
                </div>

            </div>

            <div className={styles.aboutus__content}>
                <div className={styles.aboutus__content__whowearesection}>
                    <div className={styles.aboutus__content__whowearesection__item}>
                        <h1>Who We are</h1>
                        <p>
                            Triveni Almirah is India's No. One Domestic Fancy Almirah company.
                            We are one of the biggest manufacturer of domestic Steel Almirah with presence in more than 800 cities, 2500 dealers network across 15 states.
                        </p>
                    </div>
                    <div className={styles.aboutus__content__whowearesection__item}>
                        <h1>We are different than rest</h1>
                        <p>
                            Triveni Almirah is India's No. One Domestic Fancy Almirah company.
                            We one of the biggest manufacturer of domestic Steel Almirah with presence in more than 800 cities, 2500 dealers network across 15 states.
                        </p>
                    </div>
                    <div className={styles.aboutus__content__whowearesection__item}>
                        <h1>CORE VALUES</h1>
                        <p>
                            Triveni Almirah has always been values-driven. These values continue to direct the growth and business of our company. The core Triveni Almirah values of our business are:
                            <ul>
                                <li><strong>Integrity:</strong>We must conduct our business fairly, with honesty and transparency.</li>
                                <li><strong>Understanding:</strong>We must be caring, show respect, compassion and humanity for our colleagues and customers.</li>
                                <li><strong>Excellence:</strong>We must constantly strive to achieve the highest possible standards in our day-to-day work and in the quality of the storewell and services we provide.</li>
                                <li><strong>Unity:</strong>We must work cohesively with our colleagues across the company and with our customers and partners, building strong relationships based on tolerance, understanding and mutual cooperation.</li>
                            </ul>
                        </p>
                    </div>
                    <div className={styles.aboutus__content__whowearesection__item}>
                        <h1>INNOVATION</h1>
                        <p>
                            Innovation — in thoughts, processes, approaches and strategies — has become a critical factor for Triveni Almirah as they pave the way for a future in a business world without boundaries. The objective is to consistently deliver breakthrough products and services.
                        </p>
                    </div>
                    <div className={styles.aboutus__content__whowearesection__item}>
                        <h1>INFRASTRUCTURE</h1>
                        <p>
                            We have established a state-of-the-art infrastructure unit, which is well-armed with advanced CNC Shearing machine, CNC Press brake machine, Automatic powder coating plant with full treatment tanks welded by Mig welding helps us timely to complete the orders with ease. Our facility is divided into various departments like manufacturing, quality testing, marketing division and Client servicing unit, which helps in simplifying all the business operations. All the professionals associated with us help us to provide customization facility and design the Steel Almirah in tandem with the details provided by our clients. With all these distinctive features of our firm and qualitative range of products offered by us, we have achieved a remarkable position in the market.
                        </p>
                    </div>
                    <div className={styles.aboutus__content__whowearesection__item}>
                        <h1>QUALITY</h1>
                        <p> It is primarily manufactured by the German Technology Roto-Moulding Machine and we are mainly the sole manufacturer to use this process in the Country.
                            All this package comes under the economical pricing.</p>
                    </div>
                    <div className={styles.aboutus__content__whowearesection__item}>
                        <h1>We care about</h1>
                        <p>
                            <ul>
                                <li>Quality</li>
                                <li>Research & Development</li>
                                <li>Health, Safety & Environment</li>
                                <li>Human Resource Development</li>
                                <li>Energy Conservation</li>
                                <li>Corporate Citizenship</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.aboutus__content__whowearesection__awards}>
                <h1>AWARDS & ACHIEVEMENT</h1>
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
            <div className={styles.aboutus__content__otherInfo}>
                <h1>What Keeps Up Going</h1>
                <p>
                    Triveni Almirah believes that any business conduct can be ethical only when it rests on the core values of Honesty, Integrity, Respect, Fairness, Purposefulness, Trust, and Caring.
                    The essence of these commitments is that each employee conducts the company's business with integrity, in compliance with applicable laws, and in a manner that excludes considerations of personal advantage.

                    We do not loose sight of these values under any circumstances, regardless of the goals we have to achieve. To us, the means are as important as the ends.
                </p>
            </div>
        </div>
    )
}

export default AboutUs;