const core = require('gls-core-service');
const { Post } = require('../model');

const BasicController = core.controllers.Basic;

class ViewCount extends BasicController {
    async getPostsViewCount({ postLinks }) {
        if (!postLinks) {
            throw {
                code: 1110,
                message: 'Invalid params',
            };
        }

        const results = [];

        await Promise.all(
            postLinks.map(async postLink => {
                results.push({
                    postLink,
                    viewCount: await this._getPostViewCount(postLink),
                });
            })
        );

        return {
            results,
        };
    }

    async _getPostViewCount(postLink) {
        const post = await Post.findOne({ postLink });

        if (!post || !post.viewCount) {
            return 0;
        }

        return post.viewCount;
    }

    async recordPostView({ postLink }) {
        if (!postLink) {
            throw {
                code: 1110,
                message: 'Invalid params',
            };
        }

        await Post.updateOne({ postLink }, { $inc: { viewCount: 1 } }, { upsert: true });
    }
}

module.exports = ViewCount;
