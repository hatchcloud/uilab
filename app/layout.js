import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Marisol Azofeifa UI Playground",
  description: "Explore my UX/UI design portfolio, where I showcase my latest projects and creative process.",
  keywords: "UX, UI, Diseño Web, Portafolio de Diseño, Creatividad, Diseñador",
  author: "Marisol Azofeifa",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-stone-100 flex flex-col justify-center items-center`}
      >
        {children}
      </body>
    </html>
  );
}
