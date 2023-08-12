export const AppConstants = {
    actions: {
        submitCreateProductForm: 'Submit_Create_Product_Form',
        cancelCreateProduct: 'Cancel_Create_Product_Form',
        resetCreateProduct: 'Reset_Create_Product_Form'
    },
    apiUrls: {
        //serverUrl: 'https://localhost:8443/',
        serverUrl: 'https://13.250.116.70:8443/app-0.0.1-SNAPSHOT/',
        serverlUrlProd: 'https://13.250.116.70:8443/app-0.0.1-SNAPSHOT/',
        baseUrl: 'api/v1/',
        getAllProduct: 'product/get-all',
        createProduct: 'product/create',
        updateProduct: 'product/update',
        deleteProduct: 'product/delete/',
        getProductById: 'product/get/',
        userLogin: 'user/login'
    },
    storageKeys: {
        isUserLoggedIn: 'isuserloggedin',
        authToken: 'authToken'
    },
    statusCodes: {
        status200: 200,
        status201: 201,
        status401: 401,
        status404: 404,
        status500: 500,
    },
    s3Config: {
        bucketName: 'triveniappbucket',
        dirName: 'product_images', /* optional */
        region: 'us-east-2',
        accessKeyId: 'AKIA2ZVUYGNFWOEQNAHG',
        secretAccessKey: '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'
    }
}