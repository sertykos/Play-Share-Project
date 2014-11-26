jQuery(document).ready(function signPageReady() {

    var header = document.getElementById('header');
    var dec_nav = document.getElementById('dec-nav');
    var nav_bar = document.getElementById('nav');
    var footer = document.getElementById('footer');

if ($(".sign_in-box").length){

    header.setAttribute('style', 'display:none');
    dec_nav.setAttribute('style', 'display:none');
    nav_bar.setAttribute('style', 'display:none');
    footer.setAttribute('style', 'display:none');

}else if ($(".sign_up-box").length){

	header.setAttribute('style', 'display:none');
    dec_nav.setAttribute('style', 'display:none');
    nav_bar.setAttribute('style', 'display:none');
    footer.setAttribute('style', 'display:none');
}

});

function toggle_visibility() {
    var select_avatar = document.getElementById('avatar-select');

    if(select_avatar.style.display == 'block')
        select_avatar.style.display = 'none';
    else
        select_avatar.style.display = 'block';
}
