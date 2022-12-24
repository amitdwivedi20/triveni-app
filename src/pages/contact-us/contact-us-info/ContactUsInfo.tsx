import React from "react";
import styles from './ContactUsInfo.module.css';

const ContactUsInfo = () => {
    return (
        <div className={styles.contactusinfo}>
            <div className={styles.contactusinfo__row}>
                <div className={styles.contactusinfo__item__header}>OFFICE ADDRESS</div>
                <div className={styles.contactusinfo__item__header___description}>B-100, Sector-67, Noida, Uttar Pradesh 201301</div>
            </div>
            <div className={styles.contactusinfo__row}>
                <div className={styles.contactusinfo__item__header}>EMAIL US @</div>
                <div className={styles.contactusinfo__item__header___description}>info@trivenialmirah.com</div>

            </div>
            <div className={styles.contactusinfo__row}>
                <div className={styles.contactusinfo__item__header}>NEED TO CALL US?</div>
                <div className={styles.contactusinfo__item__header___description}>+91 9335134678, 9305837368, 8874208127</div>
            </div>
            <div className={styles.contactusinfo__row}>
                <div className={styles.contactusinfo__item__header}>AFTER SALES SERVICES</div>

            </div>
        </div>
    )
}

export default ContactUsInfo;