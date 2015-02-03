"use strict";
(function() {
    
    var app = {
        init: function() {
            this.fixBottomMenuItemsForSmallerScreens();
			var viewService = new ViewService();
            var viewModel = new ViewModel(viewService);
            this.bindApp(viewModel);
			try{
				this.configureAds();
			}catch(e){
				alert("LOAD " + e);
			}
        },
        bindApp:function(viewModel){
            
            // -- main
			ko.applyBindings(viewModel, document.getElementById("aboutApp"));
            ko.applyBindings(viewModel, document.getElementById("main"));
        },
        fixBottomMenuItemsForSmallerScreens: function() {
            // if you have a ul.bottom, this helps to place it on smaller screens
            var bottomList = $("ul.bottom");
            if (bottomList.length === 0) {
                return;
            }
            var bottomListTop = bottomList.position().top;
            var lastItem = $("ul.top li:last-child()");
            var lastItemBottom = lastItem.position().top + lastItem.height();
            if (bottomListTop <= lastItemBottom) {
                bottomList.css("position", "relative");
            }
        },
		configureAds : function(){
			// https://github.com/floatinghotpot/cordova-admob-pro
			var admobid = {};
			if( /(android)/i.test(navigator.userAgent) ) { // for android
				admobid = {
					banner: 'ca-app-pub-7845656758279006/8746463976',
					interstitial: 'ca-app-pub-7845656758279006/1223197173'
				};
			}
			
			// load for later ;)
			if(AdMob) AdMob.prepareInterstitial( {adId:admobid.interstitial, autoShow:false} );
			
		}
    };

    document.addEventListener("deviceready", function() {
       app.init();
    }, false);
})();
