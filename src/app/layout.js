import "./globals.css";
import Navbar from "@/components/Navbar";
import {Footer} from "@/components/Footer";

export const metadata = {
  title: "Hamie ",
  description: "",
};

export const favicon = "/logo.png";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-arp="">
      <body className="bg-gray-100">
        <Navbar />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
