import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./_conponents/Header";
import Footer from "./_conponents/Footer";

const inter = Roboto({ subsets: ["latin"], weight: ["400", "700", "900"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
