import { Button } from '@mui/material';
import styles from './EditProduct.module.css';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import { useNavigate, useParams } from 'react-router-dom';
import EditProductForm from '../../../components/forms/edit-product-form/EditProductForm';
import { useEffect, useState } from 'react';
import { getProductById, updateProduct } from '../../../services/product-service/ProductService';
import { AppConstants } from '../../../constants';
import { ICommonResponse, IProduct, IProductUpdate } from '../../../DataMock/data';
import NotificationComponent from '../../../components/notification/NotificationComponent';

const EditProduct = () => {
    const navigate = useNavigate();
    const [isProductAvailable, setIsProductAvailable] = useState(false);
    const [product, setProduct] = useState<IProduct | null>(null);
    const { id } = useParams();
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const onClickBack = () => {
        navigate(`/admin`)
    }

    useEffect(() => {
        try {
            if (id && id.length) {
                getProductById(id).then((res: ICommonResponse) => {
                    if (res && res.status == AppConstants.statusCodes.status200) {
                        //setProductList(res.result);

                        if (res.result && res.result.length) {
                            setIsProductAvailable(true);
                            const product: IProduct = res.result[0];
                            //product.productid = id;
                            console.log('product --- ', product);
                            setProduct(product);
                        }
                    } else {
                        console.log('error while product fetch');
                    }

                });
            }


        } catch (error) {
            throw new Error('Error while fetching item for Edit')
        }

    }, []);

    const onSubmitActionHandler = (arg0: IProduct): void => {
        try {
            let reqObj: any = arg0;
            reqObj.productid = id;
            console.log('Form Submitted --', reqObj);
            updateProduct(reqObj).then((res: ICommonResponse) => {
                console.log(res);
                if (res && res.result && res.status == AppConstants.statusCodes.status200) {
                    console.log(res.message);
                    setMessage(res.message);
                } else {
                    setMessage(res.message);
                }
            })
        } catch (error) {
            throw new Error('On Update Form Error ');
        }

    }

    const handleNotificationClose = () => {
        setOpen(false);
    }
    return (
        <div className={styles.edit_product_form__root}>
            <div className={styles.admin_dashboard__header}>
                <div className={styles.admin_dashboard__header__item}>
                    <h2>Edit Product</h2>
                </div>
                <div className={styles.admin_dashboard__header__item}>
                    <Button size="small" startIcon={<ArrowBackSharpIcon />} onClick={onClickBack}>
                        Back</Button>
                </div>
            </div>
            <div className={styles.edit_product_form___container}>
                {isProductAvailable && <EditProductForm submitForm={onSubmitActionHandler} product={product} />}

            </div>
            <NotificationComponent open={open} handleClose={handleNotificationClose} message={message} />
        </div>
    )
}
export default EditProduct;