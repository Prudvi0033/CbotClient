import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "react-toastify";


export const metadata: Metadata = {
  title: "Cbot",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>
          {`@import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Space+Grotesk:wght@300..700&family=Zalando+Sans+Expanded:ital,wght@0,200..900;1,200..900&display=swap');`}
        </style>
      </head>
      <body
        className='space-grotesk antialiased'
      >
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
