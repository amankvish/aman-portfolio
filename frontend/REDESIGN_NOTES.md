# Portfolio Redesign Strategy & Implementation Notes

## Overview
The portfolio has been completely redesigned with a "Neo-minimal / Modern tech aesthetic" using **Next.js**, **Tailwind CSS**, and **Framer Motion**. The design focuses on dark mode, soft gradients, and high-performance animations.

## Updated Folder Structure
```
frontend/
├── src/
│   ├── app/
│   │   ├── globals.css      # Updated with Tailwind v4 imports & base styles
│   │   ├── layout.tsx       # Root layout with Inter/Space Grotesk fonts
│   │   ├── page.tsx         # Main landing page assembling sections
│   │   └── home/            # Section Components (Redesigned)
│   │       ├── Hero.tsx     # Animated hero with typewriter effect
│   │       ├── About.tsx    # Story-driven bio with animated stats
│   │       ├── Skills.tsx   # Modern card-based skill categories
│   │       ├── Experience.tsx # Vertical timeline of work history
│   │       ├── Projects.tsx # Grid showcase with hover effects
│   │       └── Contact.tsx  # Minimal form with validation
│   ├── components/
│   │   ├── Navbar.tsx       # Sticky, glassmorphism navbar
│   │   └── Footer.tsx       # Minimalist footer
│   └── lib/
│       └── utils.ts         # Utility for class merging (clsx + tailwind-merge)
└── tailwind.config.js       # Extended theme configuration
```

## Component Redesign Strategy

### 1. Global Theme & Typography
- **Font**: `Inter` for body, `Space Grotesk` for headings.
- **Colors**: Deep charcoal (`#0B0F19`) background with Blue (`#4F8CFF`) and Cyan (`#22D3EE`) accents.
- **Effects**: Subtle bounding box gradients, glassmorphism (`backdrop-blur`), and glow effects.

### 2. Hero Section (`Hero.tsx`)
- **Key Features**:
  - Typewriter effect for roles.
  - Floating profile image with animated gradient ring.
  - "Tech Stack" text chips.
  - Framer Motion slide-in animations.

### 3. About Section (`About.tsx`)
- **Focus**: Storytelling over generic lists.
- **Features**:
  - Animated counters for "Hours Saved", "Projects Shipped".
  - Split layout: Narrative vs. Stats.

### 4. Skills (`Skills.tsx`)
- **Design**: Categorized cards (Backend, Frontend, etc.) instead of progress bars.
- **Interaction**: Hover reveals a gradient glow and tech pills.

### 5. Experience (`Experience.tsx`)
- **New Section**: Added a vertical timeline connector.
- **Content**: Highlights specific achievements and impact metrics.

### 6. Projects (`Projects.tsx`)
- **Layout**: Grid system.
- **Card Design**: Title, Description, Metrics (e.g., "55% reduction"), and Tech Stack chips.
- **Hover**: Card lifts up with a subtle border gradient reveal.

### 7. Contact (`Contact.tsx`)
- **Design**: Clean, two-column layout (Info + Form).
- **Functionality**: Mock form submission with visual feedback state.

## Tech Implementation Details
- **Tailwind v4**: configured for high performance.
- **Framer Motion**: used for all enter animations (`whileInView`, `initial`, `animate`).
- **Responsive**: Mobile-first approach with a custom mobile menu in `Navbar`.

## Next Steps
- Verify the `npm run dev` output for any runtime issues in the browser.
- Add your actual resume file to `public/resume.pdf` if not already present.
- Replace `public/img/amankvish.jpg` with your high-quality profile photo.
