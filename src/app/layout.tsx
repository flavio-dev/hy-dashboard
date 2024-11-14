import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const mont = localFont({
  src: "./fonts/MontHeavy.otf",
  variable: "--font-mont",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "hy - Dashboard",
  description: "Dashboard List for File Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${mont.variable} font-geistSans antialiased`}
      >
        <header className="fixed top-0 left-0 w-full border-b-4 border-white bg-white">
          <div className="flex justify-between py-2.5 sm:py-4 px-3 sm:px-4 lg:px-6 border-b-4 border-black">
            <div className="flex items-end">
              <Image
                className="dark:invert"
                src="/logo-dark.svg"
                alt="hy logo"
                width={40}
                height={40}
                priority
              />{" "}
              <h1 className="text-2xl sm:text-3xl ml-4 font-mont">
                Chatbot Content Manager
              </h1>
            </div>
            <div>Theming</div>
          </div>
        </header>
        <div className="pt-16 sm:pt-20">{children}</div>
      </body>
    </html>
  );
}
