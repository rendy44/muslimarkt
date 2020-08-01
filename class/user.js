import Connector from "./connector.js";

export default class User {
    static add(param) {
        return new Connector('user', true, param)
    }
}