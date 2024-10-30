import Provider from "@/app/provider";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://copterinnovations.com"),
  title: {
    default: "",
    template: `%s | Copter Innovations`,
  },
  description:
    "At Copter Innovations, we specialize in manufacturing precision-engineered drone frames, including Multi-copters, Fixed Wings, and Hybrid VTOLs, tailored to our clients' needs.",
  openGraph: {
    description:
      "Copter Innovations offers high-quality drone frames such as Quad-550, FW-220, 18-inch Quad, and FW-160. We redefine the drone manufacturing landscape with innovative, lightweight, and durable designs.",
    images: ["https://copterinnovations.com/images/hero-drone.png"],
    url: "https://copterinnovations.com/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Copter Innovations",
    description:
      "Specializing in Multi-copters, Fixed Wings, and Hybrid VTOLs, Copter Innovations delivers precision-engineered drone frames for aerial photography, mapping, and racing.",
    siteId: "@copterinnovations",
    creator: "@copterinnovations",
    images: ["https://copterinnovations.com/images/hero-drone.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <AuthWrapper>
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <Provider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </Provider>
        <Analytics />
      </body>
    </html>
    // </AuthWrapper>
  );
}
