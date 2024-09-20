const axios = require('axios');
const crypto = require('crypto');

class SchoologyApi {
  constructor(key, secret, domain) {
    this.key = key;
    this.secret = secret;
    this.domain = domain;
    this.baseURL = `https://${domain}/api/v1/`; // Adjust the base URL as needed
  }

  generateOAuthHeaders(method, endpoint, data = null) {
    const oauthTimestamp = Math.floor(Date.now() / 1000);
    const oauthNonce = crypto.randomBytes(16).toString('hex');
    
    const requestData = {
      url: `${this.baseURL}${endpoint}`,
      method: method,
      data: data,
      params: {
        oauth_consumer_key: this.key,
        oauth_timestamp: oauthTimestamp,
        oauth_nonce: oauthNonce,
        oauth_signature_method: 'HMAC-SHA1',
        oauth_version: '1.0',
      },
    };

    const signatureBaseString = this.createSignatureBaseString(requestData);
    const oauthSignature = this.signRequest(signatureBaseString);

    return {
      Authorization: `OAuth oauth_consumer_key="${this.key}", oauth_nonce="${oauthNonce}", oauth_signature="${encodeURIComponent(oauthSignature)}", oauth_signature_method="HMAC-SHA1", oauth_timestamp="${oauthTimestamp}", oauth_version="1.0"`,
    };
  }

  createSignatureBaseString(requestData) {
    // Create the base string for signing
    const params = Object.entries(requestData.params)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');
    
    return `${requestData.method.toUpperCase()}&${encodeURIComponent(requestData.url)}&${encodeURIComponent(params)}`;
  }

  signRequest(baseString) {
    const signingKey = `${encodeURIComponent(this.secret)}&`;
    return crypto.createHmac('sha1', signingKey).update(baseString).digest('base64');
  }

  async makeRequest(endpoint, method, data = null) {
    const headers = this.generateOAuthHeaders(method, endpoint, data);
    
    try {
      const response = await axios({
        method: method,
        url: `${this.baseURL}${endpoint}`,
        data: data,
        headers: headers,
      });
      return response.data;
    } catch (error) {
      throw new Error(`Error making request: ${error.response ? error.response.data : error.message}`);
    }
  }
}

// Example usage
const key = 'efe5a543948026772946115c316323cd05e443b00';
const secret = 'e9dc645bf33230645546a37fc9d80348';
const domain = 'lms.lausd.net';

const schoology = new SchoologyApi(key, secret, domain);
schoology.makeRequest('user/66574423', 'GET')
  .then(data => console.log('User Data:', data))
  .catch(error => console.error(error));


