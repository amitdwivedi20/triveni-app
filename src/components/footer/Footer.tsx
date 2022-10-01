import React from "react";
import styles from './Footer.module.css';
import CopyrightIcon from '@mui/icons-material/Copyright';
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
                    <div className={styles.footer__copyright__content}>
                        <p><CopyrightIcon fontSize="inherit" className={styles.footer__copyright__icon}/> 2022 <a href="/">Triveni Almirah</a> All Rights Reserved.</p>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer;