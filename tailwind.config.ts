import type { Config } from 'tailwindcss';

module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', '.storybook/**/*.{ts,tsx}'],
  prefix: '',
  safelist: [
    {
      pattern: /^(.*?)/,
    },
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        normal: {
          DEFAULT: 'hsl(var(--normal))',
        },
        fighting: {
          DEFAULT: 'hsl(var(--fighting))',
        },
        flying: {
          DEFAULT: 'hsl(var(--flying))',
        },
        poison: {
          DEFAULT: 'hsl(var(--poison))',
        },
        ground: {
          DEFAULT: 'hsl(var(--ground))',
        },
        rock: {
          DEFAULT: 'hsl(var(--rock))',
        },
        bug: {
          DEFAULT: 'hsl(var(--bug))',
        },
        ghost: {
          DEFAULT: 'hsl(var(--ghost))',
        },
        steel: {
          DEFAULT: 'hsl(var(--steel))',
        },
        fire: {
          DEFAULT: 'hsl(var(--fire))',
        },
        water: {
          DEFAULT: 'hsl(var(--water))',
        },
        grass: {
          DEFAULT: 'hsl(var(--grass))',
        },
        electric: {
          DEFAULT: 'hsl(var(--electric))',
        },
        psychic: {
          DEFAULT: 'hsl(var(--psychic))',
        },
        ice: {
          DEFAULT: 'hsl(var(--ice))',
        },
        dragon: {
          DEFAULT: 'hsl(var(--dragon))',
        },
        dark: {
          DEFAULT: 'hsl(var(--dark))',
        },
        fairy: {
          DEFAULT: 'hsl(var(--fairy))',
        },
        unknown: {
          DEFAULT: 'hsl(var(--unknown))',
        },
        shadow: {
          DEFAULT: 'hsl(var(--shadow))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'mode-switcher-out': {
          from: { transform: 'translate(0, 0)' },
          to: { transform: 'translate(2em, 2em)' },
        },
        'mode-switcher-in': {
          from: { transform: 'translate(-2em, 2em)' },
          to: { transform: 'translate(0, 0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'mode-switcher-out': 'mode-switcher-out 0.75s ease-out',
        'mode-switcher-in': 'mode-switcher-in 0.75s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
