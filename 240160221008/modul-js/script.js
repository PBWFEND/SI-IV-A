function generateRandomColor() {
    var randomColor =
        '#' + Math.floor(Math.random() * 16777215).toString(16);

    return randomColor;
}

function changeBackgroundColor() {
    document.body.style.background =
        "linear-gradient(135deg, " +
        generateRandomColor() +
        ", " +
        generateRandomColor() +
        ")";
}

function showWelcomeMessage() {
    alert("Selamat datang di website portofolio Della Kartika!");
}

window.onload = function () {
    changeBackgroundColor();
    showWelcomeMessage();
};