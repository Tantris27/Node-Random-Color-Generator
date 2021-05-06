const randomColor = require('randomcolor');
const chalk = require('chalk');

const colour = randomColor({
  luminosity: process.argv[3],
  hue: process.argv[2],
});
const str = `##############################
##############################
##############################
#####                    #####
#####      ${colour}       #####
#####                    #####
##############################
##############################
##############################`;

console.log(chalk.bold.hex(colour)(str));
