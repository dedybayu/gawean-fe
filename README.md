# Gawean 🚀

Platform digital kanggo manajemen kerjoan.

## 📌 Tentang Gawean

**Gawean** adalah aplikasi berbasis web untuk membantu pengguna mengelola pekerjaan dan tugas secara modern, terstruktur, dan ringan.

Aplikasi ini berfungsi sebagai **task & project management sederhana**, mirip seperti OpenProject, namun dengan pendekatan yang lebih simpel, minimalis, dan mudah digunakan.

Gawean cocok untuk:

* 👤 Individu yang ingin mengatur tugas harian
* 👥 Tim kecil yang ingin mengelola pekerjaan bersama
* 🎯 Pengguna yang membutuhkan manajemen tugas tanpa kompleksitas berlebih


Aplikasi ini memiliki:

* Landing page
* Sistem login
* Dashboard pengguna setelah autentikasi
* Dukungan multi-theme (Light / Dark / Auto)
* Arsitektur scalable untuk pengembangan lebih lanjut

---

## 🛠 Tech Stack

### Frontend

* React
* React Router
* Vite
* Tailwind CSS
* DaisyUI

### Backend

* Go (Golang)
* REST API
* JWT Authentication

---

## 🚀 Fitur Utama

* 🔐 Login system
* 🎨 Theme toggle (Light / Dark / Auto)
* 📱 Responsive design
* 🧭 Layout-based routing
* 🏗 Clean architecture
* ⚡ SPA navigation tanpa reload

---

## 🔧 Instalasi & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/dedybayu/gawean_fe.git
cd gawean
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Jalankan Development Server

```bash
npm run dev
```

Aplikasi akan berjalan di:

```
http://localhost:5173
```

---

## 🔐 Authentication Flow

1. User login
2. Backend Golang validasi user
3. Backend kirim JWT
4. Token disimpan di localStorage
5. Route `/dashboard` dilindungi oleh ProtectedRoute

---




