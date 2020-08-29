import Connector from "./connector.js";

export default class User {
    static add(param) {
        return new Connector('register', 'post', param)
    }

    static login(param) {
        return new Connector('login', 'post', param)
    }

    static detail(key) {
        return new Connector('user/' + key, 'get')
    }

    static update(key, param) {
        return new Connector('user/' + key, 'put', param)
    }
}