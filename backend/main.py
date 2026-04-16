from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

# Crear la aplicación FastAPI
app = FastAPI(title="API del Chatbot Minelva", description="Backend para el agente conversacional", version="1.0.0")

# Configurar CORS (para permitir que el frontend se comunique con el backend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # En producción, esto debería ser la URL de tu frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Modelo de datos para el mensaje
class Mensaje(BaseModel):
    texto: str
    historial: List[dict] = []

# Ruta de prueba (para verificar que el backend funciona)
@app.get("/")
def read_root():
    return {"mensaje": "API del Chatbot Minelva funcionando correctamente"}

# Ruta para el chat
@app.post("/chat")
def chat(mensaje: Mensaje):
    texto_usuario = mensaje.texto.lower()
    
    # Respuestas predefinidas (por ahora)
    if "hola" in texto_usuario or "buenas" in texto_usuario:
        respuesta = "¡Hola! Bienvenido a Minelva Los Morros. ¿En qué puedo ayudarte? Puedo informarte sobre precios, horarios, servicios o pedidos a domicilio."
    
    elif "precio" in texto_usuario or "cuesta" in texto_usuario:
        respuesta = "Nuestros precios son: Recarga de botellón: consulta por WhatsApp, Botellón nuevo: consulta, Dispensadores: desde consulta. Para precios exactos, contáctanos directamente por WhatsApp al 0412-0336537."
    
    elif "horario" in texto_usuario:
        respuesta = "Nuestro horario de atención es: Lunes a Sábado de 7:00 am a 6:30 pm, Domingos de 7:00 am a 2:30 pm."
    
    elif "servicio" in texto_usuario or "ofrecen" in texto_usuario:
        respuesta = "Ofrecemos: Recarga de botellones, Venta de botellones nuevos (varios colores y presentaciones), Sanitización de botellones, Servicio delivery, Servicio para empresas."
    
    elif "ubicacion" in texto_usuario or "direccion" in texto_usuario or "donde" in texto_usuario:
        respuesta = "Estamos ubicados en Av. Los Llanos, Edif. Solitario, diagonal a los Tribunales, San Juan de los Morros."
    
    elif "pedido" in texto_usuario or "domicilio" in texto_usuario or "delivery" in texto_usuario:
        respuesta = "¡Claro! Para hacer un pedido a domicilio, necesito que me proporciones: 1) Nombre completo, 2) Dirección de entrega, 3) Teléfono de contacto, 4) Producto que deseas (recarga o botellón nuevo). ¿Me puedes dar tu nombre?"
    
    elif "gracias" in texto_usuario:
        respuesta = "¡Gracias a ti! No dudes en contactarnos si necesitas algo más. ¡Que tengas un excelente día!"
    
    elif "adios" in texto_usuario or "chao" in texto_usuario:
        respuesta = "¡Hasta luego! Recuerda que Minelva Los Morros está para servirte. ¡Que tengas un buen día!"
    
    else:
        respuesta = "Gracias por tu mensaje. Por favor, contáctanos directamente por WhatsApp al 0412-0336537 para más información, o escribe 'hola' para ver las opciones disponibles."
    
    return {"respuesta": respuesta}

# Para ejecutar el servidor localmente
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)