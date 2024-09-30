import crypto from 'crypto';
import axios from 'axios';

async function getAuthorizationUrl() {
    const URL = `https://api.schoology.com/v1/oauth/request_token?oauth_consumer_key=${this.consumer_key}&oauth_timestamp=${Math.floor(Date.now() / 1000)}&oauth_signature_method=PLAINTEXT&oauth_version=1.0&oauth_nonce=${crypto.randomBytes(8).toString('hex')}&oauth_signature=${this.consumer_secret}%26`
    const response = await axios.get(URL);
        let result = response.data.match(/oauth_token=([^&]+)&oauth_token_secret=([^&]+)&xoauth_token_ttl=(\d+)/);
        let token = result[1];
        let token_secret = result[2];
        const URL2 = `${this.domain}oauth/authorize?oauth_consumer_key=${this.consumer_key}&oauth_token=${token}&oauth_token_secret=${token_secret}`
        return URL2;
    }

async function makeRequest(endpoint, method, headers) {
    const result = await axios.request({
        method: method.toUpperCase(),
        baseURL: 'https://api.schoology.com/v1',
        url: endpoint,
        headers: headers,
    })
    return result.data;
}

export {
    getAuthorizationUrl,
    makeRequest,
}