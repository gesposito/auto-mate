Let's start a Grunt project from the scratch

Update npm, if needed
```
npm update -g npm
```

Init project by creating the 'package.json' file that will store its metadata with this wizard
```
npm init
```

Install grunt command-line interface globally (-g)
```
npm install -g grunt-cli
```

Create a 'Gruntfile.js' either by hand or with any of the available templates of 'grunt-init'
```
npm install -g grunt-init
```

Install the 'grunt' dependency on the project
```
npm install grunt --save-dev
```

Install Grunt plugins modules we specified into the Gruntfile
```
npm install
  grunt-contrib-jshint
  grunt-contrib-watch
  --save-dev
```

And now!
```
grunt
```
or
```
grunt watch
```
