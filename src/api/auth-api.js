import BaseAPI from "./base-api"

function AuthAPI() {
    
}

AuthAPI.prototype = new BaseAPI

AuthAPI.prototype.getAuthData = function() {
    return this.get(`auth/me`)
}


export const authAPI = new AuthAPI
