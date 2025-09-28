
# PromptFlow Frontend

This is the frontend for **PromptFlow**, a modern AI-powered workflow automation platform built with React and Vite. It features a beautiful landing page, comprehensive authentication system, workflow dashboard, and seamless integrations with Supabase and AuthMate.

## Features

- ⚡ Fast and modern React UI powered by Vite
- 🎨 Beautiful, animated landing page with glassmorphism effects
- 🔐 Complete authentication system (login, signup, email verification)
- 🛠️ AI-powered workflow generation dashboard
- 🦾 Dual database integration (Supabase + AuthMate)
- 🎭 Modular component architecture with consistent theming
- 🌈 Responsive design with Framer Motion animations
- 🎯 Modern icons with Heroicons and Lucide React
- 🔒 ESLint and best practices for code quality

## Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons, Lucide React  
- **Authentication**: AuthMate
- **Database**: Supabase
- **Styling**: Tailwind CSS with custom glassmorphism effects
- **Routing**: React Router DOM

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

```
src/
├── components/
│   ├── auth/                    # Authentication components
│   │   ├── login.jsx           # Login form with modern styling
│   │   ├── signup.jsx          # Registration form
│   │   └── verifyEmail.jsx     # Email verification handler
│   ├── dashboard/              # Dashboard components
│   │   ├── dashboard.jsx       # Extension activation dashboard
│   │   └── workflowDashboard.jsx # AI workflow generation
│   ├── landing/                # Landing page sections
│   │   ├── Hero.jsx           # Hero section with email signup
│   │   ├── Works.jsx          # How it works section
│   │   └── Founders.jsx       # Team and mission section
│   └── Navbar.jsx             # Navigation component
├── pages/
│   ├── auth/                   # Auth page layouts
│   ├── dashboard/             # Dashboard page layouts
│   ├── Landing.jsx            # Main landing page
│   └── notFound.jsx           # 404 error page
├── assets/                     # Static assets and images
├── api.js                      # API configuration
└── App.jsx                     # Main app component with routing
```

## Key Components

### Authentication System
- **Modern UI**: Glass morphism design with animated backgrounds
- **AuthMate Integration**: Secure JWT-based authentication
- **Email Verification**: Complete verification flow with user-friendly error handling
- **Responsive Design**: Mobile-first approach with smooth animations

### Dashboard Features
- **Extension Control**: Activate/deactivate browser extension functionality
- **Workflow Generator**: AI-powered n8n workflow creation
- **Chat Management**: Organize workflows by conversation threads
- **Real-time Updates**: Live status and progress tracking

### Landing Page
- **Hero Section**: Interactive email signup with Supabase integration
- **Process Overview**: Step-by-step explanation with animated icons
- **Team Showcase**: Founder profiles and company mission
- **Responsive Design**: Optimized for all device sizes

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```bash
# Supabase Configuration (for waitlist and general data)
VITE_SUPABASE_URL=your-supabase-project-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key

# AuthMate Configuration (for user authentication)
VITE_AUTHMATE_API_KEY=your-authmate-api-key

# Optional: Development settings
VITE_APP_ENV=development
```

### Getting API Keys

1. **Supabase**: 
   - Go to [supabase.com](https://supabase.com)
   - Create a project and get your URL and anon key from Settings > API

2. **AuthMate**: 
   - Visit [authmate.dev](https://authmate.xyz) 
   - Create an account and get your API key from the dashboard

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## Recent Updates

### v2.0.0 - Authentication & Dashboard Overhaul
- ✅ Complete authentication system with modern UI
- ✅ AI-powered workflow generation dashboard  
- ✅ Email verification with comprehensive error handling
- ✅ Consistent theming across all components
- ✅ Enhanced animations with Framer Motion
- ✅ Improved mobile responsiveness
- ✅ AuthMate integration for secure user management

### Theme & Design
- **Glass Morphism**: Modern frosted glass effects throughout the app
- **Gradient Backgrounds**: Dynamic animated gradients for visual appeal  
- **Consistent Color Palette**: Blue to purple gradients with accent colors
- **Smooth Animations**: Page transitions and micro-interactions
- **Dark Theme**: Professional dark theme with proper contrast ratios

## Contributing

We welcome contributions! Please follow these guidelines:

1. **Code Style**: Follow the existing patterns and use ESLint
2. **Components**: Keep components modular and reusable
3. **Theming**: Maintain consistency with the established design system
4. **Testing**: Test your changes across different screen sizes
5. **Documentation**: Update README for significant changes

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test thoroughly
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@promptflow.me or join our community Discord.
