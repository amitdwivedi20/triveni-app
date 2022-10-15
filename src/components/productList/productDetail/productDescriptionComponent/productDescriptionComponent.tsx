import React from "react";

import styles from './ProductDescription.module.css';

const ProductDescriptionComponent = () => {

    return (
        <div className={styles.productdescription_container}>
            <div className={styles.productdescription__title}>
                <h2>MAHARANI MODEL - MRANI</h2>

            </div>
            <hr />

            <div className={styles.productdescription__description___detail}>
                <div>
                    <table>
                        <tr><td className={styles.table_item__heading}>Material:</td> <td className={styles.table_item___data}>C.R. SHEET </td></tr>
                        <tr><td className={styles.table_item__heading}>Dimension(mm):</td> <td className={styles.table_item___data}>2010x915x530</td></tr>
                        <tr><td className={styles.table_item__heading}>Gaurantee:</td> <td className={styles.table_item___data}>10 Years on Paint & Locks</td></tr>
                        <tr><td className={styles.table_item__heading}>Avaiable Type of Paint:</td> <td className={styles.table_item___data}>Powder Coated, Metallic Finish</td></tr>
                    </table>

                    <table>
                        <tr><td className={styles.table_item__heading___color}>Body Color</td><td className={styles.table_item___data}><span className={styles.dot}></span> <span className={styles.dot}></span></td></tr>
                        <tr><td className={styles.table_item__heading___color}>Door Color</td><td className={styles.table_item___data}><span className={styles.dot}></span> <span className={styles.dot}></span></td></tr>
                    </table>

                </div>
            </div>
            <hr />
            <div className={styles.productdescription__description}>
                <h3>Description:</h3>
                <span>MAHARANI MODEL WITH POWDER COATING PAINT & METALLIC FINISH, WITH LOCKER & DRAWERS</span>

            </div>
            <hr />
            <div className={styles.productdescription__description___keyfeature}>
                <h3>Key Features:</h3>
                <ul>
                    <li>2 Way Locker</li>
                    <li>Hanging Rod</li>
                    <li>Three Shelf</li>
                    <li>Border Box Supporting on Door</li>
                    <li>Key Bag</li>
                    <li>Leveling Leg</li>
                </ul>
            </div>
            <hr />
            <div className={styles.productdescription__description___aboutItem}>
                <h3>About this Product</h3>
                <ul>
                    <li>8MP rear camera with auto focus | 5MP front camera</li>
                    <li>25.654 centimeters (10.1-inch) with 1920 x 1200 pixels resolution</li>
                    <li>Android Pie v9.0 operating system with Qualcomm Snapdragon 439 (4 x A53 @ 2.0GHz, 4 x A53 @ 1.45GHz) octa core processor,
                        4GB RAM, 64GB internal memory expandable up to 64GB, Single Nano SIM</li>
                    <li>Portable and folding universal stand for 7-10 inch Tablet PC</li>
                    <li>Using high-quality environmental engineering plastic material, effective to reduce travel weight</li>
                    <li>Joints using automatic spacing device, adjust the Angle is not adjust anywhere, can be directly which can adjust the Angle</li>
                    <li>For 1 person | 12 month subsription|can be used on upto 5 devices Parallely</li>
                </ul>
            </div>
        </div>
    )
}

export default ProductDescriptionComponent;