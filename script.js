const storyElement = document.getElementById("story");
const choicesElement = document.getElementById("choices");

const story = [
    {
        text: "Você está em uma floresta escura. Há dois caminhos à sua frente.",
        choices: [
            { text: "Seguir o caminho da esquerda.", nextIndex: 1 },
            { text: "Seguir o caminho da direita.", nextIndex: 2 }
        ]
    },
    {
        text: "Você encontra uma cabana abandonada. O que você faz?",
        choices: [
            { text: "Entrar na cabana.", nextIndex: 3 },
            { text: "Continuar a jornada.", nextIndex: 4 }
        ]
    },
    {
        text: "Você encontra uma clareira com uma lua pálida no céu. O que você faz?",
        choices: [
            { text: "Aproximar-se da lua.", nextIndex: 5 },
            { text: "Voltar à floresta.", nextIndex: 6 }
        ]
    },
    {
        text: "Dentro da cabana, você encontra uma adaga e um livro antigo. Qual você pega?",
        choices: [
            { text: "Pegar a adaga.", nextIndex: 7 },
            { text: "Pegar o livro.", nextIndex: 8 }
        ]
    },
    // Continuação da história...
];

let currentIndex = 0;

function displayStory(index) {
    const currentStory = story[index];
    storyElement.textContent = currentStory.text;

    while (choicesElement.firstChild) {
        choicesElement.removeChild(choicesElement.firstChild);
    }

    currentStory.choices.forEach((choice, i) => {
        const button = document.createElement("button");
        button.textContent = choice.text;
        button.onclick = () => makeChoice(choice.nextIndex);
        choicesElement.appendChild(button);
    });
}

function makeChoice(nextIndex) {
    currentIndex = nextIndex;
    displayStory(currentIndex);
}

displayStory(currentIndex);
