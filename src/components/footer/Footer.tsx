import React from "react";
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>

            <div className={styles.footer__main__container}>
                <div className={styles.footer_nav}>
                    <div className={styles.footer_nav__content}>
                        <h4>The Company</h4>

                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Dealer & Price</li>
                        <li>Products</li>
                        <li>Site Map</li>

                    </div>
                    <div className={styles.footer_nav__content}>
                        <h4>More Information</h4>

                        <li>After Sale Service</li>
                        <li>Distrubuter Ship Inquiry</li>
                        <li>Contact Us</li>

                    </div>
                    <div className={styles.footer_nav__content}>
                        <h4>Connect with Us</h4>

                        <li>Email: info@trivenialmirah.com</li>
                        <li>General Enquiry: +91 9335134678</li>

                    </div>
                </div>
                <div className={styles.footer__copyright}>
                    <p>@ 2022 <a>Triveni Almirah</a> All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;