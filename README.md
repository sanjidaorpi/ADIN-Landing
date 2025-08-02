# ADIN Landing Page

A modern, responsive landing page for ADIN investment firm built with Next.js and Tailwind CSS.

## Features

- 🎨 Modern, clean design matching the ADIN brand
- 📱 Fully responsive layout
- ⚡ Built with Next.js 14 and TypeScript
- 🎨 Styled with Tailwind CSS
- 🔧 Interactive navigation and components

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd adin-landing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Main page component
└── components/
    ├── Header.tsx       # Navigation header
    ├── Hero.tsx         # Main hero section
    └── LiveReports.tsx  # Live reports sidebar
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Inter Font** - Google Fonts

## Customization

The design uses custom colors defined in `tailwind.config.ts`:
- `adin-yellow` - #FFD700
- `adin-orange` - #FF6B35
- `adin-green` - #4CAF50
- `adin-blue` - #2196F3
- `adin-purple` - #9C27B0
- `adin-light-purple` - #E1BEE7