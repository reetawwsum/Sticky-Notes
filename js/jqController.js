var lock = 0;
//JQuery Controller
$(document).ready(function(){
	//Note Close
	$("#cross").click(function(){
		var appWindow = chrome.app.window.current();
		appWindow.close();
	});
	//Lock and Unlock
	$("#lock").click(function(){
		if (!lock){
			$(this).attr("src", "assets/lock.png");
			$("textarea").attr("readonly", true);
			lock = 1;
		} else {
			$(this).attr("src", "assets/unlock.png");
			$("textarea").attr("readonly", false);
			lock = 0;
		}
	});
});