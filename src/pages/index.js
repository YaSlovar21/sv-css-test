import "./index.css";

const cards = document.querySelectorAll('.card');
const cardsContainer = document.querySelector('.cards');

const cardsInLineByWidth = (screenWidth) => {
    if (screenWidth < 321) return 2;
    if (screenWidth < 641) return 3;
    if (screenWidth < 1025) return 4;
    return 5;
}

const cardsFromEndToRemove = (screenWidth) => {
    let cardsInLine = cardsInLineByWidth(screenWidth);
    console.log('cardsInLine', cardsInLine)
    const toRemoveNumber = - cards.length + Math.floor(cards.length/cardsInLine)*cardsInLine;
    const indexFromEndToRemove = Math.floor(cards.length/cardsInLine)*cardsInLine;
    console.log('index from slice', indexFromEndToRemove);
    console.log('oRemoveNumber', toRemoveNumber)
    //return toRemoveNumber; 
    return indexFromEndToRemove;
} 

let removed;

function checkAndRemove() {
    const cardsFromEndToRemoveNumber = cardsFromEndToRemove(document.documentElement.clientWidth);
    removed = Array.from(cards).slice(cardsFromEndToRemoveNumber,cards.length).map(i => cardsContainer.removeChild(i));
}

checkAndRemove();

function handleResize(evt) {
    console.log(evt)
    removed.map(i => cardsContainer.appendChild(i))
    checkAndRemove();
}

/*
const cardsFromEndToRemoveNumber = cardsFromEndToRemove(document.documentElement.clientWidth);
console.log('cards.length',cards.length);
let removed = Array.from(cards).slice(cardsFromEndToRemoveNumber,cards.length).map(i => cardsContainer.removeChild(i));
console.log('removed',removed);
console.log('cards.length',cards.length);
function handleResize(evt) {
    console.log(evt)
    removed.map(i => cardsContainer.appendChild(i))
    const cardsFromEndToRemoveNumber = cardsFromEndToRemove(document.documentElement.clientWidth);
    //removed = Array.from(cards).slice(cardsFromEndToRemoveNumber).map(i => cardsContainer.removeChild(i));
    removed = Array.from(cards).slice(cardsFromEndToRemoveNumber,cards.length).map(i => cardsContainer.removeChild(i));
}
*/
window.addEventListener("resize", handleResize);
