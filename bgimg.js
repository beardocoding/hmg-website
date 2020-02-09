const bg = document.getElementById('bgimg');

var bg_images = [
    'images/bg1.jpg',
    'images/bg2.jpg',
    'images/bg3.jpg',
    'images/bg4.jpg',
    'images/bg5.jpg'
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