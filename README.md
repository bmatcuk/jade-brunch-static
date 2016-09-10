![Release](https://img.shields.io/npm/v/jade-brunch-static.svg)

# jade-brunch-static
Compile static jade files with brunch.

jade-brunch-static is a processor for [html-brunch-static](https://github.com/bmatcuk/html-brunch-static), a [brunch](http://brunch.io/) plugin designed to handle static html files. jade-brunch-static can convert jade files into static html files with html-brunch-static's support for layouts and partial views.

If you're looking for support for the latest version of jade, now called "pug", check out [pug-brunch-static](https://github.com/bmatcuk/pug-brunch-static).

## Installation
jade-brunch-static depends on [html-brunch-static](https://github.com/bmatcuk/html-brunch-static), which also depends on [brunch-static](https://github.com/bmatcuk/brunch-static), so, you will need to install all three. The recommended method is via npm:

```bash
npm install --save-dev brunch-static html-brunch-static jade-brunch-static
```

Or manually:

* Add `"brunch-static": "x.y.z"` to package.json
* Add `"html-brunch-static": "x.y.z"` to package.json
* Add `"jade-brunch-static": "x.y.z"` to package.json
* Run `npm install`
* Alternatively, you may use the latest git version with:
  * `"brunch-static": "git+ssh://git@github.com:bmatcuk/brunch-static"`
  * `"html-brunch-static": "git+ssh://git@github.com:bmatcuk/html-brunch-static"`
  * `"jade-brunch-static": "git+ssh://git@github.com:bmatcuk/jade-brunch-static"`

## Configuration
Add jade-brunch-static to your list of html-brunch-static processors:

```coffee
exports.config =
  ...
  plugins:
    static:
      processors: [
        require('html-brunch-static') {
          processors: [
            require('jade-brunch-static') {
              fileMatch: ...
              fileTransform: ((filename) -> ...)
              ...
            }
          ]
        }
      ]
```

Most options passed to jade-brunch-static are passed, verbatim, to [jade](https://github.com/jadejs/jade), with the exception of:

* **fileMatch** _(default: `/\.static\.jade$/`)_

  > _fileMatch_ is an [anymatch](https://github.com/es128/anymatch) that is used to determine which files will be handled by this processor. As an anymatch, it may be a string with globs, a regex, or a function that takes a filename and returns true if it should be handled, or false otherwise. The default will match files that end in `.static.jade`.

* **fileTransform** _(default: `(filename) -> filename.replace(/static\.jade$/, 'html')`)_

  > _fileTransform_ converts the input filename into an html filename. It takes a filename as input and returns the new filename with the html extension. If you set the _fileMatch_ property above, you'll probably need to set this option as well to ensure that your output files end with the html extension.

