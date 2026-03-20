🧠 Digital Memory Graph
AI-Powered Knowledge Management System
🚀 Overview

Digital Memory Graph is an intelligent note-taking system that transforms unstructured notes into a connected knowledge graph.
It uses AI to extract key concepts and a Graph Database to link ideas, helping users think, recall, and learn more effectively.

🎯 Problem

Most note-taking apps store data in isolation, making it difficult to:

Connect related concepts

Recall previously learned information

Explore knowledge efficiently

💡 Solution
This project creates a brain-like system where:

Notes are converted into structured data

Key topics are extracted automatically

Relationships are formed between concepts

Knowledge is visualized as an interactive graph

🏗️ Architecture
Frontend (React)
      ↓
Backend (Node.js / Express)
      ↓
Neo4j Graph Database
ontend: React.js

Backend: Node.js, Express.js

Database: Neo4j (Graph Database)

AI Integration: OpenAI API

Graph Visualization: React Force Graph

Deployment: Render (Backend), Vercel (Frontend), Neo4j Aura (DB)

🔑 Features
✅ Core Features

Create and manage notes

Store notes in a graph database

Automatic keyword extraction

Relationship creation between topics

🤖 AI Features

Extract important keywords from notes
Generate intelligent connections

(Optional) Summarize notes

📊 Visualization

Interactive graph view

Nodes represent topics/notes

Edges represent relationships


🛠️ Setup Instructions
🔹 Backend Setup
cd backend
npm install

Create .env file:

NEO4J_URI=your_uri
NEO4J_USER=your_user
NEO4J_PASSWORD=your_password
OPENAI_API_KEY=your_key

Run server:

node server.js
🔹 Frontend Setup
cd frontend
npm install
npm start
🌍 Deployment

Backend → Render

Frontend → Vercel

Database → Neo4j Aura

🔮 Future Enhancements

📄 PDF upload and parsing

🎤 Voice-based note input

🤖 AI Q&A over stored notes

📅 Smart revision reminders
      ↓
AI Layer (OpenAI API)

⚙️ Tech Stack
