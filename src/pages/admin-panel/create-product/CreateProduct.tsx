
import { useState, useEffect } from 'react';
import { ICommonResponse, IProduct } from '../../../DataMock/data';
import CreateProductForm from '../../../components/forms/create-product-form/CreateProductForm';
import styles from './CreateProduct.module.css';
import { Button } from '@mui/material';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import { useNavigate } from 'react-router-dom';
import { createProduct } from '../../../services/product-service/ProductService';
import { AppConstants } from '../../../constants';
import NotificationComponent from '../../../components/notification/NotificationComponent';
import Loader from '../../../components/loader/Loader';

const CreateProduct = () => {
    const [open, setOpen] = useState(false);
    const [reset, setReset] = useState(false);
    const [message, setMessage] = useState('');
    const [showLoader, setShowLoader] = useState(false);
    const navigate = useNavigate();

    const onSubmitActionHandler = (arg0: IProduct): void => {
        try {
            //console.log('Form Submitted --', arg0);
            setShowLoader(true);           
            createProduct(arg0).then((res:ICommonResponse)=> {
                //console.log(res);
                if(res && res.result && res.status == AppConstants.statusCodes.status201){
                    console.log(res.message);
                    setMessage(res.message);
                    setOpen(true);
                    setReset(true);
                }else{

                }
                setShowLoader(false);
            })            
        } catch (error) {
            throw new Error('OnSubmitForm Error ');
        }
        
    }

    const onClickBack = () => {
        console.log('onclick onClickBack');
        navigate(`/admin`)
    }

    const handleNotificationClose = () => {
        setOpen(false);
    }

    
    return (
        <div className={styles.createproduct__root}>
            {showLoader && <Loader />}
            <div className={styles.admin_dashboard__header}>
                <div className={styles.admin_dashboard__header__item}>
                    <h2>Create Product</h2>
                </div>
                <div className={styles.admin_dashboard__header__item}>                     
                    <Button size="small" startIcon={<ArrowBackSharpIcon />} onClick={onClickBack}>
                         Back</Button>                    
                </div>
            </div>

            <CreateProductForm submitForm={onSubmitActionHandler} resetForm={reset}/>
            <NotificationComponent open={open} handleClose={handleNotificationClose} message={message}/>
        </div>
    )
}

export default CreateProduct;