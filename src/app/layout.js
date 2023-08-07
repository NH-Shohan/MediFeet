import Footer from "@/components/layouts/Footer";
import { Header } from "@/components/layouts/Header";
import { Navbar } from "@/components/layouts/Navbar";
import { Roboto } from "next/font/google";
import Script from "next/script";
import { GlobalProvider } from "./GlobalProvider";
import "./globals.css";

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
      <link rel="icon" href="/logo.png" sizes="any" />
      <body className={roboto.className}>
        <GlobalProvider>
          <Header />
          <Navbar />
          <div className="bg-[#91F488] rotate-[-90deg] translate-x-[38px] py-2 px-4 absolute right-0 top-[50%] rounded-t-xl font-bold">
            <p>WHATSAPP</p>
          </div>

          {children}
          <Footer />

          <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.7.0/flowbite.min.js" />
          <Script src="https://kit.fontawesome.com/4bd420869f.js" />
        </GlobalProvider>
      </body>
    </html>
  );
}
