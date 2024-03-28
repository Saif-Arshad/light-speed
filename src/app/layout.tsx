import type { Metadata } from "next";
import './globals.css'
import Footer from "@/Components/footer";
import Nav from "@/Components/Nav";

export const metadata: Metadata = {
  title: "Light Speed - We provide Fast Internet from Space",
  description: "We are an agency responsible providing internet from space",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Nav/>
        {children}
        <Footer/>
        </body>

    </html>
  );
}
