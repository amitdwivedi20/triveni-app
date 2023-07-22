import { Button } from "@mui/material";
import { GridColDef, GridRenderCellParams, GridValueGetterParams } from "@mui/x-data-grid";

export const products = [
    {
        'id': 1,
        'name': 'Product 1',
        'description': 'This is test Description',
        'descriptionList': [
            'Description this is test 1',
            'Description this is test 1',
            'Description this is test 1',
            'Description this is test 1',
            'Description this is test 1',
            'Description this is test 1'
        ],
        'img': 'https://picsum.photos/200'
    },
    {
        'id': 2,
        'name': 'Product 2', 'description': 'This is test Description', 'descriptionList': [
            'Description this is test 1',
            'Description this is test 1',
            'Description this is test 1',
            'Description this is test 1',
            'Description this is test 1',
            'Description this is test 1'
        ], 'img': 'https://picsum.photos/200'
    },
    {
        'id': 3,
        'name': 'Product 3', 'description': 'This is test Description', 'descriptionList': [
            'Description this is test 1',
            'Description this is test 1',
            'Description this is test 1',
            'Description this is test 1',
            'Description this is test 1',
            'Description this is test 1'
        ], 'img': 'https://picsum.photos/200'
    },
    {
        'id': 4,
        'name': 'Product 4', 'description': 'This is test Description', 'descriptionList': [
            'Description this is test 1',
            'Description this is test 1',
            'Description this is test 1',
            'Description this is test 1',
            'Description this is test 1',
            'Description this is test 1'
        ], 'img': 'https://picsum.photos/200'
    },
    {
        'id': 5,
        'name': 'Product 5', 'description': 'This is test Description', 'descriptionList': [
            'Description this is test 1',
            'Description this is test 1',
            'Description this is test 1',
            'Description this is test 1',
            'Description this is test 1',
            'Description this is test 1'
        ], 'img': 'https://picsum.photos/200'
    },
    {
        'id': 6,
        'name': 'Product 6', 'description': 'This is test Description', 'descriptionList': [
            'Description this is test 1',
            'Description this is test 1',
            'Description this is test 1',
            'Description this is test 1',
            'Description this is test 1',
            'Description this is test 1'
        ], 'img': 'https://picsum.photos/200'
    }
]


export const routeUrlList = [
    { 'name': 'Home', 'url': '' },
    { 'name': 'Products', 'url': 'products' },
    { 'name': 'About Us', 'url': 'aboutus' },
    { 'name': 'Awards and Recognitions', 'url': 'awardsandrecognitions' },
    { 'name': 'contact Us', 'url': 'contactus' },
    { 'name': 'Admin', 'url': 'admin' }
]

export interface IProduct {
    productName: string;
    active: boolean;
    cost: string;
    material: string;
    dimensions : string;
    colors: string;
    bodyColor: string;
    doorColor: string;
    description: string;
    descriptionDetails: string;
}

export const ProductColumns: GridColDef[] = [
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
        width: 150,
        editable: true,
      
      }
  ];


  export interface IUser{
    username: string;
    password: string;
    active?: boolean;
  }

  export interface ICommonResponse {
    message: string;
    result: any;
    status: number;
  }


