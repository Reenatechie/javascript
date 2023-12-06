//Guessing game; develop a program thta generates a random number between 1 and 100. Allow the user to guess the number and provide feedback on whether the guess is too high, or correct.


function guessNum(guess) {
    let randomNum = Math.floor(Math.random() * 100 + 1)

    if (guess > randomNum) {
        return "ouch! guess is very high"
    }
    else if (guess < randomNum) {
        return "ouch! guess is very low "
    }
    else {
        return "Viola! you're a champ, you guessed rightly!!!"
    }
}

let finalGuess = guessNum(12)
console.log(finalGuess)