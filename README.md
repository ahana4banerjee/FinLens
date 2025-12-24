# FinLens — AI-Powered Personal Finance Manager

**FinLens** is a full-stack AI-driven personal finance platform that automates expense tracking, receipt processing, and financial insight generation using **Google Gemini AI**.

🔗 **Live Demo:** https://fin-lens-sooty.vercel.app/

---

## Problem Statement

Managing personal finances manually is:

- Time-consuming  
- Error-prone  
- Lacks intelligent insights  

FinLens solves this by combining **AI, automation, and analytics** into one seamless system.

---

## Key Capabilities

### 🧠 AI-Driven Intelligence (Google Gemini)

- Auto-generates money-saving tips  
- Detects spending patterns & risky habits  
- Provides actionable budget suggestions  

---

### 🧾 Smart Expense Management

- Add / edit / delete transactions  
- **AI Receipt Scanner** – Upload bill images and auto-extract data  
- **Bulk CSV Import & Delete** facilities   

---

### 📊 Data Visualization

- Income vs Expense overview  
- Category-wise spending analytics  
- Monthly trend analysis  

All insights rendered via interactive charts.

---

### ⏱ Automated Financial Reports

- Monthly scheduled summaries using **Node-Cron**  
- Dashboard alerts including:  
  - Total Income  
  - Total Expenses  
  - Available Balance  
  - AI-generated financial improvement tips  

---

## Tech Stack

### Frontend

- React + TypeScript  
- Tailwind CSS + ShadcnUI 
- Chart.js  
- Redux Toolkit  


### Backend

- Node.js + Express + TypeScript  
- JWT Authentication  
- MongoDB + Mongoose  
- Google Gemini API  
- Multer + Cloudinary (Receipt Uploads)  
- Node-Cron (Task Scheduling)  
- CSV Parser  

---

## Security

- Secure JWT based authentication  
- Protected API routes  
- Cloud-based receipt storage with signed uploads  

---

## System Architecture

```text
User
↓
Frontend (React + TS)
↓
Express API Gateway
↓
├─ Auth Service (JWT)
├─ Transaction Engine (CRUD + CSV)
├─ Receipt OCR + Gemini AI
├─ Analytics Engine
└─ Cron Scheduler (Monthly Reports)
↓
MongoDB
```

---

## Getting Started Locally

```bash
git clone https://github.com/yourusername/finlens.git
cd finlens
```

### Backend
```bash
cd backend
npm install
npm run dev
```
### Frontend
```bash
cd frontend
npm install
npm run dev
```
### Environment Variables

Create .env in backend:
```text
MONGO_URI=
JWT_SECRET=
GEMINI_API_KEY=
CLOUDINARY_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```
---
## Future Enhancements

- AI-based spending anomaly detection
- Multi-currency support
- Bank API auto-sync
- Voice-based transaction input

---
## Author

**Ahana Banerjee**  
Electronics & Communication Engineering  
JNTUH Hyderabad


