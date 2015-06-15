(function(){

	var v = "1.3.2";

	if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
		var done = false;
		var script = document.createElement("script");
		script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
		script.onload = script.onreadystatechange = function(){
			if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
				done = true;
				initMyBookmarklet();
			}
		};
		document.getElementsByTagName("head")[0].appendChild(script);
	} else {
		initMyBookmarklet();
	}

	function initMyBookmarklet() {
		(window.myBookmarklet = function() {
			if ($("#lennyframe").length == 0) {
				var s = "";
				if (s == "") {
					$("body").append("
					<div id='lennyframe'>
						<div id='lennyframe_veil' style=''>
							<p>Loading...</p>
						</div>
						<iframe src='http://alexdantas.net/lenny' onload="$('#lennyframe iframe').slideDown(500);">Enable iFrames.</iframe>
						<style type='text/css'>
							#lennyframe_veil { display: none; position: fixed; width: 100%; height: 100%; top: 0; left: 0; background-color: rgba(255,255,255,.25); cursor: pointer; z-index: 900; }
							#lennyframe_veil p { color: black; font: normal normal bold 20px/20px Helvetica, sans-serif; position: absolute; top: 50%; left: 50%; width: 10em; margin: -10px auto 0 -5em; text-align: center; }
							#lennyframe iframe { display: none; position: fixed; top: 10%; left: 10%; width: 80%; height: 80%; z-index: 999; border: 10px solid rgba(0,0,0,.5); margin: -5px 0 0 -5px; }
						</style>
					</div>");
					$("#lennyframe_veil").fadeIn(750);
				}
			} else {
				$("#lennyframe_veil").fadeOut(750);
				$("#lennyframe iframe").slideUp(500);
				setTimeout("$('#lennyframe').remove()", 750);
			}
			$("#lennyframe_veil").click(function(event){
				$("#lennyframe_veil").fadeOut(750);
				$("#lennyframe iframe").slideUp(500);
				setTimeout("$('#lennyframe').remove()", 750);
			});
		})();
	}

})();
