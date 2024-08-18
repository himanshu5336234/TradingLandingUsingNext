/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'


export const content = [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
]

export const theme = {
  extend: {
    gridTemplateColumns: {
      blogsNav: "auto 1fr auto",
      blogsNav1: "auto 0.9fr auto"
    },
    backgroundColor: {
      main: '#000',
      community: '#0E0124',
      community2: '#8733E4',
      community3: '#0E032C',
      blogFooter: 'rgb(244, 244, 244)',
    },
    backgroundImage: {
      radialGradient1: 'radial-gradient(#3A4715, #123318, #09190D, #050E08)',
      radialGradient2: 'radial-gradient(#173D23 50%, #010101, #000000)',
      radialGradient4: 'radial-gradient(#822BE1, #3F1595, #241354, #12101A)',
      blogPage: 'linear-gradient(0deg,#efefef 65%,#fff)'
    },
    colors: {
      primary: '#000',
      navBG: 'rgba(42, 93, 50, 0.2)',
      gradient1: '#D4F938',
      gradient2: '#32D875',
      gradient3: '#D5FA39',
      gradient4: '#E4FD2C',
      gradient5: '#EBFF25',
      neongreen: '#DBFF4D',
      gradientShadow: '#A8EF9C',
      lightGray: '#E7E7EA',
      lightGray2: '#A9A9A9',
      lightGray3: '#919191',
      lightGray4: '#808090',
      lightGray5: '#F3F3F3',
      lightGray6: '#666673',
      lightGray7: '#BBBBC3',
      lightGray8: '#DDDDDD',
      darkGray: '#19191D',
      darkGray2: '#7D7D7D',
      darkGray3: '#32333A',
      darkGray4: '#141414',
      downloadBtn: '#121212',
      metric: '#EEFF52',
      cardShadow: '#E2FF6F',
      densityGreen: '#229751',
    },
    screens: {
      smallScreen: '18.75em',
      mediumScreen: '25em',
      tablet: '50rem',
      tablet1: '906px',
      tablet2: '1080px',
      tablet3: '1190px',
      desktop: '75rem',
      desktop1: '76.4375rem',
      desktop2: '1350px',
    },
    boxShadow: {
      buttonActive: '0 0 16px 0',
      cardActive: '0 0 40px 0',
      metricsShadow: '0 0 10px 0',
      metricShadow2: '0 1 2px 0',
      blogsNav: '0 0 0 1px rgba(0,0,0,.04), 0 7px 20px -5px rgba(0,0,0,.15)',
      blogCards: '0 0 10px rgba(0,0,0,.02)',
      blogCardsHover: '0 0 15px rgba(0,0,0,.2)',
    },
    textShadow: {
      lg: '0 0px 16px var(--tw-shadow-color)',
    },
    letterSpacing: {
      tightest: '-0.2619rem',
      light: '-2px',
    },
    fontSize: {
      clamp1: "clamp(2.5rem, 10vw, 6rem)",
      clamp2: "clamp(1.25rem, 2vw, 1.5rem)",
      clamp3: "clamp(1.5rem, 3vw, 2.25rem)",
      clamp4: "clamp(0.75rem, 1.5vw, 1rem)",
      clamp5: "clamp(1rem, 3vw, 1.25rem)",
      clamp6: "clamp(1.5rem, 3vw, 2rem)",
      clamp7: "clamp(1.25rem, 3vw, 1.75rem)",
      clampHeading: "clamp(2.25rem, 7vw, 4.5rem)",
      clampHeading2: 'clamp(3.75rem, 10vw, 8.25rem)',
      clampHeading3: 'clamp(3.125rem, 10vw, 8.25rem)',
      clampHeading4: 'clamp(2.25rem, 10vw, 3rem)',
      clampHeading5: 'clamp(2.25rem, 10vw, 3.5rem)',
      clampSub: "clamp(1rem, 2vw, 1.5rem)",
      clampSub1: "clamp(0.625rem, 2vw, 0.75rem)",
      clampSub2: "clamp(1rem, 2vw, 1.125rem)",

    },
    gridTemplateRows: {
      heroLayout: 'repeat(4, auto)',
      heroLayoutCol: 'fit-content'
    }
  },
}
export const plugins = [plugin(function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      'text-shadow': (value) => ({
        textShadow: value,
      }),
    },
    { values: theme('textShadow') }
  )
}), require('@tailwindcss/typography'),]
