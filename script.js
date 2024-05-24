function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    if (userInput.trim() === "") return;

    const chatlog = document.getElementById("chatlog");

    // Adicionar a mensagem do usuário no log
    const userMessage = document.createElement("div");
    userMessage.textContent = "Você: " + userInput;
    chatlog.appendChild(userMessage);

    // Limpar o campo de entrada
    document.getElementById("userInput").value = "";

    // Resposta do chatbot (simplesmente ecoando a pergunta do usuário)
    const botMessage = document.createElement("div");
    botMessage.textContent = "Bot: " + "Você perguntou sobre '" + userInput + "'. Estamos processando sua solicitação...";
    chatlog.appendChild(botMessage);

    // Rolagem automática para a última mensagem
    chatlog.scrollTop = chatlog.scrollHeight;
}