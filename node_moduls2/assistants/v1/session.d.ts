/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "twilio/lib/base/Page";
import Response from "twilio/lib/http/response";
import V1 from "twilio/lib/rest/assistants/V1";
import { MessageListInstance } from "twilio/lib/rest/assistants/v1/session/message";
/**
 * Options to pass to each
 */
export interface SessionListInstanceEachOptions {
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Function to process each record. If this and a positional callback are passed, this one will be used */
    callback?: (item: SessionInstance, done: (err?: Error) => void) => void;
    /** Function to be called upon completion of streaming */
    done?: Function;
    /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to list
 */
export interface SessionListInstanceOptions {
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to page
 */
export interface SessionListInstancePageOptions {
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Page Number, this value is simply for client state */
    pageNumber?: number;
    /** PageToken provided by the API */
    pageToken?: string;
}
export interface SessionContext {
    messages: MessageListInstance;
    /**
     * Fetch a SessionInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed SessionInstance
     */
    fetch(callback?: (error: Error | null, item?: SessionInstance) => any): Promise<SessionInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SessionContextSolution {
    id: string;
}
export declare class SessionContextImpl implements SessionContext {
    protected _version: V1;
    protected _solution: SessionContextSolution;
    protected _uri: string;
    protected _messages?: MessageListInstance;
    constructor(_version: V1, id: string);
    get messages(): MessageListInstance;
    fetch(callback?: (error: Error | null, item?: SessionInstance) => any): Promise<SessionInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): SessionContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface SessionPayload extends TwilioResponsePayload {
    sessions: SessionResource[];
}
interface SessionResource {
    id: string;
    account_sid: string;
    assistant_id: string;
    verified: boolean;
    identity: string;
    date_created: Date;
    date_updated: Date;
}
export declare class SessionInstance {
    protected _version: V1;
    protected _solution: SessionContextSolution;
    protected _context?: SessionContext;
    constructor(_version: V1, payload: SessionResource, id?: string);
    /**
     * The Session ID.
     */
    id: string;
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Session resource.
     */
    accountSid: string;
    /**
     * The Assistant ID.
     */
    assistantId: string;
    /**
     * True if the session is verified.
     */
    verified: boolean;
    /**
     * The unique identity of user for the session.
     */
    identity: string;
    /**
     * The date and time in GMT when the Session was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated: Date;
    /**
     * The date and time in GMT when the Session was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated: Date;
    private get _proxy();
    /**
     * Fetch a SessionInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed SessionInstance
     */
    fetch(callback?: (error: Error | null, item?: SessionInstance) => any): Promise<SessionInstance>;
    /**
     * Access the messages.
     */
    messages(): MessageListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        id: string;
        accountSid: string;
        assistantId: string;
        verified: boolean;
        identity: string;
        dateCreated: Date;
        dateUpdated: Date;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface SessionSolution {
}
export interface SessionListInstance {
    _version: V1;
    _solution: SessionSolution;
    _uri: string;
    (id: string): SessionContext;
    get(id: string): SessionContext;
    /**
     * Streams SessionInstance records from the API.
     *
     * This operation lazily loads records as efficiently as possible until the limit
     * is reached.
     *
     * The results are passed into the callback function, so this operation is memory
     * efficient.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SessionListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(callback?: (item: SessionInstance, done: (err?: Error) => void) => void): void;
    each(params: SessionListInstanceEachOptions, callback?: (item: SessionInstance, done: (err?: Error) => void) => void): void;
    /**
     * Retrieve a single target page of SessionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl: string, callback?: (error: Error | null, items: SessionPage) => any): Promise<SessionPage>;
    /**
     * Lists SessionInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SessionListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: SessionInstance[]) => any): Promise<SessionInstance[]>;
    list(params: SessionListInstanceOptions, callback?: (error: Error | null, items: SessionInstance[]) => any): Promise<SessionInstance[]>;
    /**
     * Retrieve a single page of SessionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SessionListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: SessionPage) => any): Promise<SessionPage>;
    page(params: SessionListInstancePageOptions, callback?: (error: Error | null, items: SessionPage) => any): Promise<SessionPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function SessionListInstance(version: V1): SessionListInstance;
export declare class SessionPage extends Page<V1, SessionPayload, SessionResource, SessionInstance> {
    /**
     * Initialize the SessionPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: SessionSolution);
    /**
     * Build an instance of SessionInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: SessionResource): SessionInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
