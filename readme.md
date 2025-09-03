# Schoology API Wrapper

[![npm version](https://img.shields.io/npm/v/schoology-api-wrapper.svg)](https://www.npmjs.com/package/schoology-api-wrapper)
[![Node.js Version](https://img.shields.io/node/v/schoology-api-wrapper.svg)](https://nodejs.org/)
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

```ts
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
