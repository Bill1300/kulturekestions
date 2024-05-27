let questionsMain, questions;
const quizContainer = document.getElementById('quiz-container');
const submitButton = document.getElementById('submit-btn');
const dev = document.querySelector('.dev');
let currentQuestionIndex = 0;
let correctAnswersCount = 0;

dev.style.display = 'none';
quizContainer.innerHTML = `
<div class="loading-tag">
  <span class="loader"></span>
  <span class="loading-text">Carregando</span>
</div>`;

submitButton.style.visibility = 'hidden';

function checkSelection() {
  const selectedAnswer = document.querySelector('input[name="question"]:checked');
  if (selectedAnswer) {
    submitButton.style.visibility = 'visible';
  } else {
    submitButton.style.visibility = 'hidden';
  }
}

function reloadQuestions() {
  questions = [...questionsMain];
  questions.sort(() => Math.random() - 0.5);
  correctAnswersCount = 0;
  currentQuestionIndex = 0;
}

function requestQuiz() {
  reloadQuestions();
  buildQuiz();
  submitButton.removeEventListener('click', checkAnswer);
  submitButton.addEventListener('click', checkAnswer);
}

function buildQuiz() {
  dev.style.display = 'block';
  const currentQuestion = questions[currentQuestionIndex];
  const questionDiv = document.createElement('div');
  questionDiv.classList.add('question');
  questionDiv.innerHTML = `
    <div class="row-header">
      <p class="tag-category">${currentQuestion.category}</p>
      <p class="tag-id">K${currentQuestion.id}</p>
    </div>
    <p>${currentQuestion.question}</p>
    <div class="options">
      ${currentQuestion.options.map((option, index) => `
        <input type="radio" id="option${index}" name="question" value="${option}">
        <label for="option${index}">${option}</label><br>
      `).join('')}
    </div>
  `;
  quizContainer.innerHTML = '';
  quizContainer.appendChild(questionDiv);

  const radioButtons = document.querySelectorAll('input[name="question"]');
  radioButtons.forEach(radioButton => {
    radioButton.addEventListener('change', () => {
      submitButton.style.visibility = 'visible';
    });
  });
  checkSelection();
}

function checkAnswer() {
  const selectedAnswer = document.querySelector('input[name="question"]:checked');
  if (selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedAnswer.value === currentQuestion.correct_answer;
    if (isCorrect) {
      correctAnswersCount++;
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        buildQuiz();
      } else {
        showResult(correctAnswersCount);
        submitButton.style.visibility = 'hidden';
      }
    } else {
      showResult(correctAnswersCount);
      submitButton.style.visibility = 'hidden';
    }
  } else {
    alert('Selecione uma resposta para continuar.');
  }
}

function resetData() {
  currentQuestionIndex = 0;
  correctAnswersCount = 0;
  submitButton.style.visibility = 'hidden';
}

function showResult(correctAnswersCount) {
  const resultContainer = document.createElement('div');
  resultContainer.classList.add('result');
  resetData();
  resultContainer.innerHTML = `
  <p>Você acertou ${correctAnswersCount} kestões.</p>
  <button class="button-tag" onclick="requestQuiz()">Jogar novamente</button>
  `;
  quizContainer.innerHTML = '';
  quizContainer.appendChild(resultContainer);
}

window.addEventListener('blur', () => {
  resetData();
  quizContainer.innerHTML = `
  <p>KultureKestions kancelada. Você acertou ${correctAnswersCount} kestões.</p>
  <button class="button-tag" onclick="requestQuiz()">Jogar novamente</button>
  `;
});

submitButton.addEventListener('click', checkAnswer);

fetch('./questions/questions.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Falha ao carregar arquivo JSON.');
    }
    return response.json();
  })
  .then(json => {
    if (!json || !json.quiz || json.quiz.length === 0) {
      throw new Error('Arquivo JSON inválido ou vazio.');
    }
    questionsMain = json.quiz;
    requestQuiz();
  })
  .catch(error => {
    console.error('Erro ao carregar arquivo JSON:', error);
  });
