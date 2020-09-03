document.addEventListener('DOMContentLoaded', function () {

    const ContrastMode = localStorage.getItem("ContrastMode");
    const toggleContrast = document.querySelector('#pageContrast');


    if(ContrastMode === 'true') {
        document.querySelector('body').classList.add('contrast');
        document.querySelector('div.profile div#pageContrast div.text').innerHTML= 'Modo: Contrast';
    }else{
        document.querySelector('body').classList.remove('contrast');
        document.querySelector('div.profile div#pageContrast div.text').innerHTML= 'Modo: Normal';
    }

    toggleContrast.addEventListener('click', () => {
        if(document.querySelector('body').classList.contains('contrast')){
            document.querySelector('body').classList.remove('contrast');
            document.querySelector('div.profile div#pageContrast div.text').innerHTML= 'Modo: Normal';
            localStorage.setItem('ContrastMode', 'false');
        }else{
            document.querySelector('body').classList.add('contrast');
            document.querySelector('div.profile div#pageContrast div.text').innerHTML= 'Modo: Contrast';
            localStorage.setItem('ContrastMode', 'true');
        }
    });
});
