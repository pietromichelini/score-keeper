const btnG1 = document.querySelector('button.G1');
const btnG2 = document.querySelector('button.G2');
const displayG1 = document.querySelector('#puntiG1');
const displayG2 = document.querySelector('#puntiG2');
const reset = document.querySelector('.reset');
const bestOfSelect = document.querySelector('#bestOfX');


let puntiG1 = 0;
let puntiG2 = 0;
let puntiVittoria = 1;
let isGameOver = false;

// Condizionali per "al meglio di ...""
bestOfSelect.addEventListener('change', () => {
    if (bestOfSelect.value == 1) {
        puntiVittoria = 1;
        console.log(bestOfSelect.value)

    } else if (bestOfSelect.value == 3) {
        puntiVittoria = 3;
        console.log(bestOfSelect.value)
    }
    else if (bestOfSelect.value == 5) {
        puntiVittoria = 5;
        console.log(bestOfSelect.value)
    }
    else {
        puntiVittoria = 7;
        console.log(bestOfSelect.value)
    }
})

// bottone per giocatore 1
btnG1.addEventListener('click', () => {
    if (!isGameOver) {
        puntiG1 += 1;
        if (puntiG1 === puntiVittoria) {
            isGameOver = true;
            displayG1.classList.add('winner');
            displayG2.classList.add('loser');
            setTimeout(() => {
                alert('GAME OVER: Giallo vince!');
            }, 200)
        }
        displayG1.innerText = `${puntiG1}`;
    }

});
// bottone per giocatore 2
btnG2.addEventListener('click', () => {
    if (!isGameOver) {
        puntiG2 += 1;
        if (puntiG2 === puntiVittoria) {
            isGameOver = true;
            displayG2.classList.add('winner');
            displayG1.classList.add('loser');
            setTimeout(() => {
                alert('GAME OVER: Blu vince!');
            }, 200)
        }
        displayG2.innerText = `${puntiG2}`;
    }
});
// bottone per reset 
reset.addEventListener('click', () => {

    puntiG1 = 0;
    puntiG2 = 0;
    displayG1.innerText = `${puntiG1}`;
    displayG2.innerText = `${puntiG2}`;
    isGameOver = false;
    displayG1.className = '';
    displayG2.className = '';
})



