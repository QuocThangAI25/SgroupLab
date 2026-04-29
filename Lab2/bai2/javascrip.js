const text = document.getElementById("colorText");

function changeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    text.style.color = `rgb(${r}, ${g}, ${b})`;
}

setInterval(changeColor, 500);