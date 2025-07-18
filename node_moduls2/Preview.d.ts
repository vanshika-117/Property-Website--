import { AuthorizationDocumentListInstance } from "twilio/lib/rest/preview/hosted_numbers/authorizationDocument";
import { HostedNumberOrderListInstance } from "twilio/lib/rest/preview/hosted_numbers/hostedNumberOrder";
import { AvailableAddOnListInstance } from "twilio/lib/rest/preview/marketplace/availableAddOn";
import { InstalledAddOnListInstance } from "twilio/lib/rest/preview/marketplace/installedAddOn";
import { CommandListInstance } from "twilio/lib/rest/preview/wireless/command";
import { RatePlanListInstance } from "twilio/lib/rest/preview/wireless/ratePlan";
import { SimListInstance } from "twilio/lib/rest/preview/wireless/sim";
import PreviewBase from "twilio/lib/rest/PreviewBase";
declare class Preview extends PreviewBase {
    /**
     * @deprecated - Use hosted_numbers.authorizationDocuments instead
     */
    get authorizationDocuments(): AuthorizationDocumentListInstance;
    /**
     * @deprecated - Use hosted_numbers.hostedNumberOrders instead
     */
    get hostedNumberOrders(): HostedNumberOrderListInstance;
    /**
     * @deprecated - Use marketplace.availableAddOns instead
     */
    get availableAddOns(): AvailableAddOnListInstance;
    /**
     * @deprecated - Use marketplace.installedAddOns instead
     */
    get installedAddOns(): InstalledAddOnListInstance;
    /**
     * @deprecated - Use wireless.commands instead
     */
    get commands(): CommandListInstance;
    /**
     * @deprecated - Use wireless.ratePlans instead
     */
    get ratePlans(): RatePlanListInstance;
    /**
     * @deprecated - Use wireless.sims instead
     */
    get sims(): SimListInstance;
}
export = Preview;
