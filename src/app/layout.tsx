import type { Metadata } from "next";
import './globals.css'

export const metadata: Metadata = {
  title: "Fast Internet - from Space",
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
        {children}</body>
    </html>
  );
}
