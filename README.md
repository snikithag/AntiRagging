# Anti-Ragging Website

## Overview
This is a web-based portal for reporting ragging incidents, featuring a complaint form and email notifications. Built with React.js for the frontend, Node.js with Express.js for the backend, and MongoDB for data storage.

## Features
- Complaint form with real-time validation.
- Complaint list display.
- Email alerts to the anti-ragging committee.
- Responsive design.

## Technologies Used
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Additional Tools**: Nodemailer, Axios

## Installation and Setup

### Prerequisites
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Git](https://git-scm.com/)

### Steps
1. **Clone the Repository**
   ```bash
   git clone https://github.com/snikithag/AntiRagging.git
   cd AntiRagging
2. **Set Up the Backend**
cd server
npm install
node server.js
3. **Set Up the Frontend**
cd ../client
npm install
npm start

**Usage**
Students: Fill and submit the form at http://localhost:3000.
Management: View complaints and receive email alerts.

**Project Structure**
anti-ragging-website/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ComplaintForm.js
│   │   │   ├── ComplaintList.js
│   │   ├── App.js
│   │   ├── styles/
│   │   │   ├── App.css
│   │   │   ├── ComplaintForm.css
│   │   │   ├── ComplaintList.css
│   ├── package.json
├── server/
│   ├── models/
│   │   ├── Complaint.js
│   ├── routes/
│   │   ├── api.js
│   ├── server.js
│   ├── package.json
├── .gitignore
└── README.md
