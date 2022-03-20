const images = [
    "../img/01.jpg",
    "../img/02.jpg",
    "../img/03.jpg",
    "../img/04.jpg",
    "../img/05.jpg",
    "../img/06.jpg",
];

const bgColor = document.querySelector("body");

// console.log(chosenImage);

function chaangeBgColor() {
    const chosenImage = images[Math.floor(Math.random() * images.length)];

    bgColor.style.background= `url(./img/${chosenImage})`;
    console.log(chosenImage);
}

chaangeBgColor();