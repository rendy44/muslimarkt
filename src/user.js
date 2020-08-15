import Connector from "./connector.js";

export default class User {
    static add(param) {
        return new Connector('user', 'post', param)
    }

    static login(param) {
        return new Connector('login', 'post', param)
    }

    static account(param) {
        return new Connector('account', 'post', param)
    }

    static update(param) {
        return new Connector('user', 'put', param)
    }
}