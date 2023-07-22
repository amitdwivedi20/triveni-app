import { useNavigate } from 'react-router-dom';
import styles from './AdminPanel.module.css';
import { MouseEvent, useEffect, useState } from 'react';
import { deleteProduct, getProductList } from '../../services/product-service/ProductService';
import DataTable from '../../components/forms/data-table/DataTable';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Button, IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { AppConstants } from '../../constants';
import NotificationComponent from '../../components/notification/NotificationComponent';
import { ICommonResponse } from '../../DataMock/data';
const AdminPanel = (props: any) => {
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    try {
      if (localStorage.getItem('isuserloggedin') == "true") {
        getProductList().then((res:ICommonResponse) => {
          console.log(res);
          if (res && res.status == AppConstants.statusCodes.status200) {
            setProductList(res.result)
          } else {
            console.log('error while product fetch');
          }

        })
      } else {
        navigate(`/login`)
      }

    } catch (error) {
      throw new Error('Error while fetching response')
    }

  }, []);

  const onClickItem: any = async (action: string) => {
    console.log(action)
    navigate(`/admin/createproduct`)
  }

  const ProductColumns: GridColDef[] = [
    { field: 'productid', headerName: 'ID', width: 90 },
    {
      field: 'productName',
      headerName: 'Product name',
      width: 150,
      editable: true,
    },
    {
      field: 'cost',
      headerName: 'Price (INR)',
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
      field: 'colors',
      headerName: 'Colors',
      width: 150,
      editable: true,
    },
    {
      field: 'bodyColor',
      headerName: 'Body color',
      width: 150,
      editable: true,
    },
    {
      field: 'doorColor',
      headerName: 'Door Color',
      width: 150,
      editable: true,
    },
    {
      field: 'dimensions',
      headerName: 'Dimensions',
      width: 150,
      editable: true,
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 150,
      editable: true,
    },
    {
      field: 'descriptionDetails',
      headerName: 'Description Details',
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
            <IconButton aria-label="edit" color="primary" onClick={(event) => { editProductHandler(event, params) }}>
              <BorderColorIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title={'Delete Product'} >
            <IconButton aria-label="delete" color="primary" onClick={(event) => { deleteProductHandler(event, params) }}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>

        </div>

      )
    }
  ];

  const editProductHandler = (event: any, params: any) => {
    console.log('Edit Item Clicked -- ', event, params);
    navigate(`/admin/editproduct`);
  }

  const deleteProductHandler = (event: any, params: any) => {
    console.log('Edit Item Clicked -- ', event, params.row.productid);
    let productId = params.row.productid;
    deleteProduct(productId).then((res: ICommonResponse) => {
      console.log('res after delete', res);
      if (res && res.status == AppConstants.statusCodes.status200) {
        setMessage(res.message);
        setOpen(true);
      } else {
        
      }
    });
  }

  const handleNotificationClose = () => {
    setOpen(false);
  }
  return (
    <div className={styles.adminpanel_root}>
      <div className={styles.admin_dashboard__header}>
        <div className={styles.admin_dashboard__header__item}>
          <h2>Dashboard</h2>
        </div>
        <div className={styles.admin_dashboard__header__item}>
          <Button variant="outlined" size="small" startIcon={<AddIcon />} onClick={onClickItem}>
            Product
          </Button>
        </div>
      </div>
      <div>
        <DataTable data={productList} columns={ProductColumns} idKey="productId" />
        <NotificationComponent open={open} handleClose={handleNotificationClose} message={message}/>
      </div>

    </div>
  )
}

export default AdminPanel;