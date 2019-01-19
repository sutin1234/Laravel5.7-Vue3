const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .js('resources/js/entry-server.js', 'public/js')
    .js('resources/js/entry-client.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');
mix.webpackConfig({
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.runtime.common.js'
        }
    }
});
