import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Load Inter for body text

// const roboto = Roboto({
//   weight: "400",
//   subsets: ["latin"],
// });
const Inter = localFont({ src: "../public/fonts/Inter.ttf" });
const Aime = localFont({ src: "../public/fonts/Aime-Regular-Trial.otf" });
const Geist = localFont({ src: "../public/fonts/Geist-Regular.ttf" });

export const metadata: Metadata = {
  title: "Mazeed.ai - AI CFO for Creators",
  description: "Your 24/7 AI financial partner in the creator economy",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-oid="qd9abur"
      style={{ fontWeight: 300 }}
      className={` ${Inter.className} `}
    >
      <body className="font-body" data-oid="-2x8jaj">
        {children}
      </body>
    </html>
  );
}
