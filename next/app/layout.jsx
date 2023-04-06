import "./globals.css";
import { Fjalla_One, Mitr, Source_Sans_3, Exo } from "next/font/google";
// import { getPageData } from "@/lib/fetchPageData";

const fjalla = Fjalla_One({
  variable: "--font-fjalla",
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});
const exo = Exo({
  variable: "--font-exo",
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});
const source = Source_Sans_3({
  weight: "400",
  style: "normal",
  variable: "--font-source",
  subsets: ["latin"],
});
const mitr = Mitr({
  weight: "400",
  style: "normal",
  variable: "--font-mitr",
  subsets: ["latin"],
});

// fetch page ici pour les metadonnée
export const metadata = {
  title: "Votre site | Your website",
  description: "Made by Indev",
  icons: {
    icon: "/indev_orange.png",
  },
};

export default async function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${source.variable}
    ${exo.variable} ${mitr.variable}
    ${fjalla.variable} `}
      data-theme="corporate"
    >
      {/* provider */}
      <body className="flex flex-col items-center justify-center">
        {children}
      </body>
      {/* provider */}
    </html>
  );
}
