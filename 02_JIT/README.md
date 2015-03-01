Let's automate the programmatic loading of Grunt plugins

npm install -D load-grunt-config

Configure your Gruntfile.js as such
https://github.com/firstandthird/load-grunt-config#example

Use the 'jitGrunt: true' option if you want the Grunt plugins to be loaded right when they're needed.

In our example we need to customize the configPath to let it point at our previously configured 'grunt/config' folder
configPath: path.join(process.cwd(), 'grunt/config')

Create an aliases.js if you want to register custom tasks

And now,
grunt

You can also run
grunt --config-debug
to check your computed configuration.
