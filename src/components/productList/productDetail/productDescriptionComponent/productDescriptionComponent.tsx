import React, { useEffect, useState } from "react";

import styles from './ProductDescription.module.css';
import { IProduct } from "../../../../DataMock/data";

const ProductDescriptionComponent = (props: { product: IProduct | null }) => {
    const [product, setProduct] = useState(props.product);
    const [keyFeatureList, setkeyfeatureList] = useState<string[]>();
    const [aboutProductList, setAboutProductList] = useState<string[]>();
    useEffect(() => {
        try {
            if (props.product)
                setProduct(props.product);
            if (product?.keyFeatures && product?.keyFeatures.length) {
                setkeyfeatureList(getListArray(JSON.parse(product.keyFeatures)))
            }
            if (product?.aboutProduct && product?.aboutProduct.length) {
                setAboutProductList(getListArray(JSON.parse(product.aboutProduct)))
            }
            //setFieldValues(props.product)
            console.log('product --- in description comp', product)

        } catch (error) {
            throw new Error('Error while fetching response')
        }

    }, []);

    const getListArray = (strArr: string[]) => {
        let listArray: string[] = [];
        strArr.forEach(element => {
            listArray.push(element)
        });
        return listArray;
    }
    return (
        <div className={styles.productdescription_container}>
            <div className={styles.productdescription__title}>
                <h2>{product?.productName}</h2>

            </div>
            <hr />

            <div className={styles.productdescription__description___detail}>
                <div>
                    <table>
                        <tbody>
                            <tr><td className={styles.table_item__heading}>Material:</td> <td className={styles.table_item___data}>{product?.material ? product?.material : ' - '} </td></tr>
                            <tr><td className={styles.table_item__heading}>Dimension(mm):</td> <td className={styles.table_item___data}>{product?.dimensions ? product?.dimensions : ' - '}</td></tr>
                            <tr><td className={styles.table_item__heading}>Gaurantee:</td> <td className={styles.table_item___data}>{product?.gaurantee ? product?.gaurantee : ' - '}</td></tr>
                            <tr><td className={styles.table_item__heading}>Model Type:</td> <td className={styles.table_item___data}>{product?.modelType ? product?.modelType : ' - '}</td></tr>
                            <tr><td className={styles.table_item__heading}>Model Width:</td> <td className={styles.table_item___data}>{product?.modelWidth ? product?.modelWidth : ' - '}</td></tr>
                            <tr><td className={styles.table_item__heading}>No of Doors:</td> <td className={styles.table_item___data}>{product?.doorsCount ? product?.doorsCount : ' - '}</td></tr>
                            <tr><td className={styles.table_item__heading}>Available Type of Paint:</td> <td className={styles.table_item___data}>{product?.availablePaintType ? product?.availablePaintType : ' - '}</td></tr>
                        </tbody>
                    </table>

                    <table>
                        <tbody>
                            <tr><td className={styles.table_item__heading___color}>Body Color</td><td className={styles.table_item___data}><span className={styles.dot}></span> <span className={styles.dot}></span></td></tr>
                            <tr><td className={styles.table_item__heading___color}>Door Color</td><td className={styles.table_item___data}><span className={styles.dot}></span> <span className={styles.dot}></span></td></tr>
                        </tbody>
                    </table>

                </div>
            </div>
            <hr />
            <div className={styles.productdescription__description}>
                <h3>Description:</h3>
                <span>{product?.description}</span>

            </div>
            <hr />
            <div className={styles.productdescription__description___keyfeature}>
                <h3>Key Features:</h3>
                <ul>
                    {
                        keyFeatureList?.map((item, index) => {
                            return (
                                <li key={index}>{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <hr />
            <div className={styles.productdescription__description___aboutItem}>
                <h3>About this Product</h3>
                <ul>
                    {
                        aboutProductList?.map((item, index) => {
                            return (
                                <li key={'aboutProductList' + index}>{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default ProductDescriptionComponent;