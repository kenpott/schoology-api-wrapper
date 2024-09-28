import * as authMethods from './modules/authentication.js';
import * as coursesMethods from './modules/courses.js';

class SchoologyClient {
    constructor(consumer_key, consumer_secret, domain) {
        this.consumer_key = consumer_key;
        this.consumer_secret = consumer_secret;
        this.domain = domain;

        Object.assign(this,
            authMethods,
            coursesMethods,
        )
    }
}

export default SchoologyClient;