function toggleMenu() {
    var menuItems = document.querySelector('.menu-items');
    if (menuItems.style.display === 'none' || menuItems.style.display === '') {
        menuItems.style.display = 'block';
    } else {
        menuItems.style.display = 'none';
    }
}

const countDownDate = new Date("Feb 10, 2024 00:00:00").getTime();

const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    
    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".countdown-text").innerHTML = "EVENT STARTED!";
    }
}, 1000);
