import Domain from "twilio/lib/base/Domain";
import V1 from "twilio/lib/rest/events/V1";
declare class EventsBase extends Domain {
    _v1?: V1;
    /**
     * Initialize events domain
     *
     * @param twilio - The twilio client
     */
    constructor(twilio: any);
    get v1(): V1;
}
export = EventsBase;
