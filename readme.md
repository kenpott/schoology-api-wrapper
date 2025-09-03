# Schoology API Wrapper

[![npm version](https://img.shields.io/npm/v/schoology-api-wrapper.svg)](https://www.npmjs.com/package/schoology-api-wrapper)
[![License](https://img.shields.io/npm/l/schoology-api-wrapper.svg)](LICENSE)

A **TypeScript wrapper** for the Schoology API, providing easy access to courses, assignments, groups, and members. Supports **OAuth 1.0**, cookie-based access, or no-auth requests for public endpoints.

---

## Features

- Fetch courses, folders, assignments, updates, and members.
- Fetch groups, resources, and group members.
- Simple, promise-based API using **Axios**.
- TypeScript types for better developer experience.
- Ready to use as an **npm package**.

---

## Installation

```bash
# Using npm
npm install schoology-api-wrapper

# Using yarn
yarn add schoology-api-wrapper

---

## Usage

```javascript
import { Schoology } from "schoology-api-wrapper";

// Initialize with your API keys and domain
const sgy = new Schoology(
  "YOUR_CONSUMER_KEY",
  "YOUR_CONSUMER_SECRET",
  "lms.lausd.net"
);

// Get a course by ID
const course = await sgy.getCourse(12345);
console.log(course);

// Get assignments for a course
const assignments = await sgy.getCourseAssignments(12345);
console.log(assignments);

// Get a group and its members
const group = await sgy.getGroup(67890);
const members = await sgy.getGroupMembers(67890);
console.log(members);

---

## Methods

### Courses

- `getCourse(course_id: number): Promise<object>`  
  Get a single course by ID.

- `getCourseFolders(course_id: number): Promise<object>`  
  Get all folders in a course.

- `getCourseAssignments(course_id: number): Promise<object>`  
  Get all assignments in a course.

- `getCourseAssignment(course_id: number, assignment_id: number): Promise<object>`  
  Get a specific assignment in a course.

- `getCourseUpdates(course_id: number): Promise<object>`  
  Get updates for a course.

- `getCourseMembers(course_id: number): Promise<object>`  
  Get all members of a course.

- `getCourseMember(course_id: number, user_id: number): Promise<object>`  
  Get a specific member in a course.

### Groups

- `getGroup(group_id: number): Promise<object>`  
  Get a single group by ID.

- `getGroupMembers(group_id: number): Promise<object>`  
  Get all members of a group.

- `getGroupMember(group_id: number, user_id: number): Promise<object>`  
  Get a specific member in a group.

- `getGroupUpdates(group_id: number): Promise<object>`  
  Get updates for a group.

- `getGroupResources(group_id: number): Promise<object>`  
  Get resources for a group.

