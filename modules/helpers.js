import crypto from 'crypto';
import axios from 'axios';

const puppeteer = require('puppeteer')
const regedit = require('regedit');

async function getAuthorizationUrl() {
    const URL = `https://api.schoology.com/v1/oauth/request_token?oauth_consumer_key=${this.consumer_key}&oauth_timestamp=${Math.floor(Date.now() / 1000)}&oauth_signature_method=PLAINTEXT&oauth_version=1.0&oauth_nonce=${crypto.randomBytes(8).toString('hex')}&oauth_signature=${this.consumer_secret}%26`
    const response = await axios.get(URL);
        let result = response.data.match(/oauth_token=([^&]+)&oauth_token_secret=([^&]+)&xoauth_token_ttl=(\d+)/);
        let token = result[1];
        let token_secret = result[2];
        const URL2 = `${this.domain}oauth/authorize?oauth_consumer_key=${this.consumer_key}&oauth_token=${token}&oauth_token_secret=${token_secret}`
        return URL2;
    }

async function makeRequest(endpoint, method, headers) {
    const result = await axios.request({
        method: method.toUpperCase(),
        baseURL: 'https://api.schoology.com/v1',
        url: endpoint,
        headers: headers,
    })
    return result.data;
}

async function requestCookie(reason) {
    const path = await new Promise((resolve, reject) => {
        regedit.list('HKCU\\Software\\Microsoft\\Windows\\Shell\\Associations\\UrlAssociations\\http\\UserChoice', (err, result) => {
            if (err) return reject('Error reading registry: ' + err);
            const progId = result['HKCU\\Software\\Microsoft\\Windows\\Shell\\Associations\\UrlAssociations\\http\\UserChoice'].values.ProgId.value;
            regedit.list(`HKCR\\${progId}\\shell\\open\\command`, (err, result) => {
                if (err) return reject('Error reading registry: ' + err);
                const command = result[`HKCR\\${progId}\\shell\\open\\command`].values[''].value;
                const path = command.split('"')[1];
                resolve(path);
            })
        });
    });
    const site = prompt("Please enter your district's domain (Ex. https://lms.lausd.net).\n")
    console.log("You will be prompted to sign in. This is required to continue.")
    if (reason) console.log(`Reason ${reason}`)
    const browser = await puppeteer.launch({
        executablePath: path,
        headless: false
    });
    const page = await browser.newPage()
    await page.goto(site)
    await page.waitForFunction('document.title === "Home | Schoology"', {timeout: 9e9})
    const cookie = (await page.cookies())[0]
    await browser.close()
    return [cookie.name, cookie.value, site]
}

export {
    getAuthorizationUrl,
    makeRequest,
    requestCookie
}