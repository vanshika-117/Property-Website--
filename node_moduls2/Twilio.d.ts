import { Client, ClientOpts, RequestOpts } from "twilio/lib/base/BaseTwilio";
import Accounts from "twilio/lib/rest/Accounts";
import Api from "twilio/lib/rest/Api";
import Assistants from "twilio/lib/rest/Assistants";
import Bulkexports from "twilio/lib/rest/Bulkexports";
import Chat from "twilio/lib/rest/Chat";
import Content from "twilio/lib/rest/Content";
import Conversations from "twilio/lib/rest/Conversations";
import Events from "twilio/lib/rest/Events";
import FlexApi from "twilio/lib/rest/FlexApi";
import FrontlineApi from "twilio/lib/rest/FrontlineApi";
import PreviewIam from "twilio/lib/rest/PreviewIam";
import Iam from "twilio/lib/rest/Iam";
import Insights from "twilio/lib/rest/Insights";
import Intelligence from "twilio/lib/rest/Intelligence";
import IpMessaging from "twilio/lib/rest/IpMessaging";
import Knowledge from "twilio/lib/rest/Knowledge";
import Lookups from "twilio/lib/rest/Lookups";
import Marketplace from "twilio/lib/rest/Marketplace";
import Messaging from "twilio/lib/rest/Messaging";
import Microvisor from "twilio/lib/rest/Microvisor";
import Monitor from "twilio/lib/rest/Monitor";
import Notify from "twilio/lib/rest/Notify";
import Numbers from "twilio/lib/rest/Numbers";
import Oauth from "twilio/lib/rest/Oauth";
import Preview from "twilio/lib/rest/Preview";
import Pricing from "twilio/lib/rest/Pricing";
import Proxy from "twilio/lib/rest/Proxy";
import Routes from "twilio/lib/rest/Routes";
import Serverless from "twilio/lib/rest/Serverless";
import Studio from "twilio/lib/rest/Studio";
import Supersim from "twilio/lib/rest/Supersim";
import Sync from "twilio/lib/rest/Sync";
import Taskrouter from "twilio/lib/rest/Taskrouter";
import Trunking from "twilio/lib/rest/Trunking";
import Trusthub from "twilio/lib/rest/Trusthub";
import Verify from "twilio/lib/rest/Verify";
import Video from "twilio/lib/rest/Video";
import Voice from "twilio/lib/rest/Voice";
import Wireless from "twilio/lib/rest/Wireless";
import { AddressListInstance } from "twilio/lib/rest/api/v2010/account/address";
import { ApplicationListInstance } from "twilio/lib/rest/api/v2010/account/application";
import { AuthorizedConnectAppListInstance } from "twilio/lib/rest/api/v2010/account/authorizedConnectApp";
import { AvailablePhoneNumberCountryListInstance } from "twilio/lib/rest/api/v2010/account/availablePhoneNumberCountry";
import { BalanceListInstance } from "twilio/lib/rest/api/v2010/account/balance";
import { CallListInstance } from "twilio/lib/rest/api/v2010/account/call";
import { ConferenceListInstance } from "twilio/lib/rest/api/v2010/account/conference";
import { ConnectAppListInstance } from "twilio/lib/rest/api/v2010/account/connectApp";
import { IncomingPhoneNumberListInstance } from "twilio/lib/rest/api/v2010/account/incomingPhoneNumber";
import { KeyListInstance } from "twilio/lib/rest/api/v2010/account/key";
import { MessageListInstance } from "twilio/lib/rest/api/v2010/account/message";
import { NewKeyListInstance } from "twilio/lib/rest/api/v2010/account/newKey";
import { NewSigningKeyListInstance } from "twilio/lib/rest/api/v2010/account/newSigningKey";
import { NotificationListInstance } from "twilio/lib/rest/api/v2010/account/notification";
import { OutgoingCallerIdListInstance } from "twilio/lib/rest/api/v2010/account/outgoingCallerId";
import { QueueListInstance } from "twilio/lib/rest/api/v2010/account/queue";
import { RecordingListInstance } from "twilio/lib/rest/api/v2010/account/recording";
import { ShortCodeListInstance } from "twilio/lib/rest/api/v2010/account/shortCode";
import { SigningKeyListInstance } from "twilio/lib/rest/api/v2010/account/signingKey";
import { SipListInstance } from "twilio/lib/rest/api/v2010/account/sip";
import { TokenListInstance } from "twilio/lib/rest/api/v2010/account/token";
import { TranscriptionListInstance } from "twilio/lib/rest/api/v2010/account/transcription";
import { UsageListInstance } from "twilio/lib/rest/api/v2010/account/usage";
import { ValidationRequestListInstance } from "twilio/lib/rest/api/v2010/account/validationRequest";
/**
 * Twilio Client to interact with the Rest API
 */
declare class Twilio extends Client {
    /** (Twilio.Accounts) - accounts domain */
    _accounts?: Accounts;
    /** (Twilio.Api) - api domain */
    _api?: Api;
    /** (Twilio.Assistants) - assistants domain */
    _assistants?: Assistants;
    /** (Twilio.Bulkexports) - bulkexports domain */
    _bulkexports?: Bulkexports;
    /** (Twilio.Chat) - chat domain */
    _chat?: Chat;
    /** (Twilio.Content) - content domain */
    _content?: Content;
    /** (Twilio.Conversations) - conversations domain */
    _conversations?: Conversations;
    /** (Twilio.Events) - events domain */
    _events?: Events;
    /** (Twilio.FlexApi) - flexApi domain */
    _flexApi?: FlexApi;
    /** (Twilio.FrontlineApi) - frontlineApi domain */
    _frontlineApi?: FrontlineApi;
    /** (Twilio.PreviewIam) - previewIam domain */
    _previewIam?: PreviewIam;
    /** (Twilio.Iam) - iam domain */
    _iam?: Iam;
    /** (Twilio.Insights) - insights domain */
    _insights?: Insights;
    /** (Twilio.Intelligence) - intelligence domain */
    _intelligence?: Intelligence;
    /** (Twilio.IpMessaging) - ipMessaging domain */
    _ipMessaging?: IpMessaging;
    /** (Twilio.Knowledge) - knowledge domain */
    _knowledge?: Knowledge;
    /** (Twilio.Lookups) - lookups domain */
    _lookups?: Lookups;
    /** (Twilio.Marketplace) - marketplace domain */
    _marketplace?: Marketplace;
    /** (Twilio.Messaging) - messaging domain */
    _messaging?: Messaging;
    /** (Twilio.Microvisor) - microvisor domain */
    _microvisor?: Microvisor;
    /** (Twilio.Monitor) - monitor domain */
    _monitor?: Monitor;
    /** (Twilio.Notify) - notify domain */
    _notify?: Notify;
    /** (Twilio.Numbers) - numbers domain */
    _numbers?: Numbers;
    /** (Twilio.Oauth) - oauth domain */
    _oauth?: Oauth;
    /** (Twilio.Preview) - preview domain */
    _preview?: Preview;
    /** (Twilio.Pricing) - pricing domain */
    _pricing?: Pricing;
    /** (Twilio.Proxy) - proxy domain */
    _proxy?: Proxy;
    /** (Twilio.Routes) - routes domain */
    _routes?: Routes;
    /** (Twilio.Serverless) - serverless domain */
    _serverless?: Serverless;
    /** (Twilio.Studio) - studio domain */
    _studio?: Studio;
    /** (Twilio.Supersim) - supersim domain */
    _supersim?: Supersim;
    /** (Twilio.Sync) - sync domain */
    _sync?: Sync;
    /** (Twilio.Taskrouter) - taskrouter domain */
    _taskrouter?: Taskrouter;
    /** (Twilio.Trunking) - trunking domain */
    _trunking?: Trunking;
    /** (Twilio.Trusthub) - trusthub domain */
    _trusthub?: Trusthub;
    /** (Twilio.Verify) - verify domain */
    _verify?: Verify;
    /** (Twilio.Video) - video domain */
    _video?: Video;
    /** (Twilio.Voice) - voice domain */
    _voice?: Voice;
    /** (Twilio.Wireless) - wireless domain */
    _wireless?: Wireless;
    /**
     * Creates a new instance of Twilio Client
     *
     * @param username -
     *          The username used for authentication. This is normally account sid, but if using key/secret auth will be the api key sid.
     * @param password -
     *          The password used for authentication. This is normally auth token, but if using key/secret auth will be the secret.
     * @param opts - The options argument
     *
     * @returns A new instance of Twilio client
     */
    constructor(username?: string, password?: string, opts?: ClientOpts);
    /** Getter for (Twilio.Accounts) domain */
    get accounts(): Accounts;
    /** Getter for (Twilio.Api) domain */
    get api(): Api;
    /** Getter for (Twilio.Assistants) domain */
    get assistants(): Assistants;
    /** Getter for (Twilio.Bulkexports) domain */
    get bulkexports(): Bulkexports;
    /** Getter for (Twilio.Chat) domain */
    get chat(): Chat;
    /** Getter for (Twilio.Content) domain */
    get content(): Content;
    /** Getter for (Twilio.Conversations) domain */
    get conversations(): Conversations;
    /** Getter for (Twilio.Events) domain */
    get events(): Events;
    /** Getter for (Twilio.FlexApi) domain */
    get flexApi(): FlexApi;
    /** Getter for (Twilio.FrontlineApi) domain */
    get frontlineApi(): FrontlineApi;
    /** Getter for (Twilio.PreviewIam) domain */
    get previewIam(): PreviewIam;
    /** Getter for (Twilio.Iam) domain */
    get iam(): Iam;
    /** Getter for (Twilio.Insights) domain */
    get insights(): Insights;
    /** Getter for (Twilio.Intelligence) domain */
    get intelligence(): Intelligence;
    /** Getter for (Twilio.IpMessaging) domain */
    get ipMessaging(): IpMessaging;
    /** Getter for (Twilio.Knowledge) domain */
    get knowledge(): Knowledge;
    /** Getter for (Twilio.Lookups) domain */
    get lookups(): Lookups;
    /** Getter for (Twilio.Marketplace) domain */
    get marketplace(): Marketplace;
    /** Getter for (Twilio.Messaging) domain */
    get messaging(): Messaging;
    /** Getter for (Twilio.Microvisor) domain */
    get microvisor(): Microvisor;
    /** Getter for (Twilio.Monitor) domain */
    get monitor(): Monitor;
    /** Getter for (Twilio.Notify) domain */
    get notify(): Notify;
    /** Getter for (Twilio.Numbers) domain */
    get numbers(): Numbers;
    /** Getter for (Twilio.Oauth) domain */
    get oauth(): Oauth;
    /** Getter for (Twilio.Preview) domain */
    get preview(): Preview;
    /** Getter for (Twilio.Pricing) domain */
    get pricing(): Pricing;
    /** Getter for (Twilio.Proxy) domain */
    get proxy(): Proxy;
    /** Getter for (Twilio.Routes) domain */
    get routes(): Routes;
    /** Getter for (Twilio.Serverless) domain */
    get serverless(): Serverless;
    /** Getter for (Twilio.Studio) domain */
    get studio(): Studio;
    /** Getter for (Twilio.Supersim) domain */
    get supersim(): Supersim;
    /** Getter for (Twilio.Sync) domain */
    get sync(): Sync;
    /** Getter for (Twilio.Taskrouter) domain */
    get taskrouter(): Taskrouter;
    /** Getter for (Twilio.Trunking) domain */
    get trunking(): Trunking;
    /** Getter for (Twilio.Trusthub) domain */
    get trusthub(): Trusthub;
    /** Getter for (Twilio.Verify) domain */
    get verify(): Verify;
    /** Getter for (Twilio.Video) domain */
    get video(): Video;
    /** Getter for (Twilio.Voice) domain */
    get voice(): Voice;
    /** Getter for (Twilio.Wireless) domain */
    get wireless(): Wireless;
    /** Getter for (Twilio.Api.V2010.AccountContext.AddressListInstance) addresses resource */
    get addresses(): AddressListInstance;
    /** Getter for (Twilio.Api.V2010.AccountContext.ApplicationListInstance) applications resource */
    get applications(): ApplicationListInstance;
    /** Getter for (Twilio.Api.V2010.AccountContext.AuthorizedConnectAppListInstance) authorizedConnectApps resource */
    get authorizedConnectApps(): AuthorizedConnectAppListInstance;
    /** Getter for (Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryListInstance) availablePhoneNumbers resource */
    get availablePhoneNumbers(): AvailablePhoneNumberCountryListInstance;
    /** Getter for (Twilio.Api.V2010.AccountContext.BalanceListInstance) balance resource */
    get balance(): BalanceListInstance;
    /** Getter for (Twilio.Api.V2010.AccountContext.CallListInstance) calls resource */
    get calls(): CallListInstance;
    /** Getter for (Twilio.Api.V2010.AccountContext.ConferenceListInstance) conferences resource */
    get conferences(): ConferenceListInstance;
    /** Getter for (Twilio.Api.V2010.AccountContext.ConnectAppListInstance) connectApps resource */
    get connectApps(): ConnectAppListInstance;
    /** Getter for (Twilio.Api.V2010.AccountContext.IncomingPhoneNumberListInstance) incomingPhoneNumbers resource */
    get incomingPhoneNumbers(): IncomingPhoneNumberListInstance;
    /** Getter for (Twilio.Api.V2010.AccountContext.KeyListInstance) keys resource */
    get keys(): KeyListInstance;
    /** Getter for (Twilio.Api.V2010.AccountContext.MessageListInstance) messages resource */
    get messages(): MessageListInstance;
    /** Getter for (Twilio.Api.V2010.AccountContext.NewKeyListInstance) newKeys resource */
    get newKeys(): NewKeyListInstance;
    /** Getter for (Twilio.Api.V2010.AccountContext.NewSigningKeyListInstance) newSigningKeys resource */
    get newSigningKeys(): NewSigningKeyListInstance;
    /** Getter for (Twilio.Api.V2010.AccountContext.NotificationListInstance) notifications resource */
    get notifications(): NotificationListInstance;
    /** Getter for (Twilio.Api.V2010.AccountContext.OutgoingCallerIdListInstance) outgoingCallerIds resource */
    get outgoingCallerIds(): OutgoingCallerIdListInstance;
    /** Getter for (Twilio.Api.V2010.AccountContext.QueueListInstance) queues resource */
    get queues(): QueueListInstance;
    /** Getter for (Twilio.Api.V2010.AccountContext.RecordingListInstance) recordings resource */
    get recordings(): RecordingListInstance;
    /** Getter for (Twilio.Api.V2010.AccountContext.ShortCodeListInstance) shortCodes resource */
    get shortCodes(): ShortCodeListInstance;
    /** Getter for (Twilio.Api.V2010.AccountContext.SigningKeyListInstance) signingKeys resource */
    get signingKeys(): SigningKeyListInstance;
    /** Getter for (Twilio.Api.V2010.AccountContext.SipListInstance) sip resource */
    get sip(): SipListInstance;
    /** Getter for (Twilio.Api.V2010.AccountContext.TokenListInstance) tokens resource */
    get tokens(): TokenListInstance;
    /** Getter for (Twilio.Api.V2010.AccountContext.TranscriptionListInstance) transcriptions resource */
    get transcriptions(): TranscriptionListInstance;
    /** Getter for (Twilio.Api.V2010.AccountContext.UsageListInstance) usage resource */
    get usage(): UsageListInstance;
    /** Getter for (Twilio.Api.V2010.AccountContext.ValidationRequestListInstance) validationRequests resource */
    get validationRequests(): ValidationRequestListInstance;
}
declare namespace Twilio {
    interface RequestClientOptions extends ClientOpts {
    }
    interface RequestOptions extends RequestOpts {
    }
}
export = Twilio;
