import ChatBase from "twilio/lib/rest/ChatBase";
import Version from "twilio/lib/base/Version";
import { CredentialListInstance } from "twilio/lib/rest/chat/v1/credential";
import { ServiceListInstance } from "twilio/lib/rest/chat/v1/service";
export default class V1 extends Version {
    /**
     * Initialize the V1 version of Chat
     *
     * @param domain - The Twilio (Twilio.Chat) domain
     */
    constructor(domain: ChatBase);
    /** credentials - { Twilio.Chat.V1.CredentialListInstance } resource */
    protected _credentials?: CredentialListInstance;
    /** services - { Twilio.Chat.V1.ServiceListInstance } resource */
    protected _services?: ServiceListInstance;
    /** Getter for credentials resource */
    get credentials(): CredentialListInstance;
    /** Getter for services resource */
    get services(): ServiceListInstance;
}
