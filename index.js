var CleanCSS = require('clean-css');
const fs = require('fs');

var minify = new CleanCSS().minify(['./style/style.css'])

console.log (minify)

fs.writeFile('./style/style.min.css', minify.styles, err => {
    if (err) {
      console.error(err);
    }
    console.log('Done')
  });
