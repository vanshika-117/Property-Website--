import { CustomerProfilesListInstance } from "twilio/lib/rest/trusthub/v1/customerProfiles";
import { EndUserListInstance } from "twilio/lib/rest/trusthub/v1/endUser";
import { EndUserTypeListInstance } from "twilio/lib/rest/trusthub/v1/endUserType";
import { PoliciesListInstance } from "twilio/lib/rest/trusthub/v1/policies";
import { SupportingDocumentListInstance } from "twilio/lib/rest/trusthub/v1/supportingDocument";
import { SupportingDocumentTypeListInstance } from "twilio/lib/rest/trusthub/v1/supportingDocumentType";
import { TrustProductsListInstance } from "twilio/lib/rest/trusthub/v1/trustProducts";
import TrusthubBase from "twilio/lib/rest/TrusthubBase";
declare class Trusthub extends TrusthubBase {
    /**
     * @deprecated - Use v1.customerProfiles instead
     */
    get customerProfiles(): CustomerProfilesListInstance;
    /**
     * @deprecated - Use v1.endUsers instead
     */
    get endUsers(): EndUserListInstance;
    /**
     * @deprecated - Use v1.endUserTypes instead
     */
    get endUserTypes(): EndUserTypeListInstance;
    /**
     * @deprecated - Use v1.policies instead
     */
    get policies(): PoliciesListInstance;
    /**
     * @deprecated - Use v1.supportingDocuments instead
     */
    get supportingDocuments(): SupportingDocumentListInstance;
    /**
     * @deprecated - Use v1.supportingDocumentTypes instead
     */
    get supportingDocumentTypes(): SupportingDocumentTypeListInstance;
    /**
     * @deprecated - Use v1.trustProducts instead
     */
    get trustProducts(): TrustProductsListInstance;
}
export = Trusthub;
