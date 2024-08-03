function focusInput() {
    document.getElementById('search-input').focus();
}

const menu = document.querySelector('.bx-menu');
const searchBox = document.querySelector('.bx-search');
const mobileNav = document.querySelector('.mobile-nav');
const searchClose = document.querySelector('.search-close');
const navbarContainer = document.querySelector('.navbar-container');
const mobileSearchBox = document.querySelector('.mobile-searchBox');

function toggleDisplay(element) {
    element.style.display = element.style.display === 'none' ? 'block' : 'none';
}

function toggleSearchDisplay() {
    navbarContainer.style.display = navbarContainer.style.display === 'block' ? 'none' : 'block';
    mobileSearchBox.style.display = mobileSearchBox.style.display === 'none' ? 'flex' : 'none';
}

menu.addEventListener('click', () => toggleDisplay(mobileNav));
searchBox.addEventListener('click', toggleSearchDisplay);
searchClose.addEventListener('click', toggleSearchDisplay);