const questions = [
  {
    question: "What is the brand and model of the power unit? ",
    image: "https://www.thebigredguide.com/img/products/400/lukas-p-650-4e-valve.jpg",
    options: ["LUKAS P650SG", "LUKAS PS650G", "LUKAS SP310", "LUKAS S311"],
    answer: "LUKAS P650SG"
  },
  {
    question: "What type of engine is it? ",
    image: "https://www.thebigredguide.com/img/products/400/lukas-p-650-4e-valve.jpg",
    options: ["1-stroke", "2-stroke", "3-stroke", "4-stroke"],
    answer: "4-stroke"
  },
  {
    question: "hydraulic oil tank volume? ",
    image: "https://www.thebigredguide.com/img/products/400/lukas-p-650-4e-valve.jpg",
    options: ["3.8l", "4.5l", "4.8l", "5.5l"],
    answer: "4.8l"
  },
   {
    question: "Motor Power Nominal Val?",
    image: "https://www.thebigredguide.com/img/products/400/lukas-p-650-4e-valve.jpg",
    options: ["4.2kW", "4.8kW", "5.2kW", "5.8kW"],
    answer: "4.2kW"
  },
   {
    question: "Weight?",
    image: "https://www.thebigredguide.com/img/products/400/lukas-p-650-4e-valve.jpg",
    options: ["36.5kg", "41kg", "45.5kg", "47.8kg"],
    answer: "36.5kg"
  },
   {
    question: "Working Pressure?",
    image: "https://www.thebigredguide.com/img/products/400/lukas-p-650-4e-valve.jpg",
    options: ["300bar", "500bar", "680bar", "700bar"],
    answer: "700bar"
  },
   {
    question: "Petrol Volume?",
    image: "https://www.thebigredguide.com/img/products/400/lukas-p-650-4e-valve.jpg",
    options: ["1.2l", "1.56l", "1.65l", "2.1l"],
    answer: "1.65l"
  },
   {
    question: "Length of Extension Hydraulic Hoses? ",
    image: "https://lukas.com/rescue/media/image/ed/6e/49/verlaengerungsschlauch_600x600.png",
    options: ["3m", "4m", "5m", "8m"],
    answer: "5m"
  },
   {
    question: "What is the brand and model of the hydraulic spreader",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE6Qy9lj5c9inddzsTDKf-GNXCAzA7igcjOifVScRFIkjU-GCzp8izHe_QIKwCGOd1XEM&usqp=CAU",
    options: ["LUKAS SP311", "LUKAS S310", "LUKAS SP310", "LUKAS P650SG"],
    answer: "LUKAS SP310"
  },
    {
    question: "Max spread?",
    image: "https://www.thebigredguide.com/img/products/400/lukas-sp-300-spreader.jpg",
    options: ["28.8 tons", "30.8 tons", "32.4 tons", "57.3 tons"],
    answer: "30.8 tons"
  },
  {
    question: "Min spread?",
    image: "https://www.thebigredguide.com/img/products/400/lukas-sp-300-spreader.jpg",
    options: ["4.2 tons", "4.6 tons", "4.7 tons", "5.8 tons"],
    answer: "4.7 tons"
  },
  {
    question: "Spreading Distance?",
    image: "https://www.thebigredguide.com/img/products/400/lukas-sp-300-spreader.jpg",
    options: ["33cm", "57.3cm", "64cm", "72cm"],
    answer: "72cm"
  },
  {
    question: "Pulling Force?",
    image: "https://www.thebigredguide.com/img/products/400/lukas-sp-300-spreader.jpg",
    options: ["4 tons", "4.2 tons", "4.7 tons", "5.2 tons"],
    answer: "4.2 tons"
  },
  {
    question: "Pulling Distance?",
    image: "https://www.thebigredguide.com/img/products/400/lukas-sp-300-spreader.jpg",
    options: ["57.3cm", "63.3cm", "68cm", "72cm"],
    answer: "57.3cm"
  },
  {
    question: "Squeezing Force?",
    image: "https://www.thebigredguide.com/img/products/400/lukas-sp-300-spreader.jpg",
    options: ["12.2 tons", "25.5 tons", "30.8 tons", "35 tons"],
    answer: "12.2 tons"
  },
  {
    question: "Weight?",
    image: "https://www.thebigredguide.com/img/products/400/lukas-sp-300-spreader.jpg",
    options: ["12.7kg", "13.7kg", "13.9kg", "19.9kg"],
    answer: "19.9kg"
  },



];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  document.getElementById('result').classList.remove('show');
  document.getElementById('restart').classList.remove('show');
  document.getElementById('quiz-box').classList.add('show');
  loadQuestion();
}

function loadQuestion() {
  const questionObj = questions[currentQuestion];
  document.getElementById('question').innerText = questionObj.question;

  const imgEl = document.getElementById('question-image');
  if (questionObj.image) {
    imgEl.src = questionObj.image;
    imgEl.style.display = 'block';
  } else {
    imgEl.style.display = 'none';
  }

  const optionsEl = document.getElementById('options');
  optionsEl.innerHTML = '';

  questionObj.options.forEach(option => {
    const btn = document.createElement('button');
    btn.innerText = option;
    btn.onclick = () => checkAnswer(btn, option);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(button, selected) {
  const options = document.querySelectorAll('#options button');
  const correct = questions[currentQuestion].answer;

  options.forEach(btn => {
    btn.disabled = true;
    if (btn.innerText === correct) {
      btn.style.backgroundColor = 'green';
    }
  });

  if (selected !== correct) {
    button.style.backgroundColor = 'red';
  } else {
    score++;
  }

  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }, 1000);
}

function showResult() {
  document.getElementById('quiz-box').classList.remove('show');
  document.getElementById('result').classList.add('show');
  document.getElementById('restart').classList.add('show');
  document.getElementById('result').innerText = `You scored ${score} out of ${questions.length}!`;
}

startQuiz();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js").then(() => {
    console.log("Service Worker Registered");
  });
}