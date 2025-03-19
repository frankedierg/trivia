const questions = [
    { question: "¿Cuál es la capital de Colombia?", options: ["Medellín", "Cali", "Bogotá", "Barranquilla"], correct: 2 },
    { question: "¿En qué año se firmó la independencia de Colombia?", options: ["1810", "1820", "1830", "1840"], correct: 0 },
    { question: "¿Cuál es el río más largo de Colombia?", options: ["Río Magdalena", "Río Cauca", "Río Amazonas", "Río Putumayo"], correct: 3 },
    { question: "¿Cuál es el ave nacional de Colombia?", options: ["Cóndor de los Andes", "Águila arpía", "Guacamaya", "Colibrí"], correct: 0 },
    { question: "¿Quién escribió 'Cien años de soledad'?", options: ["Pablo Neruda", "Gabriel García Márquez", "Jorge Isaacs", "Mario Vargas Llosa"], correct: 1 },
    { question: "¿En qué año se dió la batalla del Pantano de Vargas?", options: ["1810", "1819", "1830", "1845"], correct: 0 },
    { question: "¿Cuál es el departamento más grande de Colombia en extensión?", options: ["Antioquia", "Meta", "Amazonas", "Guaviare"], correct: 2 },
    { question: "¿Qué océanos rodean a Colombia?", options: ["Atlántico y Ártico", "Atlántico y Pacífico", "Pacífico y Índico", "Solo Atlántico"], correct: 1 },
    { question: "¿Cuál es el café más reconocido de Colombia?", options: ["Nariño", "Huila", "Cauca", "Todos los anteriores"], correct: 3 },
    { question: "¿Quién fue el libertador de Colombia?", options: ["Antonio Nariño", "Francisco de Paula Santander", "Simón Bolívar", "José María Córdoba"], correct: 2 },
    { question: "¿Cuál es la moneda oficial de Colombia?", options: ["Peso colombiano", "Dólar", "Euro", "Bolívar"], correct: 0 },
    { question: "¿Cuál es el principal producto de exportación de Colombia?", options: ["Petróleo", "Banano", "Café", "Esmeraldas"], correct: 0 },
    { question: "¿Cuál es la ciudad más poblada de Colombia?", options: ["Medellín", "Cali", "Bogotá", "Barranquilla"], correct: 2 },
    { question: "¿Qué es la 'Bandeja Paisa'?", options: ["Un plato típico", "Un baile", "Una región", "Un río"], correct: 0 },
    { question: "¿Qué escritor colombiano ganó el Premio Nobel de Literatura?", options: ["Álvaro Mutis", "Jorge Isaacs", "Gabriel García Márquez", "Fernando Vallejo"], correct: 2 },
    { question: "¿Cuál es la flor nacional de Colombia?", options: ["Rosa", "Orquídea", "Girasol", "Lirio"], correct: 1 },
    { question: "¿Cuál es el equipo de fútbol con más títulos en Colombia?", options: ["Atlético Nacional", "Millonarios", "América de Cali", "Santa Fe"], correct: 0 },
    { question: "¿Cuál es el festival folclórico más importante de Colombia?", options: ["Festival Vallenato", "Carnaval de Barranquilla", "Feria de Cali", "Festival de Teatro de Bogotá"], correct: 1 },
    { question: "¿En qué ciudad se encuentra la Ciudad Perdida?", options: ["Cartagena", "Santa Marta", "Leticia", "Popayán"], correct: 1 },
    { question: "¿Cuál es el nombre de la montaña más alta de Colombia?", options: ["Pico Cristóbal Colón", "Nevado del Ruiz", "Cerro de Monserrate", "Sierra de la Macarena"], correct: 0 }
];


let currentQuestion = 0;
let selectedAnswer = null;

function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question").textContent = q.question;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    q.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => selectAnswer(index);
        optionsDiv.appendChild(btn);
    });
    document.getElementById("nextBtn").disabled = true;
}

function selectAnswer(index) {
    selectedAnswer = index;
}

function checkAnswer() {
    if (selectedAnswer === questions[currentQuestion].correct) {
        document.getElementById("nextBtn").disabled = false;
        alert("¡Respuesta correcta! continúa con la siguiente pregunta");
    } else {
        alert("Respuesta incorrecta, intenta de nuevo.");
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        alert("¡Felicidades! Has completado la trivia.");
    }
}

loadQuestion();