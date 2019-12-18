const core = require('gls-core-service');
const MongoDB = core.services.MongoDB;

module.exports = MongoDB.makeModel(
    'User',
    {
        username: {
            type: String,
            required: true,
        },
        lastOnlineAt: {
            type: Date,
        },
    },
    {
        index: [
            {
                fields: {
                    username: 1,
                },
                options: {
                    unique: true,
                },
            },
        ],
    }
);
