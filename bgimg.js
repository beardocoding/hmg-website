const bg = document.getElementById('bgimg');

var bg_images = [
    'images/homepage/landing-banner/bg1.jpg',
    'images/homepage/landing-banner/bg2.jpg',
    'images/homepage/landing-banner/bg3.jpg',
    'images/homepage/landing-banner/bg4.jpg',
    'images/homepage/landing-banner/bg5.jpg'
]

var index = 0;

function changebg() {
    bg.style.backgroundImage = 'url('+bg_images[index]+')';
    index += 1;
    if(index == 5) {
        index = 0;
    }
}
changebg();
setInterval(changebg,4000);