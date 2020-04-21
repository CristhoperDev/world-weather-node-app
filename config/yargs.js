const city = {
    alias: 'c',
    description: 'City address to get weather'
};

const argv = require('yargs')
    .options({
        city
    })
    .demandOption(['city'], 'Please provide direction argument to work with this tool')
    .help()
    .argv;

module.exports = {
    argv
}
