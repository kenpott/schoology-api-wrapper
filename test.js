/**
 *  1.  GET  | request_token skip if no user auth
 *  2.  GET  | authorize?oauth_token=<request_token>
 *  3.  POST | access_token
 *  4.  GET  | Any user info
 */

import axios from 'axios';
import crypto from 'crypto';

const Key = 'efe5a543948026772946115c316323cd05e443b00'; 
const Secret = 'e9dc645bf33230645546a37fc9d80348'; 

const oauthTimestamp = Math.floor(Date.now() / 1000);
const oauthNonce = crypto.randomBytes(8).toString('hex');

const URL = `https://api.schoology.com/v1/oauth/request_token?oauth_consumer_key=${Key}&oauth_timestamp=${oauthTimestamp}&oauth_signature_method=PLAINTEXT&oauth_version=1.0&oauth_nonce=${oauthNonce}&oauth_signature=${Secret}%26`;

axios.get(URL)
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error making request:', error.response ? error.response.data : error.message);
  });

  
