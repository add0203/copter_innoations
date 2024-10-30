import Provider from "@/app/provider";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dronecompany.com"),
  title: {
    default: "DroneTech Solutions",
    template: `%s | DroneTech Solutions`,
  },
  description:
    "Leading-edge drone technology for innovative solutions in aerial surveying, photography, and delivery services.",
  openGraph: {
    description:
      "Leading-edge drone technology for innovative solutions in aerial surveying, photography, and delivery services.",
    images: ["https://dronecompany.com/images/hero-drone.png"],
    url: "https://dronecompany.com/",
  },
  twitter: {
    card: "summary_large_image",
    title: "DroneTech Solutions",
    description:
      "Leading-edge drone technology for innovative solutions in aerial surveying, photography, and delivery services.",
    siteId: "",
    creator: "",
    creatorId: "",
    images: ["https://dronecompany.com/images/hero-drone.png"],
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
