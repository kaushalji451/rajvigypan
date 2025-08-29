# Rajvigypan Official Website Clone (MERN Stack)

This is a full-stack clone of [https://rajavigyapan.com/](https://rajavigyapan.com/), built using the MERN stack (Next.js, Express.js, Node.js). The project aims to recreate the site’s look and functionality with modern technologies, responsive design, and a scalable backend.

---

## 📌 Table of Contents

- [Rajvigypan Official Website Clone (MERN Stack)]
- (#Rajvigypan-Official-Website-Clone-MERN-Stack)
  - [📌 Table of Contents](#-table-of-contents)
  - [🚀 Demo](#-demo)
  - [✨ Features](#-features)
  - [🛠️ Tech Stack](#️-tech-stack)
  - [📁 Folder Structure](#-folder-structure)
  - [⚙️ Setup Instructions](#️-setup-instructions)
    - [Prerequisites](#prerequisites)
    - [1. Clone the repository](# https://github.com/kaushalji451/rajvigypan.git)
    - [2. Setup Backend (server)](# pnpm add)
    - [3. Setup Frontend (client)](# pnpm add)
  - [📜 Available Scripts](#-available-scripts)
    - [Frontend](#frontend)
    - [Backend](#backend)
  - [🌐 API Endpoints](#-api-endpoints)
  - [🖼️ Screenshots](#️-screenshots)
  - [☁️ Deployment](# https://rajvigypan.vercel.app/)
  - [🔒 Environment Variables](#-environment-variables)
    - [Backend (`backend/.env`)](#backend-serverenv)
    - [Frontend (`frontend/.env`)](#frontend-clientenv)
  - [📜 License](#-license)

---

## 🚀 Demo

> https://rajvigypan.vercel.app/

---

## ✨ Features

- Full Next.js frontend with Tailwind CSS for styling and for animation Motion
- Express.js backend with RESTful APIs
- Home, About, Services, Contact and 404 pages
- Clean, responsive, and mobile-friendly layout
- Modular and maintainable code structure

---

## 🛠️ Tech Stack

| Category   | Technology |
|------------|------------|
| Frontend   | Next.js, Tailwind CSS, Motion Animation |
| Backend    | Node.js, Express.js |
| Tools      | Axios, Dotenv, Nodemon, PostCSS, Pnpm, Git |
| Deployment | Vercel (frontend), Render (backend) |

---

## 📁 Folder Structure

```
RAJAVIGYPANA/
├── frontend/          # React frontend
│   ├── public/
│   └── src/
│       ├── assets/  # Images
│       ├── pages/   # Page-level components
│       ├── components/
├── backend/          # Express backend
│   ├── routes/
│   ├── models/
│   └── index.js
├── .env             # Backend env variables
├── README.md
```

---

## ⚙️ Setup Instructions

### Prerequisites

- Node.js (v16+ recommended)
- npm / yarn / pnpm

### 1. Clone the repository

```bash
git clone https://github.com/kaushalji451/rajvigypan.git
```

### 2. Setup Backend (server)

```bash
cd backed
pnpm install
cp .env.example .env     # or create your own .env
node app.js              # uses nodemon
```

> Example `.env`:
```
PORT=3000
```

### 3. Setup Frontend (client)

```bash
cd frontend
pnpm install
pnpm run dev              # starts Vite dev server
```

> Optional `.env` for frontend:
```
VITE_API_BASE_URL=http://localhost:3000
```

---

## 📜 Available Scripts

### Frontend

| Command       | Description                      |
|---------------|----------------------------------|
| `pnpm run dev` | Start Next.js        |
| `pnpm run build` | Build for production           |
| `pnpm run preview` | Preview built site locally  |

### Backend

| Command        | Description                   |
|----------------|-------------------------------|
| `node index.js`  | Start server with Nodemon     |
| `pnpm start`    | Start server (no hot reload)  |

---

## 🌐 API Endpoints

| Method | Endpoint         | Description             |
|--------|------------------|-------------------------|
| GET    | `/`      |   |
| POST   | `/`   |   |

---

## 🖼️ Screenshots

Coming soon...

---

## 🔒 Environment Variables

### Backend (`server/.env`)

| Variable     | Description                     |
|--------------|---------------------------------|
| `PORT`       | Port number (default: 5000)     |

### Frontend (`client/.env`)

| Variable              | Description                     |
|-----------------------|---------------------------------|
| `VITE_API_BASE_URL`   | API base URL for Axios calls    |

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

> Feel free to fork or contribute. Pull requests are welcome!
