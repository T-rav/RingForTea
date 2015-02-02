	function ViewModel(){
		var self = this;
		self.message = ko.observable("Press to Ring");
		self.color = ko.observable("alert alert-info");
		
		self.setMessageFromStatus = function(model){

			var status = model.level;
			//var currentStatus = self.status();
			self.status(status);
			
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
			setTimeout(5500, function(){ unring(); });
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
		