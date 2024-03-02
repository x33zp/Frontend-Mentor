const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');

const setColorMode = () => {
    if (localStorage.getItem('colorMode') == 'dark') {
        setDarkMode();
        darkButton.click();
    } else if (localStorage.getItem('colorMode') == 'light') {
        setLightMode();
        lightButton.click();
    }
}

const setDarkMode = () => {
    document.querySelector('body').classList = 'dark';
}

const setLightMode = () => {
    document.querySelector('body').classList = 'light';
}

setColorMode();

const radioButtons = document.querySelectorAll('.toggle__wrapper input');
radioButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (darkButton.checked) {
            localStorage.setItem('colorMode', 'dark');
            setDarkMode();
        } else {
            localStorage.setItem('colorMode', 'light');
            setLightMode();
        }
    })
})