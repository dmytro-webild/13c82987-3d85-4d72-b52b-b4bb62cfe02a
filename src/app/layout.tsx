import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Lato } from "next/font/google";



export const metadata: Metadata = {
  title: 'Crispy | Authentic Korean Beauty',
  description: 'Discover verified, trending K-beauty skincare and makeup delivered fresh from Korea. Shop authentic essentials trusted by beauty lovers worldwide.',
  openGraph: {
    "title": "Crispy | Authentic Korean Beauty",
    "description": "Verified Korean beauty products delivered worldwide.",
    "siteName": "Crispy"
  },
};

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${lato.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
