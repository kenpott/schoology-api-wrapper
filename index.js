import crypto from 'crypto';
import * as authMethods from './modules/helpers.js';
import * as coursesMethods from './modules/courses.js';
import * as userMethods from './modules/user.js';
import * as groupMethods from './modules/groups.js';

class SchoologyClient {
    constructor(consumer_key, consumer_secret, domain) {
        this.consumer_key = consumer_key;
        this.consumer_secret = consumer_secret;
        this.domain = domain;

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

    async getAuthorizationUrl() {
        authMethods.getAuthorizationUrl(this.consumer_key, this.consumer_secret);
    }
    async makeRequest(endpoint, method) {
        authMethods.getAuthorizationUrl(endpoint, method, this._getHeaders);
    }
    async requestCookie(reason) {
        authMethods.requestCookie(reason);
    }
    async getCourse(course_id) {
        coursesMethods.getCourse(course_id, this._getHeaders);
    }
    async getCourseMembers(course_id) {
        coursesMethods.getCourseMembers(course_id, this._getHeaders);
    }
    async getCourseMember(course_id, user_id) {
        coursesMethods.getCourseMember(course_id, user_id, this._getHeaders);
    }
    async getCourseFolders(course_id) {
        coursesMethods.getCourseFolders(course_id, this._getHeaders);
    }
    async getCourseAssignments(course_id) {
        coursesMethods.getCourseAssignments(course_id, this._getHeaders);
    }
    async getCourseAssignment(course_id, assignment_id) {
        coursesMethods.getCourseAssignment(course_id, assignment_id, this._getHeaders);
    }
    async getCourseUpdates(course_id) {
        coursesMethods.getCourseUpdates(course_id, this._getHeaders);
    }
    async getGroup(group_id) {
        coursesMethods.getGroup(group_id, this._getHeaders);
    }
    async getGroupMembers(course_id) {
        coursesMethods.getCourseMembers(course_id, this._getHeaders);
    }
    async getGroupMember(course_id, user_id) {
        coursesMethods.getCourseMember(course_id, user_id, this._getHeaders);
    }
    async getGroupUpdates(course_id) {
        coursesMethods.getGroupUpdates(course_id, this._getHeaders);
    }
    async getGroupResources(course_id) {
        coursesMethods.getGroupResources(course_id, this._getHeaders);
    }
    async getUser(user_id) {
        coursesMethods.getCourse(user_id, this._getHeaders);
    }
    async getNotifications(name, value, site) {
        userMethods.getNotifications(name, value, site);
    }
    async getCourses(name, value, site) {
        userMethods.getCourses(name, value, site);
    }
    async getGroups(name, value, site) {
        userMethods.getGroups(name, value, site);
    }
    async getMessages(name, value, site) {
        userMethods.getMessages(name, value, site);
    }
}

export default SchoologyClient;
