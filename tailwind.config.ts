import type { Config } from "tailwindcss";
import daisyui from "daisyui"
import daisyTheme from "daisyui/src/theming/themes"

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
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
