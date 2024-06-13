import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";
import { cn } from "@/lib/utils";
import { auth } from "@/auth";
import ReactQueryProvider from "@/provider/query-provider";

// const inter = Inter({ subsets: ["latin"] });

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Prisma Auth",
  description: "NextJS | NextAuth | Prisma - Template",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <SessionProvider session={session}>
          <ReactQueryProvider>
            {children}
            <Toaster richColors />
          </ReactQueryProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
