document.addEventListener('DOMContentLoaded', () => {
    let boton = document.getElementById('boton');
    let colorHexSpan = document.getElementById('colorHexSpan');

    boton.addEventListener('click', function () {
        var colorHex = '#' + Math.floor(Math.random() * 16777215).toString(16);

        colorHexSpan.innerText = colorHex;
        colorHexSpan.style.color = colorHex;

        document.body.style.backgroundColor = colorHex;
    });
});

// portfolio: tobigfioroni.github.io