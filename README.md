# Authentication & Authorization with OTP Verification

## Overview
This project implements authentication and authorization with role-based access control (Mentor & Mentee). It includes OTP verification using Mailtrap for secure email-based authentication and token-based security enhancements.

## Features
- **User Registration & Login**
- **Role-based Authentication (Mentor & Mentee)**
- **OTP Verification via Email (Mailtrap)**
- **Token-based Security**
- **Session Management & JWT Authentication**
- **Extra Security Enhancements**

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT, bcrypt
- **Email Service:** Mailtrap
- **Frontend:** React.js (if applicable)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sahil-n06/connecTo.git
   cd connecTo
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables (`.env` file):
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   MAILTRAP_USER=your_mailtrap_username
   MAILTRAP_PASS=your_mailtrap_password
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

## Security Measures
- Encrypted passwords using bcrypt
- OTP expiry mechanism
- JWT for authentication & authorization
- Role-based access control

## Contributing
1. Fork the repository
2. Create a new branch: `git checkout -b feature-branch`
3. Commit your changes: `git commit -m "Added new feature"`
4. Push to the branch: `git push origin feature-branch`
5. Create a pull request



---

