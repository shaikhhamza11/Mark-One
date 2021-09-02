const readLine = require('readline-sync')
const chalk = require('chalk');
let questions = [
    {
        question: "What is my Favourite footballer(Last Name)?\n",
        answer: "Ronaldo"
    },
    {
        question: "Where do I live?\n",
        answer: "Mumbai"
    },
    {
        question: "Who is me Favourite Uchiha?\n",
        answer: "Itachi"
    }
]
let score = 0;
const name = readLine.question(chalk.red.bold('What is your name?\n'))

//userDetails
welcome = (name) => {
    console.log(chalk.blue.bold("Welcome " + name));
    console.log("-------------")
    console.log(chalk.blue.bold("Are you exicited to play the quiz?"));

}
game = () => {
    for (let i = 0; i < questions.length; i++) {
        let currentQuestion = questions[i]
        play(currentQuestion)
    }
}
play = ({ question, answer }) => {
    let quizAnswer = readLine.question(chalk.red.bold(question))
    if (quizAnswer.toLowerCase() === answer.toLowerCase()) {
        console.log(chalk.blue.bold("Correct Answer"))
        score += 1
    }
    else {
        console.log(chalk.red.bold("Wrong answer"))
    }
    console.log("Current Score: " + score)
    console.log("-------------")


}
showScores = () => {
    console.log(chalk.blue.underline.bold("Final Score:" + score))
    let askForHighScore = readLine.question(chalk.blue.bold('Do you want to the top scorers?(Yes/No)\n'))
    if (askForHighScore.toLowerCase() === "yes") {
        let highScores = [
            {
                name: "Kamran",
                score: 3,
            },

            {
                name: "Omair",
                score: 2,
            },
        ]

        highScores.forEach((score) => console.log(chalk.blue.bold(score.name + " : " + score.score)))
        console.log(chalk.red.inverse("Check out the high scores, if you should be there ping me and I'll update it\n"));
    }
}

welcome(name)
game()
showScores()
console.log(chalk.blue.bold("Thank you for participating"))