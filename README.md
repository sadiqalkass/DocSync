# DocSync 

DocSync is a comprehensive Doctor Appointment Booking System built with the MERN stack (MongoDB, Express, React, Node.js). It provides a seamless platform for patients to find doctors and book appointments, while also offering an administrative dashboard to manage the platform.

## 🚀 Features

### For Patients (Frontend)
- Browse and search for doctors by specialty.
- View doctor profiles, availability, and consultation fees.
- Book, manage, and cancel appointments.
- Secure user authentication and profile management.
- Integrated payment gateway (Razorpay) for consultation fees.

### For Administrators/Doctors (Admin)
- Dashboard to view overall metrics and recent appointments.
- Manage doctor profiles (add, edit, remove).
- Manage patient appointments and update statuses.
- Secure admin/doctor authentication.

## 🛠️ Tech Stack

- **Frontend & Admin**: React.js, Vite, Tailwind CSS, React Router DOM, Axios, React Toastify
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Authentication**: JSON Web Tokens (JWT), bcrypt
- **File Uploads**: Cloudinary, Multer
- **Payments**: Razorpay/Cash

## 📂 Project Structure

The repository is organized into three main directories:

- `/frontend`: The patient-facing React application.
- `/admin`: The administrative and doctor dashboard React application.
- `/backend`: The Express.js server providing the RESTful API and connecting to the MongoDB database.

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js installed on your machine
- MongoDB instance (local or Atlas)
- Cloudinary account
- Razorpay account

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd DocSync
   ```

2. **Backend Setup:**
   ```bash
   cd backend
   npm install
   ```
   Create a `.env` file in the `backend` directory and configure the necessary environment variables (MongoDB URI, JWT Secret, Cloudinary credentials, Razorpay keys).
   Start the backend server:
   ```bash
   npm start
   ```

3. **Frontend Setup:**
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

4. **Admin Setup:**
   ```bash
   cd ../admin
   npm install
   npm run dev
   ```

## 📄 License

This project is licensed under the ISC License.
