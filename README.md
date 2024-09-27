# schoology-wrapper

A simple npm package to implement the Schoology API.

### Required dependencies:
```bash
npm i [deps]
```

### To install package:

```bash
bun install [package-name]
```

# Usage:
```bash
import * from '[package-name]';

const schoologyClient = new Schoology{
    consumer_key = '',
    consumer_secret = '',
    domain = '',
};
```
### 2-legged
```bash
// Obtain the authorization URL (typically not needed in 2-legged OAuth).
const url = schoologyClient.getAuthorizationUrl();
// Direct user to the authorization URL if needed.

// Call any SchoologyClient methods:
const assignments = schoologyClient.getAssignments(courseId);
    .then(response => {
        console.log('Assignments:', response);
    })
```

### 3-legged
```bash

```

This project was created using `bun init` in bun v1.1.28. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
