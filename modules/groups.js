import { makeRequest } from "./authentication.js";

async function getGroup(group_id) {
    const result = await makeRequest(`/groups/${group_id}`, 'GET', this._getHeaders());
    return result;
}

async function getGroupMembers(group_id) {
    const result = await makeRequest(`/groups/${group_id}/enrollments?start=0&limit=50`, 'GET', this._getHeaders());
    return result;
}

async function getGroupMember(group_id, user_id) {
    const result = await makeRequest(`/groups/${group_id}/enrollments/${user_id}`, 'GET', this._getHeaders());
    return result;
}

async function getGroupUpdates(group_id) {
    const result = await makeRequest(`/groups/${group_id}/updates`, 'GET', this._getHeaders());
    return result;
}

async function getGroupResources(group_id) {
    const result = await makeRequest(`/groups/${group_id}/resources`, 'GET', this._getHeaders());
    return result;
}

export {
    getGroup,
    getGroupMembers,
    getGroupMember,
    getGroupUpdates,
    getGroupResources,
}