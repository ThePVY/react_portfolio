import BaseAPI from "./base-api"

function ProfileAPI() {
    
}

ProfileAPI.prototype = new BaseAPI()

ProfileAPI.prototype.getProfileData = function(userId) {
    return this.get(`profile/${userId}`)
}

ProfileAPI.prototype.getProfileStatus = function(userId) {
    return this.get(`profile/status/${userId}`)
}

ProfileAPI.prototype.putProfileStatus = function(statusObj) {
    return this.put(`profile/status`, statusObj)
}

export const profileAPI = new ProfileAPI()
