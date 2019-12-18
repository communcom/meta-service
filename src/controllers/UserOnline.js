const core = require('cyberway-core-service');
const { User } = require('../model');

const BasicController = core.controllers.Basic;

class PostCountView extends BasicController {
    async markUserOnline({ user }) {
        await User.updateOne({ username: user }, { lastOnlineAt: new Date() }, { upsert: true });
    }

    async getUserLastOnline({ user }) {
        if (!user) {
            throw {
                code: 1110,
                message: 'Invalid params',
            };
        }

        const userModel = await User.findOne({ username: user });

        const lastOnlineAt = (userModel && userModel.lastOnlineAt) || null;

        return {
            lastOnlineAt,
        };
    }
}

module.exports = PostCountView;
