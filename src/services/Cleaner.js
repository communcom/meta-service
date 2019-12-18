const core = require('cyberway-core-service');
const moment = require('moment');
const { View } = require('../model');

const BasicService = core.services.Basic;

const HISTORY_LIMIT = 24; // hours

class Cleaner extends BasicService {
    async start() {
        this.startLoop(5 * 60 * 1000, 10 * 60 * 1000);
    }

    async iteration() {
        await View.deleteMany({
            ts: { $lt: moment().subtract(HISTORY_LIMIT, 'hour') },
        });
    }

    async stop() {
        this.stopLoop();
    }
}

module.exports = Cleaner;
