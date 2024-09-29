import { makeRequest } from "./authentication.js";

async function getUser(user_id) {
    const result = await makeRequest(`/users/${user_id}`, 'GET', this._getHeaders());
    return result;
}

export {
    getUser,
}