function runGame() {

    // storing variables
    // prompt function always returns a string, need to do explicit type conversion from string to number
    let guessString = "";
    // always good to initalize variables when you declare them or else undefined
    let guessNumber = 0;
    // store guess after converted from string to number
    let correct = false;
    // hold Boolean value to say if guess was right or not               
    let numTries = 0;
    // keeps track of number of times tried

    const randomNumber = Math.random() * 100;
    const randomInteger = Math.floor(randomNumber);
    const target = randomInteger + 1;

    // const target = Math.floor(Math.random() * 100) +1;
    do {
        guessString = prompt("I am thinking of a number in the range 1 to 100.\n\nWhat is the number?")
        //\n\n (escape sequence) will create 2 new lines after string
        guessNumber = +guessString;
        // + is unary operator that converts string into number
        numTries += 1;
        // increments every time the do...while loop iterates
        correct = checkGuess(guessNumber, target);
        // function checkGuess will compare guessNumber vs target and return false if they don't match and true if they do
    } while (!correct);
    // !correct means not correct
    // repeat as long as answer is false
    // as soon as checkGuess function returns true for correct, will exit loop

    alert(`You got it! The number was ${target}.\n\nIt took you ${numTries} tries to guess correctly.`)
}

function checkGuess(guessNumber, target) {
    let correct = false;
    // want to use variable later for return
    // default state is false aka incorrect guess

    if (isNaN(guessNumber)) {
    // isNaN is built in JS function to check if a value is a number or not
    // true if not a number
        alert("You have not entered a number.\n\nPlease enter a number in the 1-100 range.")
    } else if ((guessNumber < 1) || (guessNumber > 100)) {
        // checks if player entered number less than 1 OR greater than 100
        // if either condition is true, will enter following code block...
        alert("Please enter an integer in the 1-100 range.");
    } else if (guessNumber > target) {
        // checking if guess is greater than target
        // if true (greater than target) then alert...
        alert("Your number is too large!");
    } else if (guessNumber < target) {
        // checking if guess is less than target
        // if true (less than target) then alert...
        alert("Your number is too small!")
    } else {
        correct = true;
        // since correct's value is default to false, this is the only code block in this if statement that will set correct's value to true
    }
    return correct;
    // value will go back to the runGame function where checkGuess was called (in do...while loop) and change its value (line 22)
    // correct is now correct = checkGuess(guessNumber, target)
    // if player guesses correctly, variable of correct in do...while loop is set to true
    // do...while only loops while the condition of !correct (not correct) is true
    // if guess is right, will break out of loop
}