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


screenshots:
<img width="1887" height="1012" alt="image" src="https://github.com/user-attachments/assets/276c9540-51d5-4f19-8183-47a8e103a1d9" />
Shelf Life Monitoring:
<img width="1911" height="1035" alt="image" src="https://github.com/user-attachments/assets/208e8bf6-55d5-4779-ad48-8c9cb79ec74a" />
Buyer Requests:
<img width="1908" height="1009" alt="image" src="https://github.com/user-attachments/assets/5d46bf6c-75fc-4633-bf4d-c01d16506ade" />
Expense:
<img width="1914" height="1100" alt="image" src="https://github.com/user-attachments/assets/c7e07143-510e-4e60-b8fe-c691dd19168a" />
Schemes :
<img width="1919" height="1021" alt="image" src="https://github.com/user-attachments/assets/2a9f248e-3d4c-4628-bf7a-c72abaf9627c" />
Ai advisory Bot:
<img width="1919" height="1021" alt="image" src="https://github.com/user-attachments/assets/c51ee267-d9c3-43ea-b175-9166bd44813f" />
Farmer Talk:
<img width="1916" height="1035" alt="image" src="https://github.com/user-attachments/assets/51c11c0a-6eb8-4aad-afcd-4144aa313201" />







