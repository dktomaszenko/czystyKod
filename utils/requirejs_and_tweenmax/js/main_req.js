//for GreenSock classes to work with AMD tools like RequireJS, you must set a GreenSockAMDPath global variable pointed at the main directory where you're storing the GreenSock files
var GreenSockAMDPath = "greensock";
require(["greensock/TweenMax"], function(TM) {
	TM.to(document.getElementById("headline"), 1.5, {color:"blue", rotation:360, marginLeft:200, marginTop:100, transformOrigin:"left center", ease:Back.easeOut, delay:1});
});