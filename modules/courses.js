import { makeRequest } from "./authentication.js";

async function getCourse(course_id) {
    const result = await makeRequest(`/sections/${course_id}`, 'GET', this._getHeaders());
    return result;
}

async function getAssignments(course_id) {
    const result = await makeRequest(`/sections/${course_id}/assignments`, 'GET', this._getHeaders());
    return result;
}

export {
    getCourse,
    getAssignments,
}