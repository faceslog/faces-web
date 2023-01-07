const config = require("./config");
const axios = require('axios');

exports.verifyEmail = function (email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

exports.verifySubject = function (subject) {
  return subject && subject.length > 5;
}

exports.verifyMessage = function (message) {
  return message && message.length > 10;
}

exports.verifyCaptcha = async function (token) {
  try
  {
    const params = new URLSearchParams();
    params.append('response', token);
    params.append('secret', config.hCaptchaSecret);

    const options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }

    const response = await axios.post("https://hcaptcha.com/siteverify", params, options);
    /* RESPONSE FORMAT:
    {
      "success": true|false,     // is the passcode valid, and does it meet security criteria you specified, e.g. sitekey?
      "challenge_ts": timestamp, // timestamp of the challenge (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
      "hostname": string,        // the hostname of the site where the challenge was solved
      "credit": true|false,      // optional: whether the response will be credited
      "error-codes": [...]       // optional: any error codes
      "score": float,            // ENTERPRISE feature: a score denoting malicious activity.
      "score_reason": [...]      // ENTERPRISE feature: reason(s) for score.
    }
    */
    return response.data.success;
  }
  catch (err)
  {
    console.error(err);
    return false;
  }
}
