# 💼 GrowthProAI – Local Business Dashboard

A sleek, responsive full-stack web application that simulates how small businesses can preview their Google ratings, reviews, and AI-generated SEO headlines—built for the GrowthProAI Full Stack Intern assignment.

## 🧰 Tech Stack

- **Frontend**: React, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express
- **State Management**: React Context + Hooks
- **API Queries**: React Query

---

## 🚀 Features

- 🔎 Business form input for name and location  
- 📊 Simulated Google Rating and review count  
- ✨ AI-powered SEO headline generation  
- 🔁 Regenerate headline functionality  
- 🌀 Loading spinners and smooth UI transitions  
- 🧠 Global context for managing shared state  
- 📱 Responsive UI with glassmorphism aesthetics  

---

## 📷 Preview

![Screenshot 2025-07-05 193053](https://github.com/user-attachments/assets/19041c3b-0039-489e-96a7-ec618c171cc1)
![Screenshot 2025-07-05 193124](https://github.com/user-attachments/assets/1a1427b2-b699-498d-993a-e60911999552)


---

## 📦 Installation

### Backend

```bash
cd backend
npm install
npm start
```

```
Server will run at http://localhost:5000
```

### Backend

```bash
cd frontend
npm install
npm start
```
```
Client will run at http://localhost:3000

```
> Make sure to update fetch URLs in frontend if backend is deployed separately

## 🛠 API Endpoints
## POST /business-data
### Request:
```
{ "name": "Cake & Co", "location": "Mumbai" }
```

### Response:
```
{
  "rating": 4.3,
  "reviews": 127,
  "headline": "Why Cake & Co is Mumbai's Sweetest Spot in 2025"
}
```

## GET /regenerate-headline?name=...&location=...
### Returns a fresh headline from a predefined list

```
{
  "headline": "Why Cake & Co is Mumbai's Sweetest Spot in 2025"
}
```

## ✅ Bonus Features Implemented
- 🚦 Loading animations with delayed reveal
- 🧭 Form validation to prevent empty submission
- 🧠 Global state logic with dynamic merging
- 🎬 Smooth Framer Motion mounting & headline transitions


## 🌐 Live Demo (Optional)
- Frontend: [Vercel Link Here](https://growthpro-local-dashboard.vercel.app/)
- Backend: [Render Link Here](https://growthpro-local-dashboard.onrender.com/)




