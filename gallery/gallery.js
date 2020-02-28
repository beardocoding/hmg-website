var restaurant = document.getElementsByClassName('re');
var rooms = document.getElementsByClassName('ro');
var banquet = document.getElementsByClassName('bn');
var business = document.getElementsByClassName('bu');
var catering = document.getElementsByClassName('ct');
var re = document.getElementById('re');
var ro = document.getElementById('ro');
var bn = document.getElementById('bn');
var bu = document.getElementById('bu');
var ct = document.getElementById('ct');

function loadRestaurant() {
    for(i=0;i<restaurant.length;i++) {
        restaurant[i].style.display = 'block';
        restaurant[i].style.opacity = '1';
        re.style.display = 'none';
    }
}
function loadRooms() {
    for(i=0;i<rooms.length;i++) {
        rooms[i].style.display = 'block';
        rooms[i].style.opacity = '1';
        ro.style.display = 'none';
    }
}
function loadBanquet() {
    for(i=0;i<banquet.length;i++) {
        banquet[i].style.display = 'block';
        banquet[i].style.opacity = '1';
        bn.style.display = 'none';
    }
}
function loadBusiness() {
    for(i=0;i<business.length;i++) {
        business[i].style.display = 'block';
        business[i].style.opacity = '1';
        bu.style.display = 'none';
    }
}
function loadCatering() {
    for(i=0;i<catering.length;i++) {
        catering[i].style.display = 'block';
        catering[i].style.opacity = '1';
        ct.style.display = 'none';
    }
}