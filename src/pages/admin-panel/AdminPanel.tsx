import { useNavigate } from 'react-router-dom';
import styles from './AdminPanel.module.css';
import { useEffect, useState } from 'react';
import { getProductList } from '../../services/product-service/ProductService';
import DataTable from '../../components/forms/data-table/DataTable';
import { ProductColumns } from '../../DataMock/data';

const AdminPanel = (props: any) => {
    const navigate = useNavigate();
    const [productList, setProductList] = useState([]);

    useEffect(()=>{
        try {
            getProductList().then((res)=>{
                console.log(res);
                setProductList(res)
            })
        } catch (error) {
            throw new Error('Error while fetching response')
        }
      
    },[]);
    
    const onClickItem: any = async (action:string) => {     
        console.log(action)   
        navigate(`/admin/createproduct`)
    }
    return (
        <div className={styles.adminpanel_root}>
            <div >
                <DataTable data = {productList} columns={ProductColumns} idKey="productId"/>
            </div>
            <div className={styles.admin_panel__action__container}>
                <div className={styles.admin_action} onClick={onClickItem}><span><h2>Create Product</h2></span></div>
                <div className={styles.admin_action}><span><h2>Edit/Update Product</h2></span></div>
                <div className={styles.admin_action}><span><h2>Delete Product</h2></span></div>
                <div className={styles.admin_action}><span><h2>Enable/Disable Product</h2></span></div>
            </div>
        </div>
    )
}

export default AdminPanel;