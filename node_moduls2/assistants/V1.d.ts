import AssistantsBase from "twilio/lib/rest/AssistantsBase";
import Version from "twilio/lib/base/Version";
import { AssistantListInstance } from "twilio/lib/rest/assistants/v1/assistant";
import { KnowledgeListInstance } from "twilio/lib/rest/assistants/v1/knowledge";
import { PolicyListInstance } from "twilio/lib/rest/assistants/v1/policy";
import { SessionListInstance } from "twilio/lib/rest/assistants/v1/session";
import { ToolListInstance } from "twilio/lib/rest/assistants/v1/tool";
export default class V1 extends Version {
    /**
     * Initialize the V1 version of Assistants
     *
     * @param domain - The Twilio (Twilio.Assistants) domain
     */
    constructor(domain: AssistantsBase);
    /** assistants - { Twilio.Assistants.V1.AssistantListInstance } resource */
    protected _assistants?: AssistantListInstance;
    /** knowledge - { Twilio.Assistants.V1.KnowledgeListInstance } resource */
    protected _knowledge?: KnowledgeListInstance;
    /** policies - { Twilio.Assistants.V1.PolicyListInstance } resource */
    protected _policies?: PolicyListInstance;
    /** sessions - { Twilio.Assistants.V1.SessionListInstance } resource */
    protected _sessions?: SessionListInstance;
    /** tools - { Twilio.Assistants.V1.ToolListInstance } resource */
    protected _tools?: ToolListInstance;
    /** Getter for assistants resource */
    get assistants(): AssistantListInstance;
    /** Getter for knowledge resource */
    get knowledge(): KnowledgeListInstance;
    /** Getter for policies resource */
    get policies(): PolicyListInstance;
    /** Getter for sessions resource */
    get sessions(): SessionListInstance;
    /** Getter for tools resource */
    get tools(): ToolListInstance;
}
