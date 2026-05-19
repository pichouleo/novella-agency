import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:        '#07070D',
        surface:   '#0D0D1A',
        card:      '#111120',
        gold:      '#C9A462',
        'gold-lt': '#DFC07A',
        'gold-dk': '#8A6E35',
        cream:     '#EDE8DF',
        body:      '#9C9890',
        muted:     '#52504C',
      },
      fontFamily: {
        sans:  ['var(--font-jakarta)', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A462 0%, #E8D08A 50%, #C9A462 100%)',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config
