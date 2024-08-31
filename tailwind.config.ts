import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
      
      
     
      animation: {
        fadein: 'fade-in 1s ease-in-out 0.25s 1',
        fadeout: 'fade-out 1s ease-out 0.25s 1',
        fadeindown: 'fade-in-down 1s ease-in 0.25s 1',
        fadeintopleft: 'fade-in-top-left 1s ease-out 0.25s 1',
        fadeintopright: 'fade-in-top-right 1s ease-out 0.25s 1',
        fadeinbottomleft: 'fade-in-bottom-left 1s ease-out 0.25s 1',
        fadeinbottomright: 'fade-in-bottom-right 1s ease-out 0.25s 1',
        fadeinleft: 'fade-in-left 1s ease-in-out 0.25s 1',
        fadeinbouncedown: 'fade-in-bouncedown 1s ease-in-out 0.25s 1',
        fadeinbounceup: 'fade-in-bounceup 1s ease-in-out 0.25s 1',
        fadeinbounceright: 'fade-in-bounce-right 1s ease-in-out 0.25s 1',
        fadeinbounceleft: 'fade-in-bounce-left 1s ease-in-out 0.25s 1',
        fadeinright: 'fade-in-right 1s ease-in-out 0.25s 1',
        fadeinup: 'fade-in-up 1s ease-in-out 0.25s 1',
        fadeoutdown: 'fade-out-down 1s ease-in-out 0.25s 1',
        fadeouttopleft: 'fade-out-top-left 1s ease-in-out 0.25s 1',
        fadeouttopright: 'fade-out-top-right 1s ease-in-out 0.25s 1',
        fadeoutleft: 'fade-out-left 1s ease-in-out 0.25s 1',
        fadeoutright: 'fade-out-right 1s ease-in-out 0.25s 1',
        fadeoutup: 'fade-out-up 1s ease-in-out 0.25s 1',
        
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

