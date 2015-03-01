Starting from the previous workflow let's add some performance and vanity plugins.

First, using grunt-concurrent we can then execute multiple tasks in parallel
npm install --D grunt-concurrent

'uncss' instead will remove unused CSS from our production files
npm install --D grunt-uncss

We can configure our parallel tasks in concurrent.js config and change aliases.js accordingly.

And now we're ready for some vanity!
npm install --D grunt-notify

We can now
grunt build
or
grunt seq-build
to compare gains between parallel and sequential builds.
