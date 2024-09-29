import SchoologyClient from './index';

const schoologyClient = new SchoologyClient(
    '', // consumer_key
    '' // consumer_secret
);

async function authTest() {
    const authorizationUrl = await schoologyClient.getAuthorizationUrl();
    console.log(`AuthorizationUrl: ${authorizationUrl}`);
}

async function courseTest() {
    const courseData = await schoologyClient.getCourse(7354453829);
    console.log(`course Info: ${courseData}`);
}

courseTest()
 