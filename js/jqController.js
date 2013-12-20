//JQuery Controller
$(document).ready(function(){
	var lock = 0;
	//Note Close
	$("#cross").click(function(){
		var appWindow = chrome.app.window.current();
		appWindow.close();
	});
	//Lock and Unlock
	$("#lock").click(function(){
		if (!lock){
			$(this).attr("src", "assets/lock.png");
			lock = 1;
		} else {
			$(this).attr("src", "assets/unlock.png");
			lock = 0;
		}
	});
});