function focusInput() {
    let searchInput = document.getElementById('search-input');
    searchInput.focus();
}
const menu = document.querySelector('.bx-menu');
const searchBox = document.querySelector('.bx-search');
const mobileNav = document.querySelector('.mobile-nav');
const searchClose = document.querySelector('.search-close');



menu.addEventListener('click', () => {
    mobileNav.style.display = mobileNav.style.display === 'none' ? 'block' : 'none';
});

searchBox.addEventListener('click', () => {
    document.querySelector('.navbar-container').style.display =
        document.querySelector('.navbar-container').style.display === 'block' ? 'none' : 'block';
    document.querySelector('.mobile-searchBox').style.display = 
        document.querySelector('.mobile-searchBox').style.display === 'none' ? 'flex' : 'none';
});
searchClose.addEventListener('click', () => {
    document.querySelector('.mobile-searchBox').style.display = 
        document.querySelector('.mobile-searchBox').style.display === 'none' ? 'flex' : 'none';
        document.querySelector('.navbar-container').style.display =
        document.querySelector('.navbar-container').style.display === 'block' ? 'none' : 'block';
});