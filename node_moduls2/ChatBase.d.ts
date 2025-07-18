import Domain from "twilio/lib/base/Domain";
import V1 from "twilio/lib/rest/chat/V1";
import V2 from "twilio/lib/rest/chat/V2";
import V3 from "twilio/lib/rest/chat/V3";
declare class ChatBase extends Domain {
    _v1?: V1;
    _v2?: V2;
    _v3?: V3;
    /**
     * Initialize chat domain
     *
     * @param twilio - The twilio client
     */
    constructor(twilio: any);
    get v1(): V1;
    get v2(): V2;
    get v3(): V3;
}
export = ChatBase;
