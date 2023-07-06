import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";

const DynamicBootstrap = dynamic(
  () => require("bootstrap/dist/js/bootstrap.min.js"),
  { ssr: false }
);

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "安全認證",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
