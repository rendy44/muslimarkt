import Connector from "./connector.js";

export default class Experience {
    static add(key, param) {
        return new Connector('experience/' + key, 'post', param)
    }

    static get(key) {
        return new Connector('experience/' + key, 'get')
    }

    static detail(slug, key) {
        return new Connector('experience/' + slug + '/' + key, 'get')
    }

    static delete(slug, key) {
        return new Connector('experience/' + slug + '/' + key, 'delete')
    }

    static update(param) {
        return new Connector('user', 'put', param)
    }
}