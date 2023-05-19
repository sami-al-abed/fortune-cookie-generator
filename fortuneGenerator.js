const readline = require('readline');

// Initialize the fortune cookie messages
const fortuneMessages = [
    "A pleasant surprise awaits you at the end of the rainbow.",
    "Your talents will be recognized and rewarded soon.",
    "Adventure awaits around the next corner. Embrace it!",
    "Opportunities will come knocking when you least expect them.",
    "Good fortune will shine upon you in unexpected ways."
];

const positiveAffirmations = [
    "You are capable of acheiving great things.",
    "Your positive attitude attracts success and happiness.",
    "Believe in yourself, and you can overcome any obstacle.",
    "You have the power to turn dreams into reality.",
    "Every dat is a chance for new beginnings and endless possibilities."
];

const playfulTwists = [
    "Remember to share your fortune cookie with a friend, good karma awaits!",
    "Don't forget to add the phrase 'in bed' at the end of your fortune for extra fun.",
    "Crack open another cookie for an extra dose of luck.",
    "If you're reading this, you're already a step closer to greatness.",
    "Lucky numbers: 42, 9, 23...jk that isn't real."
];

/**
 * Retreives a random phrase from a given phrase list
 * @param {string[]} phraseList a list of phrases
 * @returns {string} the randomly selected phrase
 */
const getRandomPhrase = phraseList => {
    if (Array.isArray(phraseList) && phraseList.every(phrase => typeof phrase === 'string')) {
        return phraseList[Math.floor(Math.random() * phraseList.length)];
    } else {
        return 'Error: invalid function parameter';
    }
};

/**
 * Prints a random phrase
 */
const printFortune = () => {
    console.log(`\n${getRandomPhrase(fortuneMessages)} ${getRandomPhrase(positiveAffirmations)} ${getRandomPhrase(playfulTwists)}`);
};

/**
 * Initialize readline interface
 */
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '>'
});

/**
 * Asks the user if they'd like another phrase and reacts accordingly
 */
const userFortuneAsker = () => {
    rl.question('\nWould you like another fortune? (y/n) \n', userInput => {
        if (userInput === 'y') {
            printFortune();
            userFortuneAsker();
        } else if (userInput === 'n') {
            console.log('\nHave a great day! :)\n');
            rl.close();
        } else {
            console.log("Error: invalid input. Please enter 'y' or 'n'");
            userFortuneAsker();
        }
    });
};

// Start the program
printFortune();
userFortuneAsker();