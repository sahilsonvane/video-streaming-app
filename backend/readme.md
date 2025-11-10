# 🎬 Video Streaming Backend

A lightweight and scalable backend for a video streaming platform — similar to YouTube.  
Built with performance, security, and scalability in mind.

## 🚀 Features
- User authentication (JWT-based)
- Video upload, processing, and streaming
- Like, comment, and subscribe system
- Video search and recommendations
- Secure file storage (local/cloud)
- RESTful API architecture

## 🛠️ Tech Stack
- **Node.js** + **Express.js**
- **MongoDB** (Mongoose ORM)
- **Multer** for file uploads
- **FFmpeg** for video processing
- **JWT** for authentication

## ⚙️ Setup & Installation
```bash
# Clone the repository
git clone https://github.com/your-username/video-streaming-backend.git

# Navigate to the project
cd video-streaming-backend

# Install dependencies
npm install

# Add environment variables
cp .env.example .env

# Start the server
npm start
