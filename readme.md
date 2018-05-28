# NewMotion Programming Assignment for frontend

## Introduction

This programming assignment is about setting up a very basic customer-facing application on a frontend platform. Consider this as a proof of concept application, but make sure you work as 'nice' as possible.
Besides the quality of the code, we will also evaluate the work in terms of how it is easy to interact with and beautiful to look at. It's also really important that the project is easy to run from a development machine.

## Story 1: as a customer, I want to be able to login

At NewMotion we've setup an OAuth 2 server to handle authentication. For this user story you're supposed to use the _resource owner credentials grant_, which means that the app will ask the customer for its username (in our case, email address) and password and will exchange that for an _access token_.

The customer should be presented with a login screen when opening  the app. When the customer successfully logs in, his name should appear somewhere to welcome him.

### Technical details

Our OAuth-server (test setup) lives on `https://api.test.thenewmotion.com/oauth2/access_token`. An example request for an access token looks like this:

```
curl -X POST "https://api.test.thenewmotion.com/oauth2/access_token" -i \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -H "Authorization: Basic dGVzdF9jbGllbnRfaWQ6dGVzdF9jbGllbnRfc2VjcmV0=" \
  --data "grant_type=password&username={user}&password={password}"
```

You can use the username **programming-assignment@newmotion.com** with password **Zea2E5RA**.

Which will, if successful, respond with:

```
{
    "token_type": "Bearer",
    "access_token": "ZThkYsdQ...",
    "expires_in": 3600,
    "refresh_token": "ZGM3OweW..."
}
```

When you've obtained an access token, you can use it to get basic information about the customer:

```
curl -X GET "https://api.test.thenewmotion.com/v1/me" -i \
  -H "Authorization: Bearer {accessToken}"
```

## Story 2: as a logged in customer, I want to see a map with charge points

If you know our main app ('NewMotion' in the app store), you know the main functionality is to show charge points on a map. For this assignment, we're **not** interested in clustering, different icons or actually clicking on an icon to open charge point information, we only want to show charge points on a map based on the provided sample data.

After the user is successfully logged in we want to present him with a map with charge points. Attached is `sample-json-chargepoints.json` which contains information about some random charge points in JSON format, it mirrors the output of our actual _charge point API_. Use the coordinates that are in the JSON to show a pin for each charge point on the location. The user should be able to zoom and pan around in the map.

In case you encounter an error or have a question about the requirements, you can send an email to programming-assignment@newmotion.com.

Please submit your finished assignment to programming-assignment@thenewmotion.com (including the source files).

Good luck!
