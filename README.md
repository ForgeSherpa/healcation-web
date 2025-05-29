# 🌴 Healcation

**Your AI-Powered Vacation Companion**

Healcation is application that uses artificial intelligence to help you plan the perfect vacation. Simply enter your destination and preferences, and let our AI recommend attractions, hotels, and create your ideal travel itinerary.

This Web (ironically including the readme) is 70% vibe-coded, yes not 100% because they still make errors and I had to fix it. Additionally, I also
migrated the tailwindcss from v3 -> v4, react router -> tanstack router, fixes deprecations, etc etc etc.

Why vibe-coding? why should I code if they can?

Keep in mind, that our app is not vibe-coded, the landing page is. Also, this landing page have gone through manual review.

![Healcation Hero](public/logo512.png)

## ✨ Features

- **🧠 AI-Powered Recommendations** - Smart algorithm learns your preferences to suggest destinations you'll love
- **🗺️ Destination Explorer** - Browse trending destinations or search for your dream vacation spot
- **🏨 Hotel Finder** - Compare and book accommodations that match your budget and preferences
- **📸 Attraction Highlights** - Discover must-see attractions and hidden gems at your destination
- **🧭 Local Experiences** - Find authentic local experiences curated by travel experts
- **🛣️ Itinerary Builder** - Create day-by-day itineraries optimized for your travel style
- **🔒 Secure Booking** - Book with confidence using our secure, transparent payment system
- **⏰ Real-time Updates** - Get live updates on weather, events, and travel conditions

## 🚀 Tech Stack

- **Frontend Framework**: React 19 with TypeScript and TanStack Router
- **Styling**: Tailwind CSS v4 with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React & Simple Icons
- **Build Tool**: Vite 6
- **Package Manager**: Bun

## 🎨 Design System

Healcation features a custom design system built with Tailwind CSS v4:

- **Primary Color**: Deep Navy (`#03045e`)
- **Background**: Light Blue (`#caf0f8`)
- **Typography**: Inter (sans-serif) & Montserrat (display)
- **Custom Animations**: Fade-in and slide-up transitions

## 📦 Installation

### Prerequisites

- Node.js 18+ or Bun
- Git

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/ForgeSherpa/healcation-web
   cd healcation
   ```

2. **Install dependencies**
   ```bash
   # Using Bun (recommended)
   bun install
   
   # Or using npm
   npm install
   ```

3. **Start development server**
   ```bash
   # Using Bun
   bun --bun dev
   
   # Or using npm
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start development server on port 3000 |
| `bun run start` | Start development server (alias for dev) |
| `bun run build` | Build for production |
| `bun run serve` | Preview production build |
| `bun run test` | Run tests with Vitest |

## 📁 Project Structure

```
healcation/
├── public/                 # Static assets
│   ├── logo.png           # App logos
│   ├── favicon.ico        # Favicon
│   └── manifest.json      # PWA manifest
├── src/
│   ├── components/        # React components
│   │   ├── home/         # Home page components
│   │   │   ├── HeroSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── FAQ.tsx
│   │   │   └── DownloadCTA.tsx
│   │   └── layout/       # Layout components
│   │       ├── Layout.tsx
│   │       ├── Header.tsx
│   │       └── Footer.tsx
│   ├── routes/           # TanStack Router routes
│   │   ├── __root.tsx    # Root route
│   │   ├── index.tsx     # Home page
│   │   └── privacy-policy.tsx
│   ├── styles.css        # Global styles & Tailwind config
│   └── main.tsx          # App entry point
├── index.html            # HTML template
├── package.json          # Dependencies & scripts
├── tsconfig.json         # TypeScript config
├── vite.config.js        # Vite configuration
└── README.md            # You are here!
```

## 🎯 Key Components

### Home Page Sections

- **HeroSection**: Main landing area with call-to-action
- **FeaturesSection**: Showcase of app capabilities
- **HowItWorks**: Step-by-step process explanation
- **Testimonials**: User reviews and feedback
- **FAQ**: Frequently asked questions
- **DownloadCTA**: App download section

### Layout Components

- **Layout**: Main app wrapper with header and footer
- **Header**: Navigation and branding
- **Footer**: Links and company information

## 🎨 Styling with Tailwind CSS v4

This project uses the latest Tailwind CSS v4 with CSS-first configuration:

```css
@theme {
  --color-primary: #03045e;
  --color-background: #caf0f8;
  --font-family-sans: "Inter", system-ui, sans-serif;
  --font-family-display: "Montserrat", system-ui, sans-serif;
  --animate-fade-in: fadeIn 0.5s ease-in-out;
  --animate-slide-up: slideUp 0.5s ease-in-out;
}
```

### Custom Component Classes

```css
.btn-primary {
  @apply bg-primary text-white hover:bg-primary/90 focus:ring-primary;
}

.section-title {
  @apply mb-2 text-3xl font-bold text-primary md:text-4xl lg:text-5xl;
}
```

## 🧪 Testing

Run the test suite:

```bash
bun run test
```

Tests are written using Vitest and React Testing Library for component testing.

## 🚀 Deployment

### Production Build

```bash
bun run build
```

This creates an optimized build in the `dist` folder.

### Preview Production Build

```bash
bun run serve
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **TanStack Router** for excellent routing solution
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Lucide React** for beautiful icons
- **Vite** for lightning-fast development experience

---

**Built with ❤️ for travelers worldwide**

For support or questions, please open an issue on GitHub.