import React from "react";
import ContactUsForm from "./contact-us-form/CotactUsForm";
import ContactUsInfo from "./contact-us-info/ContactUsInfo";
import styles from './ContactUs.module.css';

const ContactUs = () => {
    return (
        <div className={styles.contactus}>
            <div className={styles.contactus__banner}>
                <div className={styles.contactus__banner___title}>
                    Need any help ? Reach Out To Us
                </div>
            </div>
            <div className={styles.contactus__section}>
                <div className={styles.contactus__section__container}>
                    <div className={styles.contactus__section__container__item}>
                    <h1>Contact Info:</h1>
                    <ContactUsInfo/>
                    </div>
                    <p className={styles.contactus__or}>OR</p>
                    <div className={styles.contactus__section__container__item}>
                        <h1>Fill this Form. We will get back to you.</h1>
                        <ContactUsForm/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactUs;