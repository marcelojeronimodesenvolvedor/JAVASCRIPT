const result = document.querySelector('.result')
const jogador = document.querySelector('.jogador')
const alexa = document.querySelector('.alexa')

let jogadorNumber = 0
let alexaNumber = 0

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())

}

const playMachine = () => {

    const choices = ['Pedra', 'Papel', 'Tesoura']

    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]


}

const playTheGame = (human, machine) => {

    if (human === machine) {

        result.innerHTML = "Deu Empate "

    } else if (
        (human === 'Pedra' && machine === 'Tesoura') ||
        (human === 'Tesoura' && machine === 'Papel') ||
        (human === 'Papel' && machine === 'Pedra')
    ) {
        result.innerHTML = " Você Ganhou! "
        jogadorNumber++
        jogador.innerHTML = jogadorNumber
    } else {

        result.innerHTML = " Alexa Ganhou "

        alexaNumber++
        alexa.innerHTML = alexaNumber

    }



}