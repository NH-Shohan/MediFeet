import { Roboto } from "next/font/google";
import Footer from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "MediFeet",
  description: "Medical Health Shoe Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {/* <Header /> */}
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
