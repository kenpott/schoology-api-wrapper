# schoology-api-wrapper
A simple npm package to implement the [Schoology API](https://developers.schoology.com/api/) using javascript. If you would like to learn how the schoology API works feel free to check out my [guide](https://github.com/i-nek/Schoology-API-Guide/tree/main).
## Important Note

This package includes two methods of obtaining information using only the `consumer_key` and `conumer_secret` for public information only and the user's cookie for more private information.

### Access Limitations
- If you decide on the method with the `consumer_key` and `consumer_secret` it can only access data that is available through the Schoology API using the provided keys. This means functionalities are limited to what is publicly accessible or what your Schoology API credentials can retrieve without user-specific authentication.

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
## `consumer_key` and `consumer_secret`
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
User's cookie
```javascript
import SchoologyClient from 'schoology-wrapper';

const schoologyClient = new SchoologyClient(
    'consumer_key', 
    'consumer_secret',
    'domain', // example: https://lms.lausd.net/ 
);

// Retrieve Cookie
const data = await schoologyClient.requestCookie("reason");
// The requestCookie returns 3 values: the sidName, sidValue, site,
const notifications = await schoologyClient.getNotifications(data[1], data[2], data[3]);
console.log(notifications);
);
```

This project was created using `bun init` in bun v1.1.28. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
