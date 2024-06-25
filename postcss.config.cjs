// postcss.config.cjs
const autoprefixer = require('autoprefixer');
const { join } = require('path');

module.exports = {
    plugins: [
        autoprefixer,
    ],
    ignoreFiles: ['**/*.min.css'],
};