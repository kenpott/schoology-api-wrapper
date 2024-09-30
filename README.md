# schoology-wrapper
*Currently haven't uploaded to npm*

A simple npm package to implement the [Schoology API](https://developers.schoology.com/api/) using javascript.

### Required dependencies:
```bash
npm i axios

```

### To install package:

```bash
# Using npm
npm install schoology-wrapper

# Using yarn
yarn add schoology-wrapper

# Using bun
bun add schoology-wrapper

```

# Usage:
```javascript
import SchoologyClient from 'schoology-wrapper';

const schoologyClient = new SchoologyClient(
    'consumer_key', 
    'consumer_secret' 
);

// Authorize
const authorizationUrl = await schoologyClient.getAuthorizationUrl();

// Retrieve Data
const courseData = await schoologyClient.getCourse('course_id')
```

This project was created using `bun init` in bun v1.1.28. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
