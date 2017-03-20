jQuery *Screwed*
================

jQuery JavaScript library made using only six different characters: `!` `(` `)` `+` `[` `]`

Usage
-----

You can use jQuery Screwed anywhere in your code like the regular jQuery.

```html
<script src="jquery-3.2.1.screwed.js"></script>
```

```html
<script>
$(function(){
    alert("You are using jQuery Screwed!");
});
</script>
```

Creation
--------

jQuery Screwed was created with [JScrewIt](https://github.com/fasttime/JScrewIt).
Below are the steps to recreate it manually.

* Install [Node.js](http://nodejs.org) if you haven't done so yet.
* Install JScrewIt: run in the command line<br>
  `$ npm install -g jscrewit`
* Download jQuery—current stable version is 3.2.1: http://code.jquery.com/jquery-3.2.1.min.js
* Replace path names as appropriate and run<br>
  `$ node jscrewit -ct -f BROWSER path/to/source/jquery-3.2.1.min.js
  path/to/dest/jquery-3.2.1.screwed.js`

Browser Support
---------------

jQuery Screwed supports all browsers also
[supported by jQuery 3.x](http://jquery.com/browser-support/).

Credits
-------

jQuery Screwed is based on [jQuery](https://github.com/jquery/jquery).
jQuery is Copyright jQuery Foundation and other contributors, and licensed under the MIT license.
