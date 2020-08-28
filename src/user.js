import Connector from "./connector.js";

export default class User {
    static add(param) {
        return new Connector('user', 'post', param)
    }

    static login(param) {
        return new Connector('login', 'post', param)
    }

    static detail(key) {
        return new Connector('user/'+ key, 'get')
    }

    static update(param) {
        return new Connector('user', 'put', param)
    }
}