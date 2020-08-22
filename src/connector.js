import axios from 'axios';

export default class Connector {
    baseUrl = 'http://muslimarkt.local';
    nameSpace = '/wp-json/muslimarkt/';

    constructor(endpoint, method, data = []) {
        const apiUrl = this.baseUrl + this.nameSpace;
        switch (method) {
            case 'post':
                return axios.post(apiUrl + endpoint, data)
            case 'put':
                return axios.put(apiUrl + endpoint, data)
            case 'delete':
                return axios.delete(apiUrl + endpoint)
            default:
                return axios.get(apiUrl + endpoint)
        }
    }
}