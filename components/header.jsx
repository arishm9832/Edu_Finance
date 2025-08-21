import React from "react";
import { Button } from "./ui/button";
import { PenBox, LayoutDashboard, Menu, X } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser";
import Image from "next/image";

const Header = async () => {
  await checkUser();

  return (
    <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md z-50 border-b border-white/10">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">E</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            EduFinance
          </span>
        </Link>

        {/* Navigation Links - Different for signed in/out users */}
        <div className="hidden md:flex items-center space-x-8">
          <SignedOut>
            <a 
              href="#features" 
              className="text-gray-300 hover:text-purple-400 transition-colors duration-200 font-medium"
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="text-gray-300 hover:text-purple-400 transition-colors duration-200 font-medium"
            >
              Testimonials
            </a>
          </SignedOut>
          <SignedIn>
            <Link
              href="/dashboard"
              className="text-gray-300 hover:text-purple-400 transition-colors duration-200 font-medium"
            >
              Dashboard
            </Link>
            <Link
              href="/transaction/create"
              className="text-gray-300 hover:text-purple-400 transition-colors duration-200 font-medium"
            >
              Transactions
            </Link>
          </SignedIn>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link
              href="/dashboard"
              className="hidden md:block"
            >
              <Button 
                variant="outline" 
                className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-purple-400/50 transition-all duration-200"
              >
                <LayoutDashboard size={18} />
                <span className="hidden lg:inline ml-2">Dashboard</span>
              </Button>
            </Link>
            <Link href="/transaction/create">
              <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 shadow-lg hover:shadow-purple-500/25 transition-all duration-200">
                <PenBox size={18} />
                <span className="hidden lg:inline ml-2">Add Transaction</span>
              </Button>
            </Link>
          </SignedIn>
          
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button 
                variant="outline"
                className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-purple-400/50 transition-all duration-200"
              >
                Login
              </Button>
            </SignInButton>
          </SignedOut>
          
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10 ring-2 ring-purple-400/50 rounded-full",
                  userButtonPopoverCard: "bg-slate-800 border-white/10",
                  userButtonPopoverText: "text-white",
                  userButtonPopoverActionButton: "text-gray-300 hover:text-white hover:bg-white/10",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;