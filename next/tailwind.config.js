/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  experimental: {
    fontLoaders: [
      { loader: "next/font/google", options: { subsets: ["latin"] } },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        Source: ["var(--font-source)"],
        Fjalla: ["var(--font-fjalla)"],
        Mitr: ["var(--font-mitr)"],
        Exo: ["var(--font-exo)"],
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/forms")],
  daisyui: {
    themes: [
      // {
      //   mytheme: {
      //     primary: "#319A21",
      //     "primary-focus": "#46BF33",
      //     "primary-content": "#5FD04E",
      //     secondary: "#12439F",
      //     "secondary-focus": "#626DE7",
      //     "secondary-content": "#19166A",
      //     accent: "#EB5C03",
      //     "accent-focus": "#ED6B1A",
      //     "accent-content": "#D54110",
      //     neutral: "#0D0A1B",
      //     "neutral-focus": "#1C1638",
      //     "neutral-content": "#090713",
      //     "base-100": "#fff",
      //     "base-200": "#F5F1ED",
      //     "base-300": "#EBE9E8",
      //   },
      // },
      "corporate",
    ],
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: false,
  },
};
