document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.menu-icon').addEventListener('click', (e) => {
        e.stopPropagation();
        document.querySelector('.profile').classList.remove('opened');

        if(document.querySelector('.menu').classList.contains('opened')){
            document.querySelector('.menu').classList.remove('opened');
        }else{
            document.querySelector('.menu').classList.add('opened');
        }

    });
    document.querySelector('.user-nav').addEventListener('click', (e) => {
        e.stopPropagation();
        document.querySelector('.menu').classList.remove('opened');
        
        if(document.querySelector('.profile').classList.contains('opened')){
            document.querySelector('.profile').classList.remove('opened');
        }else{
            document.querySelector('.profile').classList.add('opened');
        }

    });    
});
