const { optimize: { UglifyJsPlugin, OccurrenceOrderPlugin } } = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const vueLoaderConfig = require('./vue-loader.conf');

function resolve (dir) {
    return path.join(__dirname, '..', dir);
}

const commonConfig = {
    entry: {
        'zipify-colorpicker': './src/index.js'
    },
    output: {
        filename: './dist/[name].js',
        library: 'ZipifyColorPicker',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src')],
                exclude: /node_modules/
            }
        ]
    },
    node: {
        global: false
    }
};

module.exports = [
    merge(commonConfig, {
        output: { filename: './dist/[name].js' }
    }),
    merge(commonConfig, {
        output: { filename: './dist/[name].min.js' },
        plugins: [
            new UglifyJsPlugin({
                sourceMap: false,
                compress: { warnings: false }
            }),
            new OccurrenceOrderPlugin()
        ]
    })
];
