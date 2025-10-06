# 🐾 ClosetPet Central

A comprehensive pet care platform that connects pet owners, breeders, and veterinary services in one convenient location.

## 🌟 Features

- **Pet Marketplace**: Buy pets from verified breeders and shelters
- **Adoption & Rehoming**: Connect with other pet owners for breeding or rehoming
- **Professional Breeding**: Genetic matching and breeding services
- **Pet Products**: Complete range of pet supplies, food, toys, and accessories
- **Veterinary Care**: Schedule vaccinations and health checkups with nearby vets
- **User Dashboard**: Manage your pets, appointments, and preferences
- **Location-based Services**: Find services and products in your area
- **Blog & Resources**: Educational content about pet care

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd closetpet-central
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   # Create a .env file in the root directory
   # Add your Supabase and Clerk configuration
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Authentication**: Clerk
- **Database**: Supabase
- **State Management**: TanStack Query (React Query)
- **Routing**: React Router DOM
- **Form Handling**: React Hook Form with Zod validation
- **Charts**: Recharts
- **Icons**: Lucide React

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   └── ...
├── pages/              # Route components
│   ├── Index.tsx       # Homepage
│   ├── Shops.tsx       # Pet marketplace
│   ├── VetsCare.tsx    # Veterinary services
│   ├── Dashboard.tsx   # User dashboard
│   └── ...
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── data/               # Static data and content
└── assets/             # Images and static assets
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

The application is configured for deployment on Vercel with the included `vercel.json` configuration file.

### Deploy to Vercel

1. Push your code to a Git repository
2. Connect your repository to Vercel
3. Set up environment variables in Vercel dashboard
4. Deploy automatically on every push

## 🔐 Authentication

This application uses Clerk for authentication, providing:

- User registration and login
- Protected routes
- User profile management
- Session management

## 🗄️ Database

Supabase is used as the backend database, providing:

- PostgreSQL database
- Real-time subscriptions
- Row Level Security (RLS)
- Built-in authentication integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you have any questions or need help, please:

- Open an issue on GitHub
- Check the documentation
- Contact the development team

---

Made with ❤️ for pet lovers everywhere 🐕🐱🐹
