document.addEventListener('DOMContentLoaded', function () {

    const darkMode = localStorage.getItem("darkMode");
    const darkModeToggle = document.querySelector("input[name=theme]");
    const toggleDark = document.querySelector('.toggle-container label');


    if(darkMode === 'true') {
        document.querySelector('body').classList.add('dark');
        darkModeToggle.checked = true;
    }else{
        document.querySelector('body').classList.remove('dark');
        darkModeToggle.checked = false;
    }

    toggleDark.addEventListener('click', () => {
        darkModeToggle.click();
        if(darkModeToggle.checked){
            document.querySelector('body').classList.add('dark');
            localStorage.setItem('darkMode', 'true');
        }else{
            document.querySelector('body').classList.remove('dark');
            localStorage.setItem('darkMode', 'false');
        }
    });
});