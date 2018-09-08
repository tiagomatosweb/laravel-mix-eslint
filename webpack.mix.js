let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
    .webpackConfig({
        module: {
            rules: [
                {
                    enforce: "pre",
                    test: /\.(js|vue)$/,
                    exclude: /node_modules/,
                    loader: "eslint-loader",
                    options: {
                        formatter: require('eslint-friendly-formatter')
                    },
                }
            ]
        }
    });
