import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRenderCellParams, GridRowId, GridValueGetterParams } from '@mui/x-data-grid';
import styles from './DataTable.module.css';
import { Button } from '@mui/material';

const DataTable = (props: {
    idKey: GridRowId; data: readonly any[]; columns: GridColDef<any>[]; 
}) => {

   
    
     

    return (
        <div className={styles.datatable_root}>
            <Box>
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
            </Box> 
        </div >
    )
}

export default DataTable;