import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Define IBM Plex Mono for headings
const ibmPlexMono = IBM_Plex_Mono({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono"
});

// Define IBM Plex Sans for body text
const ibmPlexSans = IBM_Plex_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-sans"
});

// Define JetBrains Mono for code snippets
const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono"
});

export const metadata: Metadata = {
  title: "Skander Benali | CTO & Full-Stack Developer",
  description: "Personal portfolio of Skander Benali, CTO, Full-Stack Developer, and AI Enthusiast with expertise in Spring Boot, Symfony, .NET, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${ibmPlexMono.variable} ${ibmPlexSans.variable} ${jetbrainsMono.variable}`}>
      <body className={`${ibmPlexSans.className} bg-tech-dark text-white transition-colors font-body`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
