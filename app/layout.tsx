import { Cinzel, Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

/** Header brand + main nav — bold geometric sans similar to reference comps. */
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/** Display serif for grand prize / ceremonial headlines only. */
const grandDisplay = Cinzel({
  variable: "--font-grand-display",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${geistSans.variable} ${geistMono.variable} ${grandDisplay.variable} ${montserrat.variable} h-full antialiased`}
      lang="ms"
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-white text-[#001F3F]">
        {children}
      </body>
    </html>
  );
}
