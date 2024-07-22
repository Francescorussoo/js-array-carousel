console.log('JS connected');

const myImg = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
];
console.log(myImg);

const container = document.querySelector('.container');

myImg.forEach((imgSrc, index) => {
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('img-container');
    imgDiv.innerHTML = `<img src="${imgSrc}">`;
    container.appendChild(imgDiv);
});

const imgContainers = document.querySelectorAll('.img-container');
console.log(imgContainers);

let activeIndex = 0;

function updateActiveImage(newIndex) {
    imgContainers[activeIndex].classList.remove('active');
    activeIndex = newIndex;
    imgContainers[activeIndex].classList.add('active');
}

if (myImg[activeIndex]) {
    imgContainers[activeIndex].classList.add('active');
}

document.querySelector('.down').addEventListener('click', () => {
    const nextIndex = (activeIndex + 1) % myImg.length;
    updateActiveImage(nextIndex);
});

document.querySelector('.top').addEventListener('click', () => {
    const prevIndex = (activeIndex - 1 + myImg.length) % myImg.length;
    updateActiveImage(prevIndex);
});
