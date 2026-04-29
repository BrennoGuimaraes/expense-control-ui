<div align="center">

# 💸 Expense Control UI

**A modern, elegant interface to manage your expenses with ease.**

![Next.js](https://img.shields.io/badge/Next.js-16.1.7-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-components-000000?style=for-the-badge&logo=shadcnui&logoColor=white)

</div>

---

## 📖 About

**Expense Control UI** is the frontend application for the [Expense Control API](https://github.com/BrennoGuimaraes/expense-control). Built with **Next.js 16** and **React 19**, it provides a clean, responsive, and accessible interface for tracking personal or business expenses. It features **dark/light theme support**, component-driven architecture with **shadcn/ui**, and connects seamlessly to the Expense Control REST API.

---

## 🚀 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16.1.7 | React framework with App Router |
| React | 19 | UI library |
| TypeScript | 5 | Type safety |
| TailwindCSS | 4 | Utility-first styling |
| shadcn/ui | 4.3.0 | Accessible UI components |
| Radix UI | 1.4.3 | Headless primitives |
| Lucide React | 1.8.0 | Icon library |
| next-themes | 0.4.6 | Dark/light theme management |
| clsx + tailwind-merge | — | Conditional class utilities |
| Prettier | 3.8.1 | Code formatting |
| ESLint | 9 | Code linting |

---

## 🏗️ Project Structure

```
expense-control-ui/
├── app/
│   ├── layout.tsx         # Root layout with ThemeProvider
│   ├── page.tsx           # Root page (redirects to /login)
│   ├── globals.css        # Global styles
│   └── login/
│       └── page.tsx       # Login page
├── components/
│   ├── theme-provider.tsx # Theme context provider
│   └── ui/                # shadcn/ui components (Button, Card, Input, Label...)
├── hooks/                 # Custom React hooks
├── lib/
│   └── utils.ts           # Utility functions (cn helper)
├── public/                # Static assets
├── .env                   # Environment variables
├── next.config.mjs        # Next.js configuration
├── tailwind.config        # TailwindCSS configuration
└── tsconfig.json          # TypeScript configuration
```

---

## ⚙️ Prerequisites

Make sure you have the following installed:

- [Node.js 18+](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)
- The [Expense Control API](https://github.com/BrennoGuimaraes/expense-control) running locally or in production

---

## 🔧 Environment Variables

Create a `.env` file in the root of the project with the following:

```env
NEXT_PUBLIC_API_URL=http://localhost:8080
```

> Update the URL to point to your running instance of the Expense Control API.

---

## 💻 Running Locally

```bash
# Clone the repository
git clone https://github.com/BrennoGuimaraes/expense-control-ui.git
cd expense-control-ui

# Install dependencies
npm install

# Start the development server (with Turbopack)
npm run dev
```

The app will be available at: **`http://localhost:3000`**

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run typecheck` | Run TypeScript type checking |

---

## 🎨 UI Components

The project uses **shadcn/ui** components built on top of **Radix UI** primitives. Components are located in `components/ui/` and can be customized freely.

Current components include: `Button`, `Card`, `Input`, `Label`, and more as the project grows.

---

## 🌗 Theme Support

The application supports **dark and light modes** out of the box via `next-themes`. The `ThemeProvider` wraps the entire layout, enabling seamless theme switching.

---

## 🔗 Related Project

This UI is designed to work alongside the **Expense Control API**:

> 🔗 [expense-control (Backend)](https://github.com/BrennoGuimaraes/expense-control) — RESTful API built with Java 21 & Spring Boot

---

## 👨‍💻 Author

Crafted with ☕ by **Brenno Guimarães**

[![GitHub](https://img.shields.io/badge/GitHub-BrennoGuimaraes-181717?style=flat&logo=github)](https://github.com/BrennoGuimaraes)
