const container = document.querySelector(".map__container");
const map = document.querySelector(".map");
let zoomFactor = 1;
window.onresize = () => {
    transform(zoomFactor * reset());
}

function transform (zoomFactor) {
    container.style.transform = `scale(${zoomFactor})`;
}

function reset () {
    let zoom;
    if (document.body.clientWidth <= 479) {
        zoom = 2.2;
    }
    else if (document.body.clientWidth <= 767){
        zoom = 1.6;
    } else {
        zoom = 1;
    }
    return zoom;
}

document.querySelector(".map__scale_plus").addEventListener("click", () => {
    zoomFactor *= 1.25;
    transform(zoomFactor * reset());
});

document.querySelector(".map__scale_minus").addEventListener("click", () => {
    zoomFactor /= 1.25;
    transform(zoomFactor * reset());
});

document.querySelector(".map__scale_reset").addEventListener("click", () => {
    zoomFactor = 1;
    transform(reset());
});