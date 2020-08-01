import conf from '../global.config';

export default class Connector {
    baseUrl = conf.baseUr;
    nameSpace = '/wp-json/muslimarkt/';

    constructor(endpoint, isPost, data) {
        const args = isPost ? {
            method: 'post',
            body: JSON.stringify(data)
        } : {};
        return fetch(this.baseUrl + this.nameSpace + endpoint, args);
    }
}