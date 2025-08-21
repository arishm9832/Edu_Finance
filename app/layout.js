import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EduFinance",
  description: "A Unified Platform for Smarter Financial Management",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} bg-slate-900 text-white transition-colors duration-300`}>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Toaster 
            richColors 
            theme="dark"
            position="top-right"
            toastOptions={{
              style: {
                background: 'rgba(30, 41, 59, 0.95)',
                border: '1px solid rgba(148, 163, 184, 0.2)',
                color: 'white',
              },
            }}
          />
          
          <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 py-12 mt-20 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  EduFinance
                </h3>
                <p className="text-gray-400 max-w-md mx-auto">
                  Empowering your financial journey with intelligent insights and seamless management.
                </p>
              </div>
              
              <div className="flex justify-center space-x-6 mb-8">
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Support
                </a>
              </div>
              
              <div className="border-t border-white/10 pt-6">
                <p className="text-sm text-gray-500">
                  Crafted with passion by{" "}
                  <span className="font-semibold text-purple-400">Kshitij</span> — EduFinance ©{" "}
                  {new Date().getFullYear()}
                </p>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}