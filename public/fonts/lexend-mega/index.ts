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
    {
      path: "./LexendMega-ExtraBold.ttf",
      weight: "800",
    },
  ],
  variable: "--font-lexend-mega",
});
