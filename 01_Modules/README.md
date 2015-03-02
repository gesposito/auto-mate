Let's split Gruntifile tasks configuration into separate modules for a cleaner and more readable Gruntfile

Create a separate js for every task configuration, by wrapping it with ```module.exports``` and adding
```js
/*jslint node: true*/
'use strict';
```
at the top of each file or with the ```node: true``` option.

This will instruct 'jshint' that these are actually NodeJS modules and to not worry about NodeJS specific functions.

Edit the Gruntfile.js using the NodeJS's ```require()``` for every task configuration to be loaded.

Happy
```
grunt
```
