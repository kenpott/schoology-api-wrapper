import crypto from 'crypto';
import * as authMethods from './modules/authentication.js';
import * as coursesMethods from './modules/courses.js';
import * as userMethods from './modules/user.js';
import * as groupMethods from './modules/groups.js';

class SchoologyClient {
    constructor(consumer_key, consumer_secret) {
        this.consumer_key = consumer_key;
        this.consumer_secret = consumer_secret;
        this.headers = {};
        
        Object.assign(this,
            authMethods,
            coursesMethods,
            userMethods,
            groupMethods,
        );
    }

    _getHeaders() {
        return {
            'Authorization': `OAuth realm="Schoology API",` +
                `oauth_consumer_key="${this.consumer_key}",` +
                `oauth_nonce="${crypto.randomBytes(8).toString('hex')}",` +
                `oauth_signature="${this.consumer_secret}%26",` +
                `oauth_signature_method="PLAINTEXT",` +
                `oauth_timestamp="${Math.floor(Date.now() / 1000)}",` +
                `oauth_version="1.0"`,
            'Content-Type': 'application/json'
        };
    }  

    async getUser(user_id) {
        return await userMethods.getUser(user_id, this._getHeaders());
    }

// ------------------------------------------------------------------- \\

    async getAuthorizationUrl() {
        return await authMethods.getAuthorizationUrl(this.consumer_key, this.consumer_secret);
    }

    async makeRequest(endpoint, method) {
        return await authMethods.makeRequest(endpoint, method);
    } 

// ------------------------------------------------------------------- \\

    async getCourse(course_id) {
        return await coursesMethods.getCourse(course_id, this._getHeaders());
    }

    async getFolders(course_id) {
        return await coursesMethods.getFolders(course_id, this._getHeaders());
    }

    async getAssignments(course_id) {
        return await coursesMethods.getAssignments(course_id, this._getHeaders());
    }

    async getAssignment(course_id, assignment_id) {
        return await coursesMethods.getAssignment(course_id, assignment_id, this._getHeaders());
    }

    async getUpdates(course_id) {
        return await coursesMethods.getUpdates(course_id, this._getHeaders());
    }

    async getCourseMembers(course_id) {
        return await coursesMethods.getCourseMembers(course_id, this._getHeaders());
    }

    async getCourseMember(course_id, user_id) {
        return await coursesMethods.getCourseMember(course_id, user_id, this._getHeaders());
    }

// ------------------------------------------------------------------- \\

    async getGroup(group_id) {
        return await groupMethods.getGroup(group_id, this._getHeaders());
    }

    async getGroupMembers(group_id) {
        return await groupMethods.getGroupMembers(group_id, this._getHeaders());
    }

    async getGroupMember(group_id, user_id) {
        return await groupMethods.getGroupMembers(group_id, user_id, this._getHeaders());
    }

    async getGroupUpdates(group_id) {
        return await groupMethods.getGroupUpdates(group_id, this._getHeaders());
    }

    async getGroupResources(group_id) {
        return await groupMethods.getGroupResources(group_id, this._getHeaders());
    }
}

export default SchoologyClient;
