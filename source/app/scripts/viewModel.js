	function ViewModel(viewService){
		var self = this;
		
		self.viewService = viewService;
		
		self.ringing = false;
		self.message = ko.observable("Press to Ring");
		self.color = ko.observable("alert alert-info");
		
		self.ring = function(){
			if(!self.ringing){
				self.ringing = true;
				self.message("Ringing....");
				self.color("alert alert-warning");
				
				setTimeout(function(){ 
								self.message = ko.observable("Press to Ring");
								self.color = ko.observable("alert alert-info"); 
						  },3500);
				
				try{
					// http://www.raymondcamden.com/2014/6/23/Cordova-Media-API-Example
					var file = "/android_asset/www/audio/2.mp3";
					self.viewService.playAudio(file);
				}catch(e){
					alert(e);
				}
			}
		};
		
		self.unring = function(){
			self.ringing = false;
			self.message = ko.observable("Press to Ring");
			self.color = ko.observable("alert alert-info");
		};
		
		self.bugReport = function(){
			closeMenu();
			var link = "http://goo.gl/forms/wrnDilSAOo";
			webHelper.openUrl(link);
		};

		self.showAbout = function(){
			closeMenu();
			$("#aboutApp").toggleClass("collapse");
		};

		self.closeAbout = function(){
			$("#aboutApp").toggleClass("collapse");
		};
	}
		