
import { useState, useEffect } from 'react';
import { IProduct } from '../../../DataMock/data';
import CreateProductForm from '../../../components/forms/create-product-form/CreateProductForm';
import styles from './CreateProduct.module.css';
const CreateProduct = () => {

    
    const onSubmitActionHandler = (arg0: IProduct): void => {
        let url = 'http://localhost:8080/api/v1/product/create';
        try {
            console.log('Form Submitted --', arg0);
            fetch(url,{
                method: 'POST',
                body: JSON.stringify(arg0),
                headers:{
                    'Content-Type' : 'application/json'
                }
            }).then((res)=> {
                console.log(res)
            })
            
        } catch (error) {
            throw new Error('OnSubmitForm Error ');
        }
        
    }

    return (
        <div className={styles.createproduct__root}>
            <h1>Add or Create Product</h1>

            <CreateProductForm submitForm={onSubmitActionHandler}/>
        </div>
    )
}

export default CreateProduct;