![trusted testers] (https://s3.amazonaws.com/uploads.hipchat.com/66105/460623/2szY20cWEjqxsQ6/bowery_logos%402x.png)

## Install
Bowery has a few prerequisites: [node.js](http://nodejs.org/), [Homebrew](http://brew.sh/), and [Git](https://help.github.com/articles/set-up-git). As long as you have those, you can install Bowery by running the following command in your Terminal:
```
curl download.bowery.io | sh
```

## Config
Bowery applications are comprised of services (e.g. web-client, database, cache, pubsub, etc.), the specifications of which are detailed in a bowery.json file located in the base of your project directory. Bowery current supports the following services: node.js, MongoDB, Redis, and MySQL.
```
{
  "web-client": {
    "type": "node", // the required software
    "path": "/Users/you/my-sample-app", // the absolute path to your files
  },
  "db": {
    "type": "mongo"
  },
  "cache": {
    "type": "redis",
    "config": "/path/to/conf" // any additional configuration
  }
}
```

## Connect
When you're within the directory of the project you're working on, simply run:
```
bowery connect
```
You'll be prompted to provide a license key, which is contained in the email you were sent. Within your terminal, Bowery will send the URL (`SERVICE.APPID.boweryapps.com`) that your project is running on. As you make changes to your project, they will be reflected instantly at that URL, and any logs your application produces will be streamed to the terminal.

## Shell Access
You can ssh into any bowery service by running:
```
bowery ssh <name>
```

## Environmental Variables
In order to communicate from one service to another, Bowery injects ip addresses as environmental variables. So the `web-client` service's ip address and port can be accessed at `$WEB_CLIENT_ADDR`. Spaces and dashes are converted to underscores and the name is uppercase.

## Support
Need help getting set up? Found a bug? Email us at team@bowery.io and we'll fix it right away.

We've completely rewritten Bowery from the ground up to be even better, and we hope you agree.