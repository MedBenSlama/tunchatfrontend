import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tunisian: {
          red: "#CE1126",
          white: "#FFFFFF",
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
      {
        tunichat: {
          primary: "#CE1126",
          secondary: "#1f2937",
          accent: "#CE1126",
          neutral: "#3f3f46",
          "base-100": "#fafafa",
          "base-200": "#f3f4f6",
          "base-300": "#e5e7eb",
          info: "#CE1126",
          success: "#10b981",
          warning: "#f59e0b",
          error: "#ce1126",
        },
      },
    ],
  },
};
