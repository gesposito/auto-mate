Here is one simple example of a day to day operation.
Let's assume we have a folder containing some images (in this example we're going to download them) and we need to process them in some way.

Let's install our new dependencies as usual
npm install -D grunt-http
npm install -D grunt-wget
npm install -D grunt-responsive-images
npm install -D grunt-contrib-imagemin
npm install -D grunt-contrib-compress

For our first part we're going to use the excellent SplashBase.co API.
With 'grunt-http' wrapping the NodeJS 'request' module we can actually query and use any public API.
Our API will simply expose a set of latest images as a JSON.

The tricky part kicks in now, our second task 'grunt-wget' will fetch images from the previous API, so it depends on the first one.
Grunt registers its tasks and initializes its configuration before running any of the given tasks, but our 'grunt-wget' will need to know which files to download at run time.
One solution is to tweak the task's configuration at runtime as shown in 'grunt-http' callback.

Other tasks are pretty much usual configuration.

Where to go from here?
This is a made-up workflow but some of these tasks may be included in your current setup, if you happen to use this flow also have a look at
https://github.com/dwightjack/grunt-nodemailer
https://github.com/kbremner/grunt-dropbox

I will try to set these up and update this repo eventually.
