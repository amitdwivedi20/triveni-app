import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRowId, GridValueGetterParams } from '@mui/x-data-grid';
import styles from './DataTable.module.css';

const DataTable = (props: {
    idKey: GridRowId; data: readonly any[]; columns: GridColDef<any>[]; 
}) => {

   
      
     

    return (
        <div className={styles.datatable_root}>
            <DataGrid
                rows={props.data}
                columns={props.columns}
                getRowId={(row: any) =>  row.productId + row.productName}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </div >
    )
}

export default DataTable;