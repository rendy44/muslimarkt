import Connector from "./connector.js";

export default class Education {
    static add(key, param) {
        return new Connector('education/' + key, 'post', param)
    }

    static get(key) {
        return new Connector('education/' + key, 'get')
    }

    static detail(slug, key) {
        return new Connector('education/' + slug + '/' + key, 'get')
    }

    static delete(slug, key) {
        return new Connector('education/' + slug + '/' + key, 'delete')
    }

    static update(slug, key, param) {
        return new Connector('education/' + slug + '/' + key, 'put', param)
    }
}