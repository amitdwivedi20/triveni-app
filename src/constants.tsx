export const AppConstants = {
    actions: {
        submitCreateProductForm : 'Submit_Create_Product_Form',
        cancelCreateProduct: 'Cancel_Create_Product_Form',
        resetCreateProduct : 'Reset_Create_Product_Form'
    },
    apiUrls:{
        //serverUrl: 'http://localhost:8080/',
        serverUrl: 'https://13.250.116.70:8443/app-0.0.1-SNAPSHOT/',
        serverlUrlProd: 'https://13.250.116.70:8443/app-0.0.1-SNAPSHOT/',
        baseUrl: 'api/v1/',
        getAllProduct: 'product/get-all',
        createProduct: 'product/create',
        deleteProduct: 'product/delete/',
        userLogin: 'user/login'
    },
    storageKeys: {
        isUserLoggedIn : 'isuserloggedin',
        authToken: 'authToken'
    },
    statusCodes: {
        status200: 200,
        status201: 201,
        status401: 401,        
        status404: 404,
        status500: 500,
    }
}