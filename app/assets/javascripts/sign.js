jQuery(document).ready(function signPageReady() {

    var header = document.getElementById('header');
    var dec_nav = document.getElementById('dec-nav');
    var nav_bar = document.getElementById('nav');

if ($(".sign_in-box").length){

    header.setAttribute('style', 'display:none');
    dec_nav.setAttribute('style', 'display:none');
    nav_bar.setAttribute('style', 'display:none');

}else if ($(".sign_up-box").length){

	header.setAttribute('style', 'display:none');
    dec_nav.setAttribute('style', 'display:none');
    nav_bar.setAttribute('style', 'display:none');
}

});