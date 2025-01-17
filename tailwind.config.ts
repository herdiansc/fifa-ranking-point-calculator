import type { Config } from "tailwindcss";
import daisyui from "daisyui"
import daisyTheme from "daisyui/src/theming/themes"

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Open Sans", sans-serif'] // Example with a custom font
    },
    container: {
      center: true,
      padding: "16px",
    },
    extend: {},
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      // "light",
      // "dark",
      {
        rivu: {
          ...daisyTheme["cupcake"],
          // primary: "#0A97B0",
          ".bg-card": {
            "background-color": "#ededed",
          },
          // secondary: "teal",
        },
      },
    ],
  },
} satisfies Config;
