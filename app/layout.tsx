import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Twilight",
  description: "Twinkle Twinkle Little Hero",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className="max-w-md mx-auto">
        {children}
      </body>
    </html>
  );
}
