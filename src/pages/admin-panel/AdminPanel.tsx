import { useNavigate } from 'react-router-dom';
import styles from './AdminPanel.module.css';
import { MouseEvent, useEffect, useState } from 'react';
import { getProductList } from '../../services/product-service/ProductService';
import DataTable from '../../components/forms/data-table/DataTable';
//import { ProductColumns } from '../../DataMock/data';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Button, IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import Stack from '@mui/material/Stack';
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

    const ProductColumns: GridColDef[] = [
        { field: 'productId', headerName: 'ID', width: 90 },
        {
          field: 'productName',
          headerName: 'Product name',
          width: 150,
          editable: true,
        },
        {
          field: 'cost',
          headerName: 'Cost (INR)',
          width: 150,
          editable: true,
        },
        {
            field: 'active',
            headerName: 'Is Active',
            width: 150,
            editable: true,
          },
          {
            field: 'action',
            headerName: 'Actions',
            width: 200,
            renderCell: (params: GridRenderCellParams<any>) => (
                <div>
                 <Tooltip title={'Edit Product'} >
                <IconButton aria-label="edit" color="primary" onClick={(event) => {editProductHandler(event, params)}}>
                    <BorderColorIcon/> 
                </IconButton>
                </Tooltip>

                <Tooltip title={'Delete Product'} >
                <IconButton aria-label="delete" color="primary">
                     <DeleteIcon />
                </IconButton>
                </Tooltip>
                
                </div>
                
            )
          }
      ];

      const editProductHandler = (event: any, params: any) => {
        console.log('Edit Item Clicked -- ',event,params);
        navigate(`/admin/editproduct`)
      }
    return (
        <div className={styles.adminpanel_root}>
            <div className={styles.admin_dashboard__header}>
                <div className={styles.admin_dashboard__header__item}>
                    <h2>Admin Dashboard</h2>
                </div>
                <div className={styles.admin_dashboard__header__item}>                     
                    <Button variant="contained" size="small" startIcon={<AddIcon />} onClick={onClickItem}>
                        Product
                    </Button>                    
                </div>
            </div>
            <div>
                <DataTable data = {productList} columns={ProductColumns} idKey="productId"/>
            </div>
            
        </div>
    )
}

export default AdminPanel;