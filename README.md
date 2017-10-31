clear
=====

Clear the terminal screen if possible now as a promise

Usage
-----

``` js
var clear = require('clear');
clear();


var clear = require('clear');
clear()
.then(() => {
  return 'All Clear!';
})
.catch((err) => {
  console.log('something went wrong =(');
  console.log(err);
});
```

Example
-------

![Node Clear](http://daveeddy.com/static/media/github/node-clear.gif)

### clear([bool])

You can optionally give clear an argument of `false` to prevent it from clearing the screen.
This will not remove anything from the screen, but instead move your cursor to
position 0,0.  Much like printing a `\r` instead of a `\n` to reset the current
line of output.

Installation
------------

    npm install clear-promise

ANSI Codes
----------

http://www.inwap.com/pdp10/ansicode.txt

License
-------

MIT
