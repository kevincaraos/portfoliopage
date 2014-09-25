//When person hovers over photo, it will darken and reveal a message//

//1. Mouse hovers over photo//
$ (".photography-square") .hover(
//2. Photo darkens //
function(){
	$("this").animate (backgroundcolor: "black")
}
//3. Message ontop of photo appears//
//4. Returns to normal //