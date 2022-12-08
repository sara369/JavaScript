const fadeOut = () => {
    const loaderwrapper = document.querySelector('.wrapper');
    loaderwrapper.classList.add('fade');
}

window.addEventListener('load', fadeOut);