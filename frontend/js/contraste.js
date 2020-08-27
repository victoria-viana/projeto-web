document.addEventListener('DOMContentLoaded', function () {

    const altoContraste = localStorage.getItem("altoContraste");
    const altoContrasteToggle = document.querySelector("input[name=contrast]");
    const toggleContraste = document.querySelector('.toggle-contrast label');


    if(altoContraste === 'true') {
        document.querySelector('body').classList.add('contrast');
        altoContrasteToggle.checked = true;
    }else{
        document.querySelector('body').classList.remove('contrast');
        altoContrasteToggle.checked = false;
    }

    toggleContraste.addEventListener('click', () => {
        altoContrasteToggle.click();
        if(altoContrasteToggle.checked){
            document.querySelector('body').classList.add('contrast');
            localStorage.setItem('altoContraste', 'true');
        }else{
            document.querySelector('body').classList.remove('contrast');
            localStorage.setItem('altoContraste', 'false');
        }
    });
});