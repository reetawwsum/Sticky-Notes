chrome.app.runtime.onLaunched.addListener(function(){
	chrome.app.window.create('index.html', {
		'bounds': {
			'width': 220,
			'height': 180
		},
		'frame': 'none',
		'maxWidth': 900,
		'maxHeight': 500,
		'minWidth': 220,
		'minHeight': 180
	});
});