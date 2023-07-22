import { AppConstants } from "../../constants"
import { getApi, postApi } from "../common-service/CommonService";




/**
 * 
 * @param reqBody 
 * @returns Creates a new Product
 */
export async function login(reqBody: any) {
  let url = AppConstants.apiUrls.serverUrl + AppConstants.apiUrls.baseUrl + AppConstants.apiUrls.userLogin;
  const data = await postApi(url, reqBody);
  return await data.text();
}

