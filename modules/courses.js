import { makeRequest } from "./helpers.js";

async function getCourse(course_id) {
    const result = await makeRequest(`/sections/${course_id}`, 'GET', this._getHeaders());
    return result;
}

async function getCourseFolders(course_id) {
    const result = await makeRequest(`/sections/${course_id}/folders`, 'GET', this._getHeaders());
    return result;
}

async function getCourseAssignments(course_id) {
    const result = await makeRequest(`/sections/${course_id}/assignments`, 'GET', this._getHeaders());
    return result;
}

async function getCourseAssignment(course_id, assignment_id) {
    const result = await makeRequest(`/sections/${course_id}/assignments/${assignment_id}`, 'GET', this._getHeaders());
    return result;
}

async function getCourseUpdates(course_id) {
    const result = await makeRequest(`/sections/${course_id}/updates`, 'GET', this._getHeaders());
    return result;
}

async function getCourseMembers(course_id) {
    const result = await makeRequest(`/sections/${course_id}/enrollments?start=0&limit=50`, 'GET', this._getHeaders());
    return result;
}

async function getCourseMember(course_id, user_id) {
    const result = await makeRequest(`/sections/${course_id}/enrollments/${user_id}`, 'GET', this._getHeaders());
    return result;
}

export {
    getCourse,
    getCourseFolders,
    getCourseAssignments,
    getCourseAssignment,
    getCourseUpdates,
    getCourseMembers,
    getCourseMember,
}