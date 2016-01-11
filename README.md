jQuery *Screwed*
================

jQuery JavaScript library made using only six different characters: `!` `(` `)` `+` `[` `]`

Usage
-----

You can use jQuery Screwed anywhere in your code like the regular jQuery.

```html
<script src="jquery-2.2.0.screwed.js"></script>
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
* Install JScrewIt: run `npm install -g jscrewit`
* Download jQuery - current stable version is 2.2.0: http://code.jquery.com/jquery-2.2.0.min.js
* Replace path names as appropriate and run<br>
  `node jscrewit -ct -f SELF path/to/source/jquery-2.2.0.min.js
  path/to/dest/jquery-2.2.0.screwed.js`

Browser Support
---------------

jQuery Screwed supports all browsers also supported by jQuery 2.x, except for those not compatible
with JScrewIt.

The table below shows browser support of jQuery and jQuery Screwed.
Differences are marked in bold.

|                   |              jQuery 2.x             |      jQuery Screwed      |
|-------------------|:-----------------------------------:|:------------------------:|
| Chrome            |       (Current - 1) or Current      | (Current - 1) or Current |
| Internet Explorer |                  9+                 |            9+            |
| Firefox           |       (Current - 1) or Current      | (Current - 1) or Current |
| Safari            |               **5.1+**              |         **7.0+**         |
| Opera             | **12.1x**, (Current - 1) or Current | (Current - 1) or Current |
| iOS               |               **6.1+**              |         **7.1+**         |
| Android           |            **2.3**, 4.0+            |           4.0+           |

Credits
-------

jQuery Screwed is based on [jQuery](https://github.com/jquery/jquery).
jQuery is Copyright jQuery Foundation and other contributors, and licensed under the MIT license.
