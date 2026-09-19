import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Perry’s Design Studio",
  description: "WDD325 multi-page website by Johnnie Perry",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="page-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}