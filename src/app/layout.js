import { ThemeProvider } from "@/lib/hooks/useTheme";
import { Inter, Lato, Montserrat, Roboto_Mono } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({  subsets: ["latin"], display: "swap", variable: "--font-montserrat"})
const lato = Lato({  subsets: ["latin"], display: "swap", variable: "--font-lato", weight: "300"})
const roboto = Roboto_Mono({  subsets: ["latin"], display: "swap", variable: "--font-roboto"})

export const metadata = {
  title: "Dhaifan Dito Adrian",
  description: "Dito Landing Page",
  icons: {
    icon: [
      {
        url: '/d.png',
        href: '/d.png',
      },
    ],
  },

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
      <body className={` ${montserrat.variable} ${lato.variable} ${roboto.variable}`}>
        <div className="font-montserrat">{children}</div>
        </body>
      </ThemeProvider>
    </html>
  );
}
