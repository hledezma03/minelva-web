# Minelva Los Morros - Agente Conversacional para Atención al Cliente

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.115-009688?logo=fastapi)](https://fastapi.tiangolo.com/)
[![Python](https://img.shields.io/badge/Python-3.10-3776AB?logo=python)](https://www.python.org/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel)](https://vercel.com/)

## Descripción del Proyecto

Este proyecto consiste en el desarrollo de un sitio web profesional y un agente conversacional (chatbot) para la empresa Minelva Los Morros C.A., ubicada en San Juan de los Morros, Estado Guárico, Venezuela.

El objetivo principal es automatizar la atención al cliente, gestionar consultas frecuentes y facilitar el proceso de pedidos de agua potable, botellones y dispensadores, reduciendo la carga operativa del personal y mejorando la experiencia del usuario.

## Objetivos del Proyecto

- Implementar un agente conversacional basado en inteligencia artificial
- Desarrollar una página web responsiva con la identidad de la marca
- Automatizar la gestión de pedidos y consultas frecuentes
- Reducir tiempos de espera y mejorar la experiencia del cliente

## Tecnologías Utilizadas

### Frontend

- React 18.x: Biblioteca para construir la interfaz de usuario
- Vite 5.x: Empaquetador y servidor de desarrollo
- Tailwind CSS 3.x: Framework de CSS utilitario
- React Intersection Observer: Animaciones al hacer scroll

### Backend

- FastAPI 0.115.x: Framework web para construir la API
- Python 3.10+: Lenguaje de programación
- Uvicorn: Servidor ASGI

### Inteligencia Artificial (Fase 2)

- Google Gemini API: Modelo de lenguaje para respuestas inteligentes
- LangChain: Orquestación de flujos de conversación

### Despliegue y Control de Versiones

- Vercel: Despliegue del frontend
- Render: Despliegue del backend
- Git y GitHub: Control de versiones

## Estructura del Proyecto

minelva-app/
├── backend/
│ ├── main.py
│ └── requirements.txt
├── src/
│ ├── components/
│ │ ├── layout/
│ │ ├── sections/
│ │ └── ui/
│ ├── data/
│ ├── assets/
│ ├── App.jsx
│ └── main.jsx
├── public/
├── index.html
├── package.json
├── tailwind.config.js
└── README.md

## Instalación y Ejecución Local

### Requisitos previos

- Node.js (versión 18 o superior)
- Python (versión 3.10 o superior)
- Git

### Clonar el repositorio

git clone https://github.com/hledezma910/minelva-app.git
cd minelva-app

### Configurar el Frontend

npm install
npm run dev

El frontend estará disponible en http://localhost:5173

### Configurar el Backend

cd backend
python -m venv venv
venv\Scripts\activate
pip install fastapi uvicorn
python -m uvicorn main:app --reload --port 8000

El backend estará disponible en http://localhost:8000

## Funcionalidades del Chatbot

- Interfaz de chat flotante: Botón flotante con ventana de chat (Implementado)
- Respuestas predefinidas: Responde a palabras clave como hola, precios, horarios (Implementado)
- Conexión frontend-backend: Comunicación mediante API REST (Implementado)
- Integración con Gemini: Respuestas inteligentes con IA (Próxima fase)
- Memoria de conversación: Contexto de la conversación (Próxima fase)
- Gestión de pedidos: Recolección de datos para pedidos a domicilio (Próxima fase)

## Autor

Héctor Ledezma
Estudiante de Ingeniería en Informática
Universidad Nacional Experimental de los Llanos Centrales Rómulo Gallegos (UNERG)
C.I: 28.176.276
Email: hledezma910@gmail.com

## Tutores

- Tutor Académico: Ing. Soleydi Peña
- Tutor Metodológico: Prof. Merly Orta

## Licencia

Este proyecto es parte de un trabajo especial de grado. Todos los derechos reservados.

## Enlaces

- Repositorio en GitHub: https://github.com/hledezma910/minelva-app
- Sitio web desplegado: https://minelva-app.vercel.app

## Agradecimientos

- A la empresa Minelva Los Morros por proporcionar la información necesaria
- A los tutores académico y metodológico por su guía y apoyo
- A la Universidad Nacional Experimental Rómulo Gallegos por la formación académica
