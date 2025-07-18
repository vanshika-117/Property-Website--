"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const Domain_1 = __importDefault(require("../base/Domain"));
const V1_1 = __importDefault(require("./messaging/V1"));
const V2_1 = __importDefault(require("./messaging/V2"));
class MessagingBase extends Domain_1.default {
    /**
     * Initialize messaging domain
     *
     * @param twilio - The twilio client
     */
    constructor(twilio) {
        super(twilio, "https://messaging.twilio.com");
    }
    get v1() {
        this._v1 = this._v1 || new V1_1.default(this);
        return this._v1;
    }
    get v2() {
        this._v2 = this._v2 || new V2_1.default(this);
        return this._v2;
    }
}
module.exports = MessagingBase;
