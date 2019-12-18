const core = require('cyberway-core-service');
const BasicConnector = core.services.Connector;

const ViewCount = require('../controllers/ViewCount');
const UserOnline = require('../controllers/UserOnline');

class Connector extends BasicConnector {
    async start() {
        const viewCount = new ViewCount();
        const userOnline = new UserOnline();

        // TODO Validation
        await super.start({
            serverRoutes: {
                getPostsViewCount: viewCount.getPostsViewCount.bind(viewCount),
                recordPostView: viewCount.recordPostView.bind(viewCount),
                markUserOnline: userOnline.markUserOnline.bind(userOnline),
                getUserLastOnline: userOnline.getUserLastOnline.bind(userOnline),
            },
        });
    }
}

module.exports = Connector;
