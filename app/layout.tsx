import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { dark, neobrutalism } from "@clerk/themes";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recipe Generator",
  description: "Recipe Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <ClerkProvider
        appearance={{
          baseTheme: dark,
          variables: { colorPrimary: "#24b357" },
        }}
      >
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </ClerkProvider>
    </html>
  );
}
