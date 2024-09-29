import crypto from 'crypto';
import * as authMethods from './modules/authentication.js';
import * as coursesMethods from './modules/courses.js';

class SchoologyClient {
    constructor(consumer_key, consumer_secret) {
        this.consumer_key = consumer_key;
        this.consumer_secret = consumer_secret;
        this.headers = {
        }

        Object.assign(this,
            authMethods,
            coursesMethods,
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

/**
 * Returns the authorization link
 *
*/

    async getAuthorizationUrl() {
        return await authMethods.getAuthorizationUrl(this.consumer_key, this.consumer_secret);
    }

/**
 * @param {string} endpoint
 * @param {string} method
 *
*/
    async makeRequest(endpoint, method) {
        return await authMethods.makeRequest(endpoint, method);
    } 

/**
 * Returns information on the course
 * 
 * @param {number} course_id 
 *
*/

    async getCourse(course_id) {
        return await coursesMethods.getCourse(course_id, this._getHeaders());
    }
}

export default SchoologyClient;
