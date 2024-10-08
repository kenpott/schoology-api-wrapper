# schoology-api-wrapper
A simple npm package to implement the [Schoology API](https://developers.schoology.com/api/) using javascript. If you would like to learn how the schoology API works feel free to check out my [guide](https://github.com/i-nek/Schoology-API-Guide/tree/main).
## Important Note

This package does not require user credentials or access tokens. It is designed to function solely with the provided consumer key and consumer secret. 

### Access Limitations
- Since the package operates without user credentials, it can only access data that is available through the Schoology API using the provided keys. This means functionalities are limited to what is publicly accessible or what your Schoology API credentials can retrieve without user-specific authentication.

Please ensure that you have the necessary permissions for the data you wish to access using your Schoology API credentials.

## To install package:

```bash
# Using npm
npm install schoology-api-wrapper

# Using yarn
yarn add schoology-api-wrapper

# Using bun
bun add schoology-api-wrapper

```

# Usage:
```javascript
import SchoologyClient from 'schoology-wrapper';

const schoologyClient = new SchoologyClient(
    'consumer_key', 
    'consumer_secret',
    'domain', // example: https://lms.lausd.net/ 
);

// Retrieve Data
const courseData = await schoologyClient.getCourse('course_id')
```

This project was created using `bun init` in bun v1.1.28. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
