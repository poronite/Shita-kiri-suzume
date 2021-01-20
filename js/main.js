var audio = new Audio();
var timer = document.getElementById('jstimer')

if (document.title != "Tongue-Cut Sparrow Index")
{
	audio.src = "../audio/button.mp3";
}
else
{
	audio.src = "audio/button.mp3";
}

$(function(){
    $("a").click(function(evt){
			evt.preventDefault();
        var link = $(this).attr("href");
        setTimeout(function() {
            window.location.href = link;
        }, 500);
    });
});
