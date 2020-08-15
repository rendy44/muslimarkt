export default class Connector {
    baseUrl = 'http://muslimarkt.local';
    nameSpace = '/wp-json/muslimarkt/';

    constructor(endpoint, method, data) {
        // Set default method.
        if (!method) {
            method = 'get';
        }
        const args = 'get' !== method ? {
            method: method,
            body: JSON.stringify(data)
        } : {};
        return fetch(this.baseUrl + this.nameSpace + endpoint, args);
    }
}