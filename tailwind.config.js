/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
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
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
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
         light: {
          primary: '#6BBF6D',
          secondary: '#A2D9A0',
          accent: '#D5D5D5',
          bg: '#F0F3F6',
          body: '#333333',
          heading: '#000000', 
          subheading: '#666666', 
          accenttext: '#6BBF6D', 
          link: '#007BFF', 
        },
        dark: {
          primary: '#6BBF6D',
          secondary: '#A2D9A0',
          accent: '#BDBDBD',
          bg: '#333333',
          body: '#FFFFFF', 
          heading: '#E0E0E0', 
          subheading: '#CCCCCC', 
          accenttext: '#4B6D41', 
          link: '#66B3FF', 
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        lato: ['var(--font-lato)'],
        roboto: ['var(--font-roboto)']
      },
      height: {
        "100": "29rem",
        "110": "33rem",
        "1/2-screen":"50vh"
      },
      minHeight: {
        '110': "45rem"
      },
      width: {

      "100": "30rem"
      },
      rotate: {
        "270":"270deg"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}