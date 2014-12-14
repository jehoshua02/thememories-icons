# The Memories Icons

Home of the icons used in http://thememories.com website.

## reference

See live [reference](https://jehoshua02.github.io/thememories-icons/index.html).

## bower

```shell
bower install --save-dev jehoshua02/thememories-icons
```

## usage

Import into sass file.

```scss
@import 'bower_components/thememories-icons/dist/scss/styles';
```

## variables

### `$icon-font-path`

Path to the icon font files. Defaults to `../font`.

Your path to the font files depends upon your build process and how you process
bower files, such as using [main-bower-files](https://www.npmjs.com/package/main-bower-files)
to copy only the files you are using to where you need them.

For example, with the following directory structure:

```
+ my-project/
  + public/
    + bower_components/
      + thememories-icons/
        + dist/
          + font/
    + styles.css
  + scss/
    + styles.scss
```

The `$icon-font-path` could be set to either of the following:

__relative to styles.css__

```
$icon-font-path: 'bower_components/thememories-icons/dist/font';
```

__absolute to public directory__

```
$icon-font-path: '/bower_components/thememories-icons/dist/font';
```

---
__NOTE__: This variable must be set before importing the icon styles.
___
