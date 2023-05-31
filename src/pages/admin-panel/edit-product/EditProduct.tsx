import { Button } from '@mui/material';
import styles from './EditProduct.module.css';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import { useNavigate } from 'react-router-dom';
import EditProductForm from '../../../components/forms/edit-product-form/EditProductForm';

const EditProduct = () => {
    const navigate = useNavigate();
    const onClickBack = () => {
        navigate(`/admin`)
    }
    return(
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
                <EditProductForm/>
            </div>
        </div>
    )
}
export default EditProduct;