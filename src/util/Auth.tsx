import { redirect } from "react-router-dom";
import { AppConstants } from "../constants";

export function getAuthToken() {
    const token = localStorage.getItem(AppConstants.storageKeys.authToken);
    return token;
}

export function checkAuthLoader() {
    const token = getAuthToken();
    if (!token) {
        return redirect('/login');
    }
    return null;
}

export function logoutUser() {
    localStorage.clear();
}