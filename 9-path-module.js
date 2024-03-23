const path = require('path');
console.log(path.sep); // returns the separator for the current OS

//using the join method to join paths
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

//using the basename method to get the file name
const base = path.basename(filePath);
console.log(base);


const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);