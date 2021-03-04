# jQuery *Screwed* · [![npm version][npm badge]][npm url]

jQuery JavaScript library made using only six different characters: `!` `(` `)` `+` `[` `]`

## Usage

You can use jQuery Screwed anywhere in your code like the regular jQuery.

```html
<script src="jquery-3.6.0.screwed.js"></script>
```

```html
<script>
$(function(){
    alert("You are using jQuery Screwed!");
});
</script>
```

## Hosting Services

The following is a list of URLs that can be used to serve jQuery Screwed with proper Content-Type
header.

### From npm

* https://cdn.jsdelivr.net/npm/jquery-screwed@3.6.0-screwed.1/jquery-3.6.0.screwed.js
* https://unpkg.com/jquery-screwed@3.6.0-screwed.1

### From GitHub

* https://cdn.jsdelivr.net/gh/fasttime/jquery-screwed@3.6.0-screwed.1/jquery-3.6.0.screwed.js
* https://cdn.staticaly.com/gh/fasttime/jquery-screwed/3.6.0-screwed.1/jquery-3.6.0.screwed.js
* https://gitcdn.xyz/repo/fasttime/jquery-screwed/3.6.0-screwed.1/jquery-3.6.0.screwed.js
* https://rawcdn.githack.com/fasttime/jquery-screwed/3.6.0-screwed.1/jquery-3.6.0.screwed.js

## Creation

jQuery Screwed was created with [JScrewIt](https://github.com/fasttime/JScrewIt).
Below are the steps to recreate it manually.

* Install the current version of [Node.js](https://nodejs.org) if you haven't done so yet.
* Install JScrewIt: run in the command line<br>
  `npm install -g jscrewit`
* Download jQuery—current stable version is 3.6.0: https://code.jquery.com/jquery-3.6.0.min.js
* Replace path names as appropriate and run<br>
  `node jscrewit -ct -f BROWSER path/to/source/jquery-3.6.0.min.js
  path/to/dest/jquery-3.6.0.screwed.js`

## Browser Support

jQuery Screwed supports all browsers also
[supported by jQuery 3.x](https://jquery.com/browser-support/).
Node.js is *not* supported.

## Credits

jQuery Screwed is based on [jQuery](https://github.com/jquery/jquery).
jQuery is Copyright JS Foundation and other contributors, and licensed under the MIT license.

[npm badge]: https://badge.fury.io/js/jquery-screwed.svg
[npm url]: https://www.npmjs.com/package/jquery-screwed
