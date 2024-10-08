import { makeRequest } from "./helpers.js";
const axios = require("axios");

async function getUser(user_id) {
    const result = await makeRequest(`/users/${user_id}`, 'GET', this._getHeaders());
    return result;
}

async function getNotifications(name, value, site) {
    const result = await axios.request({
        method: "GET",
        url: `${site}/iapi2/site-navigation/notifications`,
        headers: {
            "Cookie": `${name}=${value}`
        }
    })
    return result.data
}

export {
    getUser,
    getNotifications
}