Let's dig into a typical Grunt workflow, usually related to Front-end/Web Development

Setup 'connect' in order to keep a server alive pointing at our static files (this can be used with [livereload](https://github.com/gruntjs/grunt-contrib-connect#livereload))
```
npm install -D grunt-contrib-connect
```

'aliases.js' has an alias for connect bound to the the default task, so just type
```
grunt
```

Let's use as a starting template one as Bootstrap's [Carousel example](https://github.com/twbs/bootstrap/tree/master/docs/examples/carousel).

We're going to use [Bower](http://bower.io/) in order to handle our dependencies
```
npm install -g bower
```

```
bower init
bower install -S jquery bootstrap
```

And now let's take care of the assets with some plugins
```
npm install -D grunt-preprocess
 grunt-contrib-clean
 grunt-contrib-copy
 grunt-contrib-concat
 grunt-contrib-uglify
 grunt-contrib-cssmin
 grunt-contrib-imagemin
 time-grunt
```

We're going to share some configuration between the tasks.
'load-grunt-config' exposes the 'data' object that lets us tweak the 'grunt.config'. We can later use these variables with Grunt template configuration as ```<%= varname %>```

We can now
```
grunt build
```
That will run the tasks in grunt/config in the order specified in 'aliases.js'
