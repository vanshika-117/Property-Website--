import { Policy } from "twilio/lib/jwt/taskrouter/TaskRouterCapability";
/**
 * Build the default Policies for a worker
 *
 * @param version - TaskRouter version
 * @param workspaceSid - workspace sid
 * @param workerSid - worker sid
 * @returns list of Policies
 */
export declare function defaultWorkerPolicies(version: string, workspaceSid: string, workerSid: string): Policy[];
/**
 * Build the default Event Bridge Policies
 *
 * @param accountSid - account sid
 * @param channelId - channel id
 * @returns list of Policies
 */
export declare function defaultEventBridgePolicies(accountSid: string, channelId: string): Policy[];
/**
 * Generate TaskRouter workspace url
 *
 * @param workspaceSid - workspace sid or '**' for all workspaces
 * @returns generated url
 */
export declare function workspacesUrl(workspaceSid?: string): string;
/**
 * Generate TaskRouter task queue url
 *
 * @param workspaceSid - workspace sid
 * @param taskQueueSid - task queue sid or '**' for all task queues
 * @returns generated url
 */
export declare function taskQueuesUrl(workspaceSid: string, taskQueueSid?: string): string;
/**
 * Generate TaskRouter task url
 *
 * @param workspaceSid - workspace sid
 * @param taskSid - task sid or '**' for all tasks
 * @returns generated url
 */
export declare function tasksUrl(workspaceSid: string, taskSid?: string): string;
/**
 * Generate TaskRouter activity url
 *
 * @param workspaceSid - workspace sid
 * @param activitySid - activity sid or '**' for all activities
 * @returns generated url
 */
export declare function activitiesUrl(workspaceSid: string, activitySid?: string): string;
/**
 * Generate TaskRouter worker url
 *
 * @param workspaceSid - workspace sid
 * @param workerSid - worker sid or '**' for all workers
 * @returns generated url
 */
export declare function workersUrl(workspaceSid: string, workerSid?: string): string;
/**
 * Generate TaskRouter worker reservation url
 *
 * @param workspaceSid - workspace sid
 * @param workerSid - worker sid
 * @param reservationSid - reservation sid or '**' for all reservations
 * @returns generated url
 */
export declare function reservationsUrl(workspaceSid: string, workerSid: string, reservationSid?: string): string;
