const core = require('cyberway-core-service');
const MongoDB = core.services.MongoDB;

module.exports = MongoDB.makeModel(
    'View',
    {
        viewKey: {
            type: String,
            required: true,
        },
        ts: {
            type: Date,
            required: true,
        },
    },
    {
        index: [
            {
                fields: {
                    viewKey: 1,
                },
                options: {
                    unique: true,
                },
            },
            {
                fields: {
                    ts: 1,
                },
            },
        ],
    }
);
