jQuery *Screwed*
================

jQuery JavaScript library made using only six different characters: `!` `(` `)` `+` `[` `]`

Usage
-----

You can use jQuery Screwed anywhere in your code like the regular jQuery.

```html
<script src="jquery-3.0.0.screwed.js"></script>
```

```html
<script>
$(function(){
    alert("You are using jQuery Screwed!");
});
</script>
```

See the section [Browser Support](#browser-support) for information about supported browsers.

Creation
--------

jQuery Screwed was created with [JScrewIt](https://github.com/fasttime/JScrewIt).
Below are the steps to recreate it manually.

* Install [Node.js](http://nodejs.org) if you haven't done so yet.
* Install JScrewIt: run `$ npm install -g jscrewit`
* Download jQuery - current stable version is 3.0.0: http://code.jquery.com/jquery-3.0.0.min.js
* Replace path names as appropriate and run<br>
  `$ node jscrewit -ct -f ANY_DOCUMENT,ANY_WINDOW,HISTORY path/to/source/jquery-3.0.0.min.js
  path/to/dest/jquery-3.0.0.screwed.js`

Browser Support
---------------

jQuery Screwed supports all browsers also
[supported by jQuery 3.x](http://jquery.com/browser-support/), except for those not compatible with
JScrewIt.

The table below shows browser support of jQuery and jQuery Screwed.
Differences are marked in bold.

|                               |        jQuery 3.x        |      jQuery Screwed      |
|-------------------------------|:------------------------:|:------------------------:|
| Chrome, Edge, Firefox, Safari | (Current - 1) or Current | (Current - 1) or Current |
| Internet Explorer             |            9+            |            9+            |
| Opera                         |         Current          |         Current          |
| iOS                           |         **7.0+**         |         **7.1+**         |
| Android                       |           4.0+           |           4.0+           |

Credits
-------

jQuery Screwed is based on [jQuery](https://github.com/jquery/jquery).
jQuery is Copyright jQuery Foundation and other contributors, and licensed under the MIT license.
