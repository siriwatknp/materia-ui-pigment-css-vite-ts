import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { pigment } from "@pigment-css/vite-plugin";
import { extendTheme } from "@mui/material/styles";

const pigmentConfig = {
  theme: extendTheme({
    typography: {
      fontFamily: "var(--font-family)",
    },
  }),
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [pigment(pigmentConfig), react()],
});
