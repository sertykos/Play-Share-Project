
jQuery(document).ready(function($) {

var btn = document.getElementById('comment-btn');
var art = document.getElementById('article');

function comment(){
	var txtarea = $('#txtarea').val();
	var newp = document.createElement('p');
	newp.setAttribute('style', 'margin-left:110px;margin-bottom:20px');
	newp.innerText = txtarea
	art.appendChild(newp)
}

btn.onclick = comment

});
