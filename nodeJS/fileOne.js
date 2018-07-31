let foo = require('./fileTwo').foo;
foo();

console.log(require.resolve('./fileTwo'));  //gives the path from where if accessed