function ViewService() {}

ViewService.prototype = {
	playAudio:function(url, viewModel) {
			// Play the audio file at url
			var my_media = new Media(url,
				// success callback
				function() {
					console.log("playAudio():Audio Success");
				},
				// error callback
				function(err) {
					console.log("playAudio():Audio Error: "+JSON.stringify(err)+" "+url);
			});

			// Play audio
			my_media.play();
			
			setTimeout(function() {
				my_media.stop();
				my_media.release();
			}, 5000);

		}
	};