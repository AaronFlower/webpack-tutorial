const UglifyJS = require('uglify-es')

var result = UglifyJS.minify({"file1.js": "var a = function() {let foo = 123; console.log(foo);};"}, {
    sourceMap: {
        filename: "out.js",
        // url 换成 inline source Map 会附带到源代码中。
        url: "out.js.map" 
    }
});

console.log('result.code:')
console.log(result.code); // minified output
console.log('result.map:')
console.log(result.map); 