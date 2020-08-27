document.addEventListener('DOMContentLoaded', function () {

    const darkMode = localStorage.getItem('darkMode');
    const toggleDark = document.querySelector('#pageMode');


    if(darkMode === 'true') {
        document.querySelector('body').classList.add('dark');
        document.querySelector('div.profile div#pageMode div.text').innerHTML= 'Modo: Dark';
    }else{
        document.querySelector('body').classList.remove('dark');
        document.querySelector('div.profile div#pageMode div.text').innerHTML= 'Modo: Light';
    }

    toggleDark.addEventListener('click', () => {
        if(document.querySelector('body').classList.contains('dark')){
            document.querySelector('body').classList.remove('dark');
            document.querySelector('div.profile div#pageMode div.text').innerHTML= 'Modo: Light';
            localStorage.setItem('darkMode', 'false');
        }else{
            document.querySelector('body').classList.add('dark');
            document.querySelector('div.profile div#pageMode div.text').innerHTML= 'Modo: Dark';
            localStorage.setItem('darkMode', 'true');
        }
    });
});