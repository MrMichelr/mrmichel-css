var CleanCSS = require('clean-css');
const fs = require('fs');

var minify = new CleanCSS().minify(['./style/style.css'])

fs.writeFile('./style/style.min.css', content, err => {
    if (err) {
      console.error(err);
    }
    console.log('Done')
  });