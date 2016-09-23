// require("!style!css!./style.css")
require("./style.css")
document.write('Hello webpack, it works fine!')
document.write('watch kidding!')
document.write(require('./content.js'))

cats = require('./cats.js')
console.log(cats)
/**
 * Webpack will analyze your entry file for dependencies to other files.
 * This files(called modules) are include in your bundle.js too.
 * Web will give each module a unique id and save all modules accessible by id in the bundle.js file.
 * Only the entry module is executed on startup. A small runtime provides the require function and executes the dependencies when requried.
 */
