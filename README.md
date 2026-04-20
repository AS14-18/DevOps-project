# 🔐 PassOp

*A full-stack password manager with modern cloud deployment*

---

## 🎯 Problem Statement

Managing passwords securely is a common challenge. Many users store credentials in unsafe ways such as notes or browsers, which can lead to security risks.

PassOp provides a simple and centralized solution to store, manage, and retrieve passwords efficiently.

---

## 💡 Solution Overview

PassOp is a **full-stack MERN application** where:

* 🎨 Frontend is built using React (Vite)
* ⚡ Backend is built using Node.js and Express
* 💾 Database is MongoDB Atlas (cloud)

---

## 🏗️ System Architecture

```
Frontend (React)  →  Backend (Express API)  →  MongoDB Atlas
```

---

## 📁 Project Structure

```
PASSOP-MONGO/
├── src/                # React frontend
│   ├── components/
│   └── App.jsx
├── backend/            # Express backend
│   └── server.js
├── package.json        # Frontend config
└── vite.config.js
```

---

## ⚙️ Frontend

* Built using **React + Vite**
* Uses **component-based architecture**
* Handles user input and API requests
* Uses environment variable:

```
VITE_API_URL
```

to connect with backend

---

## ⚡ Backend

* Built using **Node.js + Express**
* Provides REST APIs:

  * GET → Fetch passwords
  * POST → Save password
  * DELETE → Remove password
* Connects to MongoDB Atlas

---

## 💾 Database

* **MongoDB Atlas (Cloud Database)**
* Stores user credentials in a collection
* Allows remote access from deployed backend

---

## 🚀 Deployment (Key Highlight)

| Service  | Platform      |
| -------- | ------------- |
| Frontend | Vercel        |
| Backend  | Render        |
| Database | MongoDB Atlas |

---

## 🔄 Continuous Deployment

This project follows **Continuous Deployment (CD)**:

```
git push → GitHub → auto deploy on Vercel & Render
```

* No manual deployment required
* Every push updates the live application automatically

---

## ⚠️ Challenges Faced

### 1. MongoDB Connection Issues

* Fixed using correct connection string and network access

### 2. Environment Variables

* Managed using platform-specific env configs

### 3. CORS Issues

* Resolved by configuring backend CORS policy

### 4. Deployment Errors

* Fixed port binding and server configuration for cloud environment

---

## 🧪 Features

* Add password
* View stored credentials
* Delete password
* Persistent storage

---

## 🏁 Conclusion

PassOp demonstrates:

* Full-stack development using MERN
* API integration
* Cloud deployment
* Basic DevOps concepts (Continuous Deployment)
