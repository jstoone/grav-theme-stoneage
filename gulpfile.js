var elixir = require('laravel-elixir');

var developmentDomain = 'blog.app';

elixir.config.assetsPath = './';
elixir.config.publicPath = './';
elixir.config.appPath = './';
elixir.config.css.sass.folder = 'scss';

elixir(function(mix) {
	mix.copy(
		'node_modules/font-awesome/fonts',
		'fonts/fontawesome'
	);
    mix.browserify('app.js', 'js/app.min.js', 'js')
    	.sass('app.scss', 'css');
});
