# Fly Media

Fly Media is a specialized agency dedicated to helping live performers—magicians, jugglers, and variety artists—grow their social media presence. This repository contains the source code for the Fly Media landing page and web presence.

> Built with the help of [Lovable](https://lovable.dev/) and [Google Antigravity](https://antigravity.google/).

## 🚀 Tech Stack

This project is built with a modern frontend stack:

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/) & [Simple Icons](https://simpleicons.org/)

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd flymedia
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## 📂 Project Structure

```
src/
├── components/     # Reusable UI components and sections
│   ├── ui/         # shadcn/ui primitive components
│   └── ...         # Feature-specific components (Hero, Header, etc.)
├── config/         # Global configuration and constants
├── pages/          # Page components (Index, etc.)
└── App.tsx         # Main application entry point
```

## 📜 Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run lint`: Run ESLint to check for code quality issues.
- `npm run preview`: Preview the production build locally.

## 🤝 Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes (`git commit -m 'Add some amazing feature'`).
4. Push to the branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.
