const randomColor = require('randomcolor');
const chalk = require('chalk');

let colour = randomColor();
const str = `##############################
##############################
##############################
#####                    #####
#####      ${colour}       #####
#####                    #####
##############################
##############################
##############################`;

if (!process.argv[2]) {
  console.log(chalk.hex(colour)(str));
} else if (process.argv[3] === 'light') {
  colour = randomColor({
    luminosity: 'light',
    hue: process.argv[2],
  });
  console.log(chalk.hex(colour)(str));
} else if (process.argv[3] === 'dark') {
  colour = randomColor({
    luminosity: 'dark',
    hue: process.argv[2],
  });
  console.log(chalk.hex(colour)(str));
} else if (process.argv[2]) {
  colour = randomColor({
    luminosity: 'random',
    hue: process.argv[2],
  });
  console.log(chalk.hex(colour)(str));
}
