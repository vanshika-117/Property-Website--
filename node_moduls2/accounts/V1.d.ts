import AccountsBase from "twilio/lib/rest/AccountsBase";
import Version from "twilio/lib/base/Version";
import { AuthTokenPromotionListInstance } from "twilio/lib/rest/accounts/v1/authTokenPromotion";
import { BulkConsentsListInstance } from "twilio/lib/rest/accounts/v1/bulkConsents";
import { BulkContactsListInstance } from "twilio/lib/rest/accounts/v1/bulkContacts";
import { CredentialListInstance } from "twilio/lib/rest/accounts/v1/credential";
import { SafelistListInstance } from "twilio/lib/rest/accounts/v1/safelist";
import { SecondaryAuthTokenListInstance } from "twilio/lib/rest/accounts/v1/secondaryAuthToken";
export default class V1 extends Version {
    /**
     * Initialize the V1 version of Accounts
     *
     * @param domain - The Twilio (Twilio.Accounts) domain
     */
    constructor(domain: AccountsBase);
    /** authTokenPromotion - { Twilio.Accounts.V1.AuthTokenPromotionListInstance } resource */
    protected _authTokenPromotion?: AuthTokenPromotionListInstance;
    /** bulkConsents - { Twilio.Accounts.V1.BulkConsentsListInstance } resource */
    protected _bulkConsents?: BulkConsentsListInstance;
    /** bulkContacts - { Twilio.Accounts.V1.BulkContactsListInstance } resource */
    protected _bulkContacts?: BulkContactsListInstance;
    /** credentials - { Twilio.Accounts.V1.CredentialListInstance } resource */
    protected _credentials?: CredentialListInstance;
    /** safelist - { Twilio.Accounts.V1.SafelistListInstance } resource */
    protected _safelist?: SafelistListInstance;
    /** secondaryAuthToken - { Twilio.Accounts.V1.SecondaryAuthTokenListInstance } resource */
    protected _secondaryAuthToken?: SecondaryAuthTokenListInstance;
    /** Getter for authTokenPromotion resource */
    get authTokenPromotion(): AuthTokenPromotionListInstance;
    /** Getter for bulkConsents resource */
    get bulkConsents(): BulkConsentsListInstance;
    /** Getter for bulkContacts resource */
    get bulkContacts(): BulkContactsListInstance;
    /** Getter for credentials resource */
    get credentials(): CredentialListInstance;
    /** Getter for safelist resource */
    get safelist(): SafelistListInstance;
    /** Getter for secondaryAuthToken resource */
    get secondaryAuthToken(): SecondaryAuthTokenListInstance;
}
