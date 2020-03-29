function openNav() {
    document.querySelector('#nav-mobile').style.display = "block";
    document.querySelector('#nav-desktop').style.display = "none";
}
function closeNav() {
    document.querySelector('#nav-mobile').style.display = "none";
    document.querySelector('#nav-desktop').style.display = "flex";
}

function showtab(tab) {

document.querySelector('.accordion__tab').style.display = "none" ;
document.querySelector('#'+ tab).style.display = "block" ;



}

