const withTypescript = require('@zeit/next-typescript');
const path = require('path');

module.exports = withTypescript({
    webpack(config, options) {
        config.resolve.alias = {
            ...(config.resolve.alias || {}),
            '~' : path.resolve(__dirname, './src')
        }

        return config;
    }
});