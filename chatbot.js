const qaPairs = [
  { question: "What is your name?", answer: "My name is Chatbot." },
  {
    question: "How can I help you?",
    answer: "I can assist you with your queries.",
  },
  { question: "What is the weather today?", answer: "The weather is sunny." },
];

const sendMessageBtn = document.getElementById("sendMessage");
const userInput = document.getElementById("userInput");
const messageDisplayArea = document.getElementById("messageDisplayArea");

sendMessageBtn.addEventListener("click", function () {
  const userMessage = userInput.value;
  if (userMessage) {
    const userMessageDiv = document.createElement("div");
    userMessageDiv.className = "userMessage";
    userMessageDiv.textContent = userMessage;
    messageDisplayArea.appendChild(userMessageDiv);

    userInput.value = "";

    const botResponse = getResponse(userMessage);
    const botMessageDiv = document.createElement("div");
    botMessageDiv.className = "botMessage";
    botMessageDiv.textContent = botResponse;
    messageDisplayArea.appendChild(botMessageDiv);
  }
});

function getResponse(userQuestion) {
  const cleanedUserQuestion = userQuestion
    .toLowerCase()
    .replace(/[^a-zA-Z0-9 ]/g, "");

  for (const pair of qaPairs) {
    const cleanedPredefinedQuestion = pair.question
      .toLowerCase()
      .replace(/[^a-zA-Z0-9 ]/g, "");
    if (
      cleanedUserQuestion.includes(cleanedPredefinedQuestion) ||
      cleanedPredefinedQuestion.includes(cleanedUserQuestion)
    ) {
      return pair.answer;
    }
  }

  return "Try another question";
}