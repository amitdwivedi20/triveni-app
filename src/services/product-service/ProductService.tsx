import { AppConstants } from "../../constants"
import { getApi, getApiWithAuth, postApi } from "../common-service/CommonService";


/**
 * 
 * @returns Promise
 * List of all Product
 */
export async function getProductList() {
  let url = AppConstants.apiUrls.serverUrl + AppConstants.apiUrls.baseUrl + AppConstants.apiUrls.getAllProduct;
  const data = await getApi(url);
  return await data.json();
}

/**
 * 
 * @returns Promise
 * Product Based On ID
 */
export async function getProductById(id: string) {
  let url = AppConstants.apiUrls.serverUrl + AppConstants.apiUrls.baseUrl + AppConstants.apiUrls.getProductById + id;
  const data = await getApi(url);
  return await data.json();
}

/**
 * 
 * @param reqBody 
 * @returns Creates a new Product
 */
export async function createProduct(reqBody: any) {
  let url = AppConstants.apiUrls.serverUrl + AppConstants.apiUrls.baseUrl + AppConstants.apiUrls.createProduct;
  const data = await postApi(url, reqBody);
  return await data.json();
}

/**
 * Updates Product
 */
export function updateProduct() {

}

/**
 * Delete Product
 */
export async function deleteProduct(id: string, reqBody: any = null) {
  let url = AppConstants.apiUrls.serverUrl + AppConstants.apiUrls.baseUrl + AppConstants.apiUrls.deleteProduct + id;
  const data = await postApi(url, reqBody);
  return await data.json();
}