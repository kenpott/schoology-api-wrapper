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
            "Cookie": `${name}=${value}`,
            "Accept": `application/json`
        }
    })
    return result.data
}

async function getCourses(name, value, site) {
    const result = await axios.request({
        method: "Get",
        url: `${site}/iapi2/site-navigation/courses`,
        headers: {
            "Cookie": `${name}=${value}`
        }
    })
    return result.data.data
}

async function getGroups(name, value, site) {
    const result = await axios.request({
        method: "Get",
        url: `${site}/iapi2/site-navigation/groups`,
        headers: {
            "Cookie": `${name}=${value}`
        }
    })
    return result.data.data
}

async function getMessages(name, value, site) {
    const result = await axios.request({
        method: "Get",
        url: `${site}/iapi2/site-navigation/messages`,
        headers: {
            "Cookie": `${name}=${value}`,
        }
    })
    return result.data
}

export {
    getUser,
    getNotifications,
    getCourses,
    getGroups,
    getMessages
}