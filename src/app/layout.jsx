import { Gochi_Hand, Lexend } from "next/font/google";
import "./globals.css";

const gochiHand = Gochi_Hand({
  subsets: ["latin"],
  variable: "--font-gochi-hand",
  weight: "400",
});
const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });

export const metadata = {
  title: "Ecenur's Portfolio",
  description: "Here you can see my portfolio! Enjoy!",
  icons:
    "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🪐</text></svg>",
  keywords: [
    "ux",
    "ui",
    "product",
    "requirements",
    "specification",
    "portfolio",
    "personal",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gochiHand.variable} ${lexend.variable}`}>
        {children}
      </body>
    </html>
  );
}
