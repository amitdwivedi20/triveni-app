import { useEffect, useState } from 'react';
import styles from './HomePagePanel.module.css';
import Loader from '../../components/loader/Loader';
import { Button, IconButton, Tooltip } from '@mui/material';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import NotificationComponent from '../../components/notification/NotificationComponent';
import DataTable from '../../components/forms/data-table/DataTable';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { sampleDataHomepageTable } from '../../DataMock/data';

const HomePagePanel = () => {
    const [showLoader, setShowLoader] = useState(false);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [homePageItemList, setHomePageItemList] = useState([]);
    const navigate = useNavigate();
    const onClickBack = () => {
        navigate(`/admin`);
    }
    const onClickItem = () => {

    }
    const Columns: GridColDef[] = [
        { field: 'carouselId', headerName: 'ID', width: 90 },
        {
            field: 'header',
            headerName: 'Heading',
            width: 150,
            editable: true,
        },

        {
            field: 'subHeader',
            headerName: 'Sub Header',
            width: 150,
            editable: true,
        },
        {
            field: 'imgUrl',
            headerName: 'Image Url',
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
                        <IconButton aria-label="edit" color="primary" onClick={(event) => { editHandler(event, params) }}>
                            <BorderColorIcon />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title={'Delete Product'} >
                        <IconButton aria-label="delete" color="primary" onClick={(event) => { deleteHandler(event, params) }}>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>

                </div>

            )
        }
    ];

    const editHandler = (event, params) => {
        console.log(event, params)
    }
    const deleteHandler = (event, params) => {
        console.log(event, params)
    }

    const handleNotificationClose = () => {
        setOpen(false);
    }

    useEffect(()=>{
        let sampleData = sampleDataHomepageTable;
        setHomePageItemList(sampleData);
    },[])

    return (
        <div className={styles.homepagepanel_root}>
            {showLoader && <Loader />}

            <div className={styles.admin_dashboard__header}>
                <div className={styles.admin_dashboard__header__item}>
                    <Button size="small" startIcon={<ArrowBackSharpIcon />} onClick={onClickBack}>
                        Back</Button>

                </div>
                <div className={styles.admin_dashboard__header__item}>
                    <h2>Home Page Dashboard</h2>
                </div>
                <div className={styles.admin_dashboard__header__item}>
                    <Button variant="outlined" size="small" startIcon={<AddIcon />} onClick={onClickItem}>
                        Add Home Carousel
                    </Button>
                </div>
            </div>

            <div>
                <DataTable data={homePageItemList} columns={Columns} idKey="homepagecarausel" />
                <NotificationComponent open={open} handleClose={handleNotificationClose} message={message} />
            </div>
        </div>
    )
}
export default HomePagePanel;