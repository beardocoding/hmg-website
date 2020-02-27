var images = document.getElementsByClassName('loaded');
var btn = document.getElementById('load-gallery');

function loadGallery() {
    for(i=0;i<images.length;i++) {
        images[i].style.display = 'block';
        images[i].style.opacity = '1';
        btn.style.display = 'none';
    }
}