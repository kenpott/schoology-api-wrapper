import { makeRequest } from "./authentication.js";

async function getCourse(course_id) {
    const result = await makeRequest(`/sections/${course_id}`, 'GET', this._getHeaders());
    return result;
}

export {
    getCourse,
}