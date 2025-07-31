# Café Fausse - Asian Inspired Bowls

A modern, responsive restaurant website for Café Fausse, specializing in fresh Asian-inspired poke bowls and beverages. Built with React and designed for an exceptional user experience.

## 🍜 About

Café Fausse offers fresh, healthy, and delicious Asian-inspired bowls with customizable ingredients. Our website provides an elegant platform for customers to explore our menu, learn about poke, make reservations, and order online.

## ✨ Features

### 🏠 **Home Page**
- Hero section with background image and call-to-action
- "What's poke" educational section
- Customer testimonials with interactive elements
- Location finder with multiple store locations
- Responsive design with modern UI

### 🍽️ **Menu**
- Dynamic menu loaded from API
- Beautiful circular food images
- Categorized items (Bowls, Beverages, etc.)
- Individual item cards with descriptions
- "Order Now" functionality

### 📱 **Additional Pages**
- **About Us**: Company story and values
- **Gallery**: Food and restaurant imagery
- **Reservations**: Table booking system
- **Contact**: Location and contact information

### 🎨 **Design Features**
- Sticky navigation header
- Modern card-based layouts
- Orange/primary color scheme
- Smooth hover effects and transitions
- Mobile-first responsive design

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Routing**: TanStack React Router
- **UI Components**: HeroUI React
- **Styling**: Tailwind CSS
- **Icons & Images**: Cloudinary CDN
- **State Management**: React Hooks
- **HTTP Client**: Custom API hooks

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cafe-fusse-client
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   # Add your API endpoints and configuration
   VITE_API_BASE_URL=your_api_url_here
   ```

4. **Start development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── home/            # Home page specific components
│   │   ├── HeroSection.jsx
│   │   ├── FeaturesSection.jsx
│   │   ├── TestimonialsSection.jsx
│   │   └── ContactSection.jsx
│   └── layout/          # Layout components
│       ├── Header.jsx
│       ├── Footer.jsx
│       └── Layout.jsx
├── hooks/               # Custom React hooks
│   ├── useMenu.js      # Menu API integration
│   ├── useReservations.js
│   └── useNewsletter.js
├── routes/              # TanStack Router pages
│   ├── __root.jsx      # Root layout
│   ├── index.jsx       # Home page
│   ├── menu.lazy.jsx   # Menu page
│   ├── about.lazy.jsx  # About page
│   ├── gallery.lazy.jsx
│   └── reservations.lazy.jsx
├── assets/             # Static assets
│   └── images/         # Local images
├── lib/                # Utilities and API
│   └── api.js          # API configuration
└── index.css           # Global styles
```

## 🔌 API Integration

The application integrates with a backend API for dynamic content:

### Menu API
- **Endpoint**: Configured via environment variables
- **Data Structure**: Categories with items containing:
  - `item_name`: Display name
  - `description`: Ingredient list
  - `image_url`: Item image
  - `price`: Item pricing

### Other APIs
- Reservations system
- Newsletter subscription
- Contact form submissions

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: 
  - `sm`: 640px (tablet)
  - `md`: 768px (small desktop)
  - `lg`: 1024px (desktop)
  - `xl`: 1280px (large desktop)

## 🚀 Deployment

### Build for Production
```bash
pnpm build
# or
npm run build
```

### Preview Production Build
```bash
pnpm preview
# or
npm run preview
```

### Deployment Platforms
- **Netlify**: Configured with `netlify.toml`
- **Vercel**: Compatible with Vite
- **Traditional Hosting**: Serve `dist/` folder

## 🧪 Development

### Available Scripts
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

### Code Style
- ESLint configuration included
- Prettier recommended for formatting
- Component-based architecture
- Custom hooks for API integration

## 📄 License

This project is proprietary software for Café Fausse.

## 🤝 Contributing

This is a private project. For development questions or contributions, please contact the development team.

---

**Built with ❤️ for Café Fausse**
