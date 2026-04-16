import React, { useState } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "¡Hola! Soy el asistente virtual de Minelva Los Morros. ¿En qué puedo ayudarte?",
      sender: "bot",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() === "") return;

    // Agregar mensaje del usuario
    const userMessage = { text: inputValue, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    const userText = inputValue;
    setInputValue("");
    setIsLoading(true);

    try {
      // Enviar mensaje al backend
      const response = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          texto: userText,
          historial: messages.slice(-5), // Envía las últimas 5 interacciones para contexto
        }),
      });

      const data = await response.json();

      // Agregar respuesta del bot
      const botMessage = { text: data.respuesta, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error al conectar con el backend:", error);
      const errorMessage = {
        text: "Lo siento, estoy teniendo problemas para conectarme. Por favor, intenta más tarde o contáctanos directamente por WhatsApp.",
        sender: "bot",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Botón flotante del chatbot */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-[#0077B6] text-white p-4 rounded-full shadow-lg hover:bg-[#005f8f] transition z-50"
      >
        💬
      </button>

      {/* Ventana del chatbot */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-xl shadow-2xl flex flex-col z-50 border border-gray-200 overflow-hidden">
          {/* Cabecera */}
          <div className="bg-[#0077B6] text-white p-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span>💧</span>
              <span className="font-semibold">Asistente Minelva</span>
            </div>
            <button
              onClick={toggleChat}
              className="text-white hover:text-gray-200"
            >
              ✕
            </button>
          </div>

          {/* Área de mensajes */}
          <div className="flex-1 p-3 overflow-y-auto bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-3 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-2 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-[#0077B6] text-white rounded-br-none"
                      : "bg-gray-200 text-gray-800 rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-200 text-gray-800 p-2 rounded-lg rounded-bl-none">
                  <div className="flex gap-1">
                    <span className="animate-bounce">●</span>
                    <span className="animate-bounce delay-100">●</span>
                    <span className="animate-bounce delay-200">●</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Campo de entrada */}
          <div className="border-t p-2 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Escribe tu mensaje..."
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:border-[#0077B6]"
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              className="bg-[#0077B6] text-white px-3 py-2 rounded-lg hover:bg-[#005f8f] transition"
              disabled={isLoading}
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
