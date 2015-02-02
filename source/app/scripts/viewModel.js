	function ViewModel(viewService){
		var self = this;
		
		self.viewService = viewService;
		
		self.message = ko.observable("Press to Ring");
		self.color = ko.observable("alert alert-info");
		
		self.setMessageFromStatus = function(model){
			
			/*
			if(status === 0){
				self.message("No load shedding.");
				self.color("alert alert-success");
			}else if(status === 1){
				self.message("Stage 1 load shedding.");
				self.color("alert alert-info");
			}else if(status === 2){
				self.message("Stage 2 load shedding.");
				self.color("alert alert-warning");
			}else if(status === 3){
				self.message("Stage 3 load shedding.");
				self.color("alert alert-danger");
			}else{
				self.message("Unknown status?!");
				self.color("alert alert-warning");
			}
			*/
		};
		
		self.ring = function(){
			self.message("Ringing....");
			self.color("alert alert-warning");
			setTimeout(function(){ self.unring(); },5500);
			//try{
				//self.viewService.playAudio("audio/2.mp3");
			//}catch(e){
			//	alert(e);
			//}
			alert("Ring, ring...");
		};
		
		self.unring = function(){
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
		