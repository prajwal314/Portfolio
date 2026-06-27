# 🚀 Prajwal Diwnale — Developer Portfolio

A **production-ready**, full-stack portfolio website built with the **MERN stack**. This isn't a generic template — it's a real developer's portfolio with modern design, dynamic content, and scalable architecture.

![Tech Stack](https://img.shields.io/badge/MERN-Stack-blueviolet?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## ✨ Features

- **Dynamic Projects** — Fetched from MongoDB via REST API
- **Contact Form** — Messages saved to database
- **Public Portfolio API** — Projects and contact routes are available without an admin panel
- **Dark / Light Mode** — Toggle with localStorage persistence
- **Glassmorphism UI** — Modern glass-effect design
- **Framer Motion** — Smooth page and element animations
- **Typing Effect** — Animated role cycling in hero section
- **Responsive Design** — Mobile-first, works on all devices
- **Loading Skeletons** — While API data loads
- **Custom Cursor** — Premium cursor effect on desktop
- **SEO Optimized** — Meta tags, Open Graph, semantic HTML

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| **React 19** (Vite) | UI framework |
| **Tailwind CSS v4** | Utility-first styling |
| **Framer Motion** | Animations |
| **Axios** | HTTP client |
| **React Icons** | Icon library |
| **React Hot Toast** | Toast notifications |

### Backend
| Technology | Purpose |
|---|---|
| **Node.js** | Runtime |
| **Express.js** | Web framework |
| **MongoDB** (Mongoose) | Database |
| **JWT** | Legacy auth utilities (not used by the public portfolio flow) |
| **Helmet** | Security headers |
| **Morgan** | HTTP logging |

---

## 📁 Project Structure

```
portfolio/
├── client/                     # React frontend
│   ├── src/
│   │   ├── animations/         # Framer Motion variants
│   │   │   └── variants.js     # Reusable animation configs
│   │   ├── components/         # Reusable UI components
│   │   │   ├── Navbar.jsx      # Auto-hide navbar + mobile menu
│   │   │   ├── Footer.jsx      # Footer with social links
│   │   │   ├── CustomCursor.jsx    # Custom cursor effect
│   │   │   ├── SectionHeading.jsx  # Animated section titles
│   │   │   ├── ProjectSkeleton.jsx # Loading skeleton
│   │   │   └── ProjectModal.jsx    # Project detail overlay
│   │   ├── context/            # React Context providers
│   │   │   └── ThemeContext.jsx # Dark/light mode state
│   │   ├── hooks/              # Custom React hooks
│   │   │   └── useScrollDirection.js  # Scroll direction detection
│   │   ├── pages/              # Page sections
│   │   │   ├── Hero.jsx        # Hero with typing animation
│   │   │   ├── About.jsx       # Timeline (education + work)
│   │   │   ├── Skills.jsx      # Interactive skill cards
│   │   │   ├── Projects.jsx    # Dynamic project grid
│   │   │   └── Contact.jsx     # Contact form + social links
│   │   ├── utils/              # Utilities & constants
│   │   │   ├── api.js          # Centralized Axios instance
│   │   │   └── constants.js    # All customizable content
│   │   ├── App.jsx             # Root component
│   │   ├── main.jsx            # Entry point
│   │   └── index.css           # Design system + Tailwind
│   ├── .env                    # Frontend environment vars
│   └── vite.config.js          # Vite + Tailwind config
│
├── server/                     # Express backend
│   ├── config/
│   │   └── db.js               # MongoDB connection
│   ├── controllers/            # MVC controllers
│   │   ├── projectController.js    # Project CRUD logic
│   │   ├── contactController.js    # Contact form logic
│   ├── middleware/
│   │   └── errorHandler.js     # Centralized error handling
│   ├── models/                 # Mongoose schemas
│   │   ├── Project.js          # Project schema
│   │   └── Contact.js          # Contact message schema
│   ├── routes/                 # Express route modules
│   │   ├── projectRoutes.js    # /api/projects
│   │   ├── contactRoutes.js    # /api/contact
│   ├── .env                    # Server environment vars
│   └── server.js               # Express entry point
│
├── .gitignore
└── README.md
```

---

## ⚙️ Architecture: MVC Flow

```
Client Request
    ↓
React Frontend (Axios)
    ↓ HTTP Request
Express Router (routes/)
    ↓ Matched Route
Controller (controllers/)
    ↓ Business Logic
Model (models/)
    ↓ Database Operation
MongoDB
    ↓ Response
Controller → Express → React → User
```

---

## 🚀 Setup Instructions

### Prerequisites

- **Node.js** v18+ 
- **MongoDB Atlas** account (or local MongoDB)
- **npm** or **yarn**

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

### 2. Setup Backend

```bash
cd server
npm install
```

Create a `.env` file (see `.env.example`):

```env
MONGO_URI=mongodb+srv://user:password@cluster.mongodb.net/portfolio
PORT=5000
NODE_ENV=development
```

Start the server:

```bash
npm run dev
```

### 3. Setup Frontend

```bash
cd client
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## 🌐 API Endpoints

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/api/health` | Public | Health check |
| GET | `/api/projects` | Public | Get all projects |
| GET | `/api/projects/:id` | Public | Get single project |
| POST | `/api/contact` | Public | Submit contact message |

---

## 🎨 Customization

All personal content is in **one file**: `client/src/utils/constants.js`

Edit these objects:
- `PERSONAL_INFO` — Name, roles, bio, links
- `EDUCATION` — Your education history
- `EXPERIENCE` — Work experience
- `SKILLS` — Skill categories and levels
- `NAV_LINKS` — Navigation items

---

## 🚢 Deployment

### Backend (Render / Railway)

1. Push the `server/` folder to a GitHub repo
2. Create a new **Web Service** on Render
3. Set build command: `npm install`
4. Set start command: `node server.js`
5. Add environment variables from `.env`

### Frontend (Vercel)

1. Push the `client/` folder to a GitHub repo
2. Import to Vercel
3. Set `VITE_API_URL` to your deployed backend URL so the frontend can fetch projects from the live API
4. Deploy

---

## 📝 Environment Variables

### Server (`.env`)

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGO_URI` | MongoDB connection string | `mongodb+srv://...` |
| `PORT` | Server port | `5000` |
| `NODE_ENV` | Environment mode | `development` |

### Client (`.env`)

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API base URL | `/api` |

---

## 📄 License

MIT License — feel free to use this for your own portfolio.

---

**Built with ❤️ by Prajwal Diwnale**
