const questions = [

    {
        question:
        "Você recebe uma mensagem dizendo: “Parabéns! Você ganhou R$ 2.000. Clique neste link para receber seu prêmio”. O que você faz?",

        answers: [
            "Clico imediatamente para receber o prêmio.",
            "Ignoro a mensagem e verifico se a promoção realmente existe.",
            "Envio meus dados pessoais para confirmar o prêmio."
        ],

        correct: 1,

        explanation:
        "Mensagens inesperadas prometendo prêmios podem ser golpes. Antes de clicar, procure informações nos canais oficiais da empresa."
    },


    {
        question:
        "Uma pessoa liga dizendo ser do banco e pede o código que chegou no seu celular. Qual atitude é mais segura?",

        answers: [
            "Informo o código, porque a pessoa disse ser do banco.",
            "Passo somente o código, mas não informo minha senha.",
            "Não forneço o código e procuro o banco pelos canais oficiais."
        ],

        correct: 2,

        explanation:
        "Códigos de segurança são pessoais. Bancos e instituições sérias não devem pedir que você informe códigos recebidos por SMS ou aplicativo."
    },


    {
        question:
        "Você encontra uma loja online com um produto muito barato, mas o site parece estranho. O que deve fazer?",

        answers: [
            "Comprar rapidamente antes que o preço aumente.",
            "Verificar a loja, sua reputação e os dados do site antes de comprar.",
            "Enviar dinheiro diretamente para garantir o produto."
        ],

        correct: 1,

        explanation:
        "Preços muito abaixo do normal podem ser um sinal de alerta. Pesquise a empresa e confira informações antes de realizar qualquer pagamento."
    },


    {
        question:
        "Você recebe um QR Code enviado por uma pessoa desconhecida dizendo que é para receber dinheiro. O que fazer?",

        answers: [
            "Escanear imediatamente.",
            "Compartilhar o QR Code com amigos para saber se é seguro.",
            "Não escanear e confirmar a informação por um canal oficial."
        ],

        correct: 2,

        explanation:
        "QR Codes podem direcionar para páginas falsas ou pagamentos indevidos. Nunca escaneie códigos desconhecidos sem verificar a origem."
    },


    {
        question:
        "Um amigo manda uma mensagem pelo WhatsApp pedindo dinheiro com urgência. Qual é a melhor atitude?",

        answers: [
            "Fazer o PIX imediatamente porque é um amigo.",
            "Confirmar a identidade da pessoa por ligação ou outro meio.",
            "Pedir os dados bancários e transferir sem confirmar."
        ],

        correct: 1,

        explanation:
        "Contas podem ser invadidas ou números podem ser falsificados. Confirme pessoalmente a identidade antes de realizar qualquer transferência."
    }

];


let currentQuestion = 0;
let score = 0;
let answered = false;


const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const feedbackElement = document.getElementById("feedback");

const scoreElement = document.getElementById("score");
const questionNumber = document.getElementById("questionNumber");
const progressPercent = document.getElementById("progressPercent");
const progressBar = document.getElementById("progressBar");

const nextButton = document.getElementById("nextButton");

const quizElement = document.getElementById("quiz");
const resultElement = document.getElementById("result");

const finalScore = document.getElementById("finalScore");
const resultMessage = document.getElementById("resultMessage");


function loadQuestion() {

    answered = false;

    const question = questions[currentQuestion];

    questionElement.textContent = question.question;

    answersElement.innerHTML = "";

    feedbackElement.className = "feedback";
    feedbackElement.innerHTML = "";

    nextButton.style.display = "none";


    questionNumber.textContent =
        `Pergunta ${currentQuestion + 1} de ${questions.length}`;


    const percent =
        ((currentQuestion + 1) / questions.length) * 100;

    progressBar.style.width = percent + "%";

    progressPercent.textContent = percent + "%";


    question.answers.forEach((answer, index) => {

        const button = document.createElement("button");

        button.className = "answer";

        button.textContent =
            `${String.fromCharCode(65 + index)} — ${answer}`;

        button.onclick = () => checkAnswer(index, button);

        answersElement.appendChild(button);

    });

}


function checkAnswer(selected, selectedButton) {

    if (answered) return;

    answered = true;

    const question = questions[currentQuestion];

    const buttons =
        document.querySelectorAll(".answer");


    buttons.forEach(button => {
        button.disabled = true;
    });


    if (selected === question.correct) {

        score++;

        scoreElement.textContent = score;

        selectedButton.classList.add("correct");

        feedbackElement.className =
            "feedback show correct";

        feedbackElement.innerHTML =
            `<strong>✅ Muito bem!</strong><br>${question.explanation}`;

    } else {

        selectedButton.classList.add("wrong");

        buttons[question.correct].classList.add("correct");

        feedbackElement.className =
            "feedback show wrong";

        feedbackElement.innerHTML =
            `<strong>⚠️ Atenção!</strong><br>${question.explanation}`;
    }


    nextButton.style.display = "inline-block";


    if (currentQuestion === questions.length - 1) {

        nextButton.textContent = "Ver meu resultado 🏆";

    } else {

        nextButton.textContent = "Próxima pergunta →";

    }

}


function nextQuestion() {

    currentQuestion++;

    if (currentQuestion >= questions.length) {

        showResult();

        return;

    }

    loadQuestion();

}


function showResult() {

    quizElement.classList.add("hidden");

    resultElement.classList.remove("hidden");

    finalScore.textContent = score;


    if (score === 5) {

        resultMessage.textContent =
            "🏆 Excelente! Você está muito atento aos golpes digitais.";

    } else if (score >= 3) {

        resultMessage.textContent =
            "👏 Muito bom! Você já sabe reconhecer vários sinais de golpe.";

    } else {

        resultMessage.textContent =
            "💡 Continue aprendendo! Informação ajuda a evitar golpes.";

    }

}


function restartGame() {

    currentQuestion = 0;

    score = 0;

    scoreElement.textContent = "0";

    resultElement.classList.add("hidden");

    quizElement.classList.remove("hidden");

    loadQuestion();

}


loadQuestion();
