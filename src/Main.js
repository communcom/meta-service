const core = require('cyberway-core-service');
const env = require('./env');
const Connector = require('./services/Connector');
const Cleaner = require('./services/Cleaner');
const { BasicMain, MongoDB } = core.services;

class Main extends BasicMain {
    constructor() {
        super(env);

        const mongo = new MongoDB();
        const cleaner = new Cleaner();
        const gate = new Connector();

        this.addNested(mongo, cleaner, gate);
    }
}

module.exports = Main;
