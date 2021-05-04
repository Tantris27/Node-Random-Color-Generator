const randomColor = require('randomcolor');
const chalk = require('chalk');
const convert = require('color-convert');

if (process.argv[2] === undefined) {
  const colour = randomColor();
  console.log(
    chalk.hex(colour)(
      `##############################
##############################
##############################
#####                    #####
#####      ${colour}       #####
#####                    #####
##############################
##############################
##############################`,
    ),
  );
} else if (process.argv[3] === 'light') {
  const colour = convert.keyword.hex(process.argv[2]);
  console.log(
    chalk.bold.hex(colour)(`##############################
##############################
##############################
#####                    #####
#####      #${colour}       #####
#####                    #####
##############################
##############################
##############################`),
  );
} else if (process.argv[3] === 'dark') {
  const colour = convert.keyword.hex(process.argv[2]);
  console.log(
    chalk.dim.hex(colour)(`##############################
##############################
##############################
#####                    #####
#####      #${colour}       #####
#####                    #####
##############################
##############################
##############################`),
  );
} else if (chalk.keyword(process.argv[2])) {
  const colour = convert.keyword.hex(process.argv[2]);
  console.log(
    chalk.hex(colour)(`##############################
##############################
##############################
#####                    #####
#####      #${colour}       #####
#####                    #####
##############################
##############################
##############################`),
  );
}
