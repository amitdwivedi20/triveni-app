
import { useState, useEffect } from 'react';
import { IProduct } from '../../../DataMock/data';
import CreateProductForm from '../../../components/forms/create-product-form/CreateProductForm';
import styles from './CreateProduct.module.css';
import { Button } from '@mui/material';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import { useNavigate } from 'react-router-dom';
const CreateProduct = () => {

    const navigate = useNavigate();
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

    const onClickBack = () => {
        console.log('onclick onClickBack');
        navigate(`/admin`)
    }

    return (
        <div className={styles.createproduct__root}>
            <div className={styles.admin_dashboard__header}>
                <div className={styles.admin_dashboard__header__item}>
                    <h2>Add or Create Product</h2>
                </div>
                <div className={styles.admin_dashboard__header__item}>                     
                    <Button size="small" startIcon={<ArrowBackSharpIcon />} onClick={onClickBack}>
                         Back</Button>                    
                </div>
            </div>

            <CreateProductForm submitForm={onSubmitActionHandler}/>
        </div>
    )
}

export default CreateProduct;