import BaseAPI from "./base-api"

function ProfileAPI() {
    
}

ProfileAPI.prototype = new BaseAPI()

ProfileAPI.prototype.getProfileData = function(userId) {
    return this.get(`profile/${userId}`)
}


export const profileAPI = new ProfileAPI()
