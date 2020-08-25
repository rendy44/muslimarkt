import Connector from "./connector.js";

export default class Experience {
    static add(param) {
        return new Connector('user', 'post', param)
    }

    static login(param) {
        return new Connector('login', 'post', param)
    }

    static get(key) {
        return new Connector('experience?key='+ key, 'get')
    }

    static update(param) {
        return new Connector('user', 'put', param)
    }
}