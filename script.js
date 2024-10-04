const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.menu');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
function showAlert(message) {window.onload = function () {alert(message);};}