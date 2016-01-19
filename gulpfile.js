var elixir = require('laravel-elixir');

var developmentDomain = 'blog.app';

elixir.config.assetsPath = '';
elixir.config.css.sass.folder = 'scss';

elixir(function(mix) {
    mix.browserify('app.js', 'js/app.min.js', 'js')
    	.sass('app.scss', 'css')
    	.browserSync({
    		proxy: developmentDomain
    	});
});
