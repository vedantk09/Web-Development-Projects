const navMenu = document.querySelector('.nav-menu');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navMenu.style.backgroundColor = '#222'; // Change background color when scrolled
    } else {
        navMenu.style.backgroundColor = '#333'; // Revert to the original color when not scrolled
    }
});