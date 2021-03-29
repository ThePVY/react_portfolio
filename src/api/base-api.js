import axios from "axios";

function BaseAPI() {
    const config = {
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            'API-KEY': '0f09df06-8158-4fd3-ab22-f5fb88226240'
        }
    }
    this.axios = axios.create(config)
}

BaseAPI.prototype.get = function(path) {
    return this.axios.get(path).then(({ data }) => data)
}

BaseAPI.prototype.post = function(path) {
    return this.axios.post(path, {}).then(({ data }) => data)
}

BaseAPI.prototype.delete = function(path) {
    return this.axios.delete(path).then(({ data }) => data)
}

export default BaseAPI