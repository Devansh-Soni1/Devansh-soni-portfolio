/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg: '#060a0f',
        s1: '#0a1020',
        s2: '#0d1628',
        blue: '#00aaff',
        cyan: '#00eeff',
        orange: '#ff6a00',
        red: '#ff2244',
        green: '#00ff88',
      },
      animation: {
        scan: 'scan 3s linear infinite',
        rot: 'rot 3s linear infinite',
        rotRev: 'rot 6s linear infinite reverse',
        livepulse: 'livepulse 2s infinite',
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        scan: {
          '0%': { top: '-2px', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { top: '100%', opacity: '0' },
        },
        rot: { to: { transform: 'rotate(360deg)' } },
        livepulse: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
