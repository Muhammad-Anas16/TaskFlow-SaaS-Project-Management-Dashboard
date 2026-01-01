import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthWrapper from "@/components/main/LayoutWrapper";
import NavbarFooterWrapper from "@/components/main/NavbarFooterWrapper";
import UserWrapper from "@/components/main/UserWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TaskFlow",
  description: "TaskFlow – SaaS Project Management Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarFooterWrapper>
          <AuthWrapper>
            <UserWrapper>
              {children}
            </UserWrapper>
          </AuthWrapper>
        </NavbarFooterWrapper>
      </body>
    </html>
  );
}
