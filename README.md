
# 🚗 Uber Clone – Full-Stack Ride Hailing App

A responsive, modern Uber clone built using React 19, Google Maps API, and a secure Express + MongoDB backend. This application allows users to book rides, track drivers in real-time, and manage authentication—all with smooth animations and a clean UI.

---

## 🚀 Tech Stack

### 🔹 Frontend
- **React 19**  
- **React Router DOM** – Navigation and route handling  
- **@react-google-maps/api** – Google Maps & Geolocation  
- **GSAP / @gsap/react** – Advanced animations  
- **Axios** – API communication  
- **Remixicon** – Icons

### 🔹 Backend
- **Node.js & Express 5**  
- **MongoDB & Mongoose** – Database & ORM  
- **JWT** – Token-based authentication  
- **bcrypt** – Secure password hashing  
- **dotenv** – Environment variables  
- **cors** – CORS middleware  
- **cookie-parser** – Cookie management  
- **express-validator** – Request validation

---

## 📦 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/uber-clone.git
cd uber-clone
```

### 2. Install Backend Dependencies
```bash
cd server
npm install
```

### 3. Install Frontend Dependencies
```bash
cd ../client
npm install
```

---

## 🔐 Environment Variables

In `server/.env`, add:

```env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000
```

In `client/.env`, add:

```env
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

---

## 🧩 Features

- 📍 **Real-time Location Tracking** with Google Maps  
- 👤 **User Authentication** with JWT & bcrypt  
- 🛡️ **Secure API Endpoints** with token validation  
- 🧾 **Input Validation** using express-validator  
- 🚗 **Ride Booking Interface** with route display  
- 💻 **Admin-ready Backend** with Express & MongoDB  
- ✨ **GSAP Animations** for smooth transitions  
- 📱 **Responsive Design** with modern UI components

---

## 📂 Folder Structure

```
uber-clone/
├── client/              # React frontend
│   └── src/
│       ├── components/
│       ├── pages/
│       └── App.jsx
├── server/              # Express backend
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
└── .env
```

---

## 🧪 Development

Start the backend:
```bash
cd server
npm run dev
```

Start the frontend:
```bash
cd client
npm run dev
```

---

## 🤝 Contributing

Have a suggestion or found a bug? Contributions are welcome!  
Open an [issue](https://github.com/your-username/uber-clone/issues) or submit a pull request.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---
