const core = require('gls-core-service');
const MongoDB = core.services.MongoDB;

module.exports = MongoDB.makeModel(
    'Post',
    {
        postLink: {
            type: String,
            required: true,
        },
        viewCount: {
            type: Number,
            default: 0,
            required: true,
        },
    },
    {
        index: [
            {
                fields: {
                    postLink: 1,
                },
                options: {
                    unique: true,
                },
            },
        ],
    }
);
