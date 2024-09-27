import oauth from "oauth";


const OAuth = require("oauth-1.0a");
const crypto = require("crypto");

class SchoologyClient {
  constructor(key, secret) {
    if (!key || !secret) {
      throw new Error("Key and secret are required to create an instance of SchoologyClient.");
    }
    this.key = key;
    this.secret = secret;
    this.baseURL = "https://api.schoology.com/v1/";

    // OAuth1 initialization using oauth-1.0a
    this.oauth = OAuth({
      consumer: { key: this.key, secret: this.secret },
      signature_method: "HMAC-SHA1",
      hash_function(base_string, key) {
        return crypto.createHmac("sha1", key).update(base_string).digest("base64");
      },
    });
  }

  // Rest of the class remains the same...
}


module.exports = SchoologyClient;