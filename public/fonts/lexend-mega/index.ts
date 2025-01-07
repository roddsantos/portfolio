import localFont from "next/font/local";

export const lexendMega = localFont({
  src: [
    {
      path: "./LexendMega-Regular.ttf",
      weight: "400",
    },
    {
      path: "./LexendMega-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-lexend-mega",
});
