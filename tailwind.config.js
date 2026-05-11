/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Picasso Design System Colors
        ink: '#0F0F0F',
        charcoal: '#1A1A1A',
        stone: '#F5F3EF',
        sand: '#E8E4DE',
        gold: {
          DEFAULT: '#C9A96E',
          light: '#D4B87A',
        },
        terracotta: '#B85C38',
        success: '#2D6A4F',

        // Legacy colors (keeping for compatibility)
        navy: {
          DEFAULT: '#0F172A',
          light: '#1E293B',
          dark: '#0B1120',
        },
        ivory: {
          DEFAULT: '#FAF7F0',
          dim: '#E8E2D9',
        },
        kraft: {
          DEFAULT: '#D8B98C',
          light: '#E5D4B8',
        },
        'text-dark': '#111827',
        'text-muted': '#64748B',
        'off-white': '#F8F6F1',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xxl': ['clamp(3rem, 10vw, 8rem)', { lineHeight: '0.9', letterSpacing: '-0.03em', fontWeight: '900' }],
        'display-xl': ['clamp(2.5rem, 8vw, 6rem)', { lineHeight: '0.92', letterSpacing: '-0.02em', fontWeight: '900' }],
        'h1': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1.0', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h2': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '500' }],
        'h3': ['clamp(1.1rem, 2vw, 1.5rem)', { lineHeight: '1.2', fontWeight: '500' }],
        'body-lg': ['clamp(1rem, 1.5vw, 1.25rem)', { lineHeight: '1.6', fontWeight: '400' }],
        'caption': ['0.75rem', { lineHeight: '1.3', letterSpacing: '0.05em', fontWeight: '500' }],
        'nav': ['0.7rem', { lineHeight: '1', letterSpacing: '0.1em', fontWeight: '500' }],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        'card': '0 20px 40px rgba(15, 23, 42, 0.15)',
        'card-hover': '0 30px 60px rgba(15, 23, 42, 0.2)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "marquee": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(1.5)", opacity: "0" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
        "counter-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "marquee": "marquee 40s linear infinite",
        "pulse-ring": "pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
        "counter-up": "counter-up 0.6s ease-out forwards",
      },
      spacing: {
        'section': 'clamp(80px, 10vh, 140px)',
        'section-mobile': '60px',
      },
      maxWidth: {
        'content': '1440px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
