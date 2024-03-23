//npm --version
//npm init
//npm install express --save
//npm install body-parser --save
//npm install mongoose --save
//npm install ejs --save
//npm install express-session --save
//npm install passport --save

//npm init -y //to create package.json file
//npm i <package-name> --save //to install package and save it in package.json file
const _ = require('lodash');
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
