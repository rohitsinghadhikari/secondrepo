let randomNumber=parseInt(Math.random() * 100 + 1)
const submit=document.getElementById('subt')
// const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
// const guessSlot=document.getElementsByClassName('guesses')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const startOver=document.querySelector('.resultParas')
const lowOrHi=document.querySelector('.lowOrHi')
const id =document.querySelector('form')
const p=document.createElement('p')

let prevGuess=[]
let numGuess=1
let playGame= true

if (playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess=parseInt(userInput.value)
        validateGuess(guess)
    })
}
function validateGuess(guess){
    if(isNaN(guess) || (guess<1) || (guess>100)){
        alert('Enter valid no')
    // } else if (guess< 1) {
    //     alert('Enter valid no')
    // } else if(guess>100){
    //     alert('Enter valid no')
    } else {
        prevGuess.push(guess)
        if (numGuess === 11){
            displayGuess(guess)
            displayMsg(`Game Over, rand num was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess){
    if (guess === randomNumber) {
        displayMsg(`Guess right`)
        endGame()
    }
    else if (guess < randomNumber){
        if(guess<randomNumber/2) {
            displayMsg('No is too low')
        } else {
        displayMsg('No is low')
        }
    } else if (guess > randomNumber){
        if(guess>(randomNumber+randomNumber/2)) {
            displayMsg('No is too high')
        } else {
            displayMsg('No is high')
        }
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML+=`${guess}  `
    numGuess++
    remaining.innerHTML=`${11-numGuess}`
}

function displayMsg(msg){
    lowOrHi.innerHTML=`<h2>${msg}</h2>`
}

function newGame(){
    const newG=document.querySelector('#newGame')
    newG.addEventListener('click',function(e){
        randomNumber=parseInt(Math.random() * 100 + 1)
        prevGuess=[]
        numGuess=1
        guessSlot.innerHTML=''
        remaining.innerHTML=`${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame=true
    })
}

function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`
    playGame=false
    startOver.appendChild(p)
    newGame()
}