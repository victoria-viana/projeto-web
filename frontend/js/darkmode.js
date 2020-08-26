let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("input[name=theme]");

const enableDarkMode = () => {

    document.body.classList.add("dark");

    localStorage.setItem("darkMode","enable");
};

const disableDarkMode = () => {

    document.body.classList.remove("dark");

    localStorage.setItem("darkMode", null);
};

console.log(darkMode);
darkModeToggle.addEventListener("click",() => {
    darkMode = localStorage.getItem("darkMode");
    if(darkMode  !== "enable") {
        enableDarkMode();
        console.log(darkMode);
    } else {
        disableDarkMode();
        console.log(darkMode);
    }
});