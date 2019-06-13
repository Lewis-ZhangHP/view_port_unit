
import './index.css';

const BASE_URL = 'https://go.tradeshiftchina.cn';

function getPath() {
    const location = window.location;
    return (location.pathname + location.search + location.hash);
}

function getNewUrl () {
    return (BASE_URL + getPath());
}

function updateHrefDom() {
    const ele = document.querySelector('.new-link');
    ele.href = getNewUrl();
}

updateHrefDom();
