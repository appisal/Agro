# AgroVision: Smart Farming System

AgroVision is a comprehensive, full-stack Smart Farming System designed to help farmers optimize their yield, manage their inventory, and track the lifecycle and shelf life of their crops using intelligent algorithms.

## 🚀 Features

* **🌱 Smart Crop Planning**: An intelligent recommendation engine that analyzes real-time weather (temperature & humidity), land area, budget, and seasons to suggest the most profitable and lowest-risk crops. It also accounts for crop rotation.
* **⏳ Shelf Life Monitoring**: Tracks post-harvest crops in storage. Automatically calculates the freshness of the crop based on internal shelf life datasets and provides visual alerts (SAFE, WARNING, CRITICAL) so farmers know exactly when to sell to avoid spoilage.
* **📊 Lifecycle & Expense Tracking**: Records daily expenses, monitors physical crop growth stages, and predicts revenue dynamically.
* **🤖 AI Chatbot Assistant**: Built with Langchain & HuggingFace to provide on-the-spot agricultural advice.
* **🔐 Secure Authentication**: Integrated user login and Google OAuth to allow for separate administrative controls.
* **☁️ Weather Integration**: Utilizes live geolocation to fetch real-time climate telemetry straight to the crop planning dashboards.

## 💻 Technology Stack

* **Frontend**: React, TypeScript, Tailwind CSS, Vite, Framer Motion, Recharts
* **Backend**: Node.js, Express.js
* **Database**: MongoDB (Mongoose)

## 🛠️ Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <repository-url>
   cd agrovision-smart-farming-system-main
   ```

2. **Setup the Backend**:
   ```bash
   cd backend
   npm install
   ```
   *Create a `.env` file in the `backend` directory with your MongoDB URI and necessary API keys.*

3. **Setup the Frontend**:
   ```bash
   cd ../frontend
   npm install
   ```
   *Create a `.env` file in the `frontend` directory with your `VITE_API_URL`.*

### Running the Application Locally

You will need two terminal windows to run both the frontend and backend servers.

**Terminal 1 (Backend API):**
```bash
cd backend
npm run dev
```
*The backend server will run on port 5000.*

**Terminal 2 (Frontend Client):**
```bash
cd frontend
npm run dev
```
*The frontend application will run on port 8080 (or as specified by Vite).*

## 📖 Structure

* `/backend/controllers`: Contains the core logic functions for tracking inventory, lifecycle, smart crop prediction, and shelf-life monitoring.
* `/backend/models`: Mongoose schemas defining our MongoDB tables (e.g. `CropPlan`, `StorageInventory`, `ShelfMonitoring`).
* `/backend/data`: JSON datasets containing hard-coded metrics for crops, expected yields, and their relative shelf life lengths.
* `/frontend/src/pages`: React pages (e.g. `CropPlanningPage.tsx`, `ShelfLifePage.tsx`) utilizing Tailwind utilities and animations for a smooth user experience.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. Feel free to check the issues page if you want to contribute.

## 📝 License

This project is open-source and available under the MIT License.
