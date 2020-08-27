document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.menu-icon').addEventListener('click', (e) => {
        e.stopPropagation();
        document.querySelector('.profile').classList.remove('opened')
        document.querySelector('.menu').classList.toggle('opened');
    });
    document.querySelector('.user-nav').addEventListener('click', (e) => {
        e.stopPropagation();
        document.querySelector('.menu').classList.remove('opened')
        document.querySelector('.profile').classList.toggle('opened');
    });    
});
