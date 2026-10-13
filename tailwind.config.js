/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. Tambahkan preset NativeWind di sini
  presets: [require("nativewind/preset")],
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // --- Primary Colors ---
        primary: "#36671c",
        "primary-container": "#4e8133",
        "on-primary": "#ffffff",
        "on-primary-container": "#f8ffed",
        "primary-fixed": "#b8f396",
        "primary-fixed-dim": "#9dd67d",
        "on-primary-fixed": "#082100",
        "on-primary-fixed-variant": "#215105",
        "inverse-primary": "#9dd67d",

        // --- Secondary Colors ---
        secondary: "#4c662e",
        "secondary-container": "#cbeaa4",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#506a32",
        "secondary-fixed": "#ceeda7",
        "secondary-fixed-dim": "#b2d08d",
        "on-secondary-fixed": "#0f2000",
        "on-secondary-fixed-variant": "#354e19",

        // --- Tertiary Colors ---
        tertiary: "#9d3b3d",
        "tertiary-container": "#bd5353",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#fffbff",
        "tertiary-fixed": "#ffdad8",
        "tertiary-fixed-dim": "#ffb3b1",
        "on-tertiary-fixed": "#410007",
        "on-tertiary-fixed-variant": "#81262a",

        // --- Surface & Background ---
        background: "#f9f9f9",
        "on-background": "#1a1c1c",
        surface: "#f9f9f9",
        "on-surface": "#1a1c1c",
        "on-surface-variant": "#42493c",
        "surface-dim": "#dadada",
        "surface-bright": "#f9f9f9",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f3f3f3",
        "surface-container": "#eeeeee",
        "surface-container-high": "#e8e8e8",
        "surface-container-highest": "#e2e2e2",
        "surface-variant": "#e2e2e2",
        "surface-tint": "#386a1e",
        "inverse-surface": "#2f3131",
        "inverse-on-surface": "#f1f1f1",

        // --- Outline & Border ---
        outline: "#72796b",
        "outline-variant": "#c2c9b8",

        // --- Error States ---
        error: "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",
      },
      fontFamily: {
        sans: ["PlusJakartaSans-Regular"],
        medium: ["PlusJakartaSans-Medium"],
        semibold: ["PlusJakartaSans-SemiBold"],
        bold: ["PlusJakartaSans-Bold"],
      },
      borderRadius: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "3rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};