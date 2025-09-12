
# PromptFlow Frontend

This is the frontend for **PromptFlow**, a modern automation platform built with React and Vite. It features a beautiful landing page, interactive components, and seamless integration with Supabase for user onboarding.

## Features

- ⚡ Fast and modern React UI powered by Vite
- 🎨 Beautiful, animated landing page and sections
- 🦾 Supabase integration for waitlist and user management
- 🛠️ Modular component architecture (Hero, Works, Founders, etc.)
- 🌈 Responsive design and glassmorphism effects
- 🔒 ESLint and best practices for code quality

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/PromptFlow-dev/frontend.git
cd frontend
npm install
```

### Running Locally

```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
```

## Project Structure

- `src/components/landing/` — Modular React components for each landing page section
- `src/pages/Landing.jsx` — Assembles all components for the main landing page
- `public/` — Static assets and images
- `supabase/` — Database migrations and setup

## Environment Variables

Create a `.env` file and add your Supabase credentials:

```
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## Contributing

Pull requests and issues are welcome! Please follow best practices and keep code modular.
