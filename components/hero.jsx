"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, TrendingUp, Shield, Zap, BookOpen, Calculator, PiggyBank, GraduationCap, Award, Target } from "lucide-react";

const HeroSection = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const imageElement = imageRef.current;
    const textElement = textRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement?.classList.add("scrolled");
        textElement?.classList.add("scrolled");
      } else {
        imageElement?.classList.remove("scrolled");
        textElement?.classList.remove("scrolled");
      }
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const features = [
    { icon: BookOpen, text: "Financial Education" },
    { icon: Shield, text: "Secure Learning Platform" },
    { icon: Calculator, text: "Interactive Tools" }
  ];

  const educationItems = [
    "📚 Learn Budgeting Basics",
    "📊 Investment Strategies",
    "💰 Savings Goals",
    "🏦 Banking Essentials",
    "📈 Market Analysis",
    "🎯 Financial Planning",
    "💡 Smart Spending",
    "🔒 Security Tips",
    "📱 Digital Finance",
    "🎓 Certification Programs"
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-800 via-blue-900 to-slate-800 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-teal-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Custom Cursor */}
      <div
        className={`fixed pointer-events-none z-50 transition-all duration-300 ${
          isHovered ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          transform: "translate(-50%, -50%)"
        }}
      >
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-20 relative z-10">
        {/* Hero Content */}
        <div className="text-center mb-16">
          <div 
            ref={textRef}
            className="hero-text"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <h1 className="text-6xl md:text-8xl lg:text-[120px] font-bold mb-8 leading-tight">
              <span className="gradient-text bg-gradient-to-r from-blue-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent animate-gradient">
                EduFinance
              </span>
              <br />
              <span className="text-white hover:text-blue-300 transition-colors duration-500 cursor-pointer">
                Learning Hub
              </span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Master personal finance through interactive learning, practical tools, 
            and expert guidance. Build your financial future with confidence.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer"
              >
                <feature.icon className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link href="/dashboard">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-12 py-6 text-lg font-semibold rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 group"
            >
              Start Learning Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Educational Finance Banner */}
        <div className="relative max-w-6xl mx-auto">
          <div 
            ref={imageRef} 
            className="hero-image relative group"
          >
            {/* <Image 
      src="/banner.jpeg" 
      alt="Banner" 
      layout="responsive" 
      width={1200} 
      height={400} 
      className="rounded-xl object-cover"
    /> */}

            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            
            <div className="relative bg-slate-800/90 backdrop-blur-sm rounded-2xl p-8 border border-white/10 overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-8 h-8 text-blue-400" />
                  <h3 className="text-2xl font-bold text-white">Financial Education Center</h3>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-400">Interactive Learning</span>
                </div>
              </div>

              {/* Learning Modules Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-r from-blue-600/20 to-blue-800/20 rounded-lg p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <BookOpen className="w-6 h-6 text-blue-400" />
                    <h4 className="text-lg font-semibold text-white">Budgeting Basics</h4>
                  </div>
                  <p className="text-gray-300 text-sm">Learn to create and manage your personal budget effectively</p>
                  <div className="flex items-center gap-2 mt-4">
                    <div className="bg-blue-500/20 rounded-full px-3 py-1">
                      <span className="text-xs text-blue-300">Beginner</span>
                    </div>
                    <Award className="w-4 h-4 text-yellow-400" />
                  </div>
                </div>

                <div className="bg-gradient-to-r from-teal-600/20 to-teal-800/20 rounded-lg p-6 border border-teal-500/20 hover:border-teal-400/40 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="w-6 h-6 text-teal-400" />
                    <h4 className="text-lg font-semibold text-white">Investment Guide</h4>
                  </div>
                  <p className="text-gray-300 text-sm">Discover investment strategies and build your portfolio</p>
                  <div className="flex items-center gap-2 mt-4">
                    <div className="bg-teal-500/20 rounded-full px-3 py-1">
                      <span className="text-xs text-teal-300">Intermediate</span>
                    </div>
                    <Target className="w-4 h-4 text-green-400" />
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-600/20 to-indigo-800/20 rounded-lg p-6 border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <PiggyBank className="w-6 h-6 text-indigo-400" />
                    <h4 className="text-lg font-semibold text-white">Savings Goals</h4>
                  </div>
                  <p className="text-gray-300 text-sm">Set and achieve your financial savings objectives</p>
                  <div className="flex items-center gap-2 mt-4">
                    <div className="bg-indigo-500/20 rounded-full px-3 py-1">
                      <span className="text-xs text-indigo-300">All Levels</span>
                    </div>
                    <Calculator className="w-4 h-4 text-purple-400" />
                  </div>
                </div>
              </div>

              {/* Scrolling Education Banner */}
              <div className="bg-slate-700/50 rounded-lg p-6 border border-white/10 overflow-hidden">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <h4 className="text-lg font-semibold text-white">Featured Learning Topics</h4>
                </div>
                <div className="scrolling-banner">
                  <div className="scrolling-content">
                    {[...educationItems, ...educationItems].map((item, index) => (
                      <div key={index} className="inline-flex items-center gap-4 whitespace-nowrap">
                        <span className="text-gray-300 text-sm font-medium">{item}</span>
                        <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Progress Indicator */}
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-600">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">85%</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Your Learning Progress</p>
                    <p className="text-gray-400 text-xs">Keep going! You're doing great.</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-blue-400 text-sm font-medium">12 Modules Completed</p>
                  <p className="text-gray-400 text-xs">3 Certifications Earned</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .scrolling-banner {
          overflow: hidden;
          position: relative;
        }

        .scrolling-content {
          display: flex;
          gap: 2rem;
          animation: scroll 30s linear infinite;
        }

        .hero-text {
          transition: all 0.3s ease;
        }

        .hero-text:hover {
          transform: translateY(-5px);
        }

        .hero-image {
          transition: all 0.5s ease;
        }

        .hero-image.scrolled {
          transform: translateY(-20px) scale(0.95);
        }

        .hero-text.scrolled {
          transform: translateY(-10px);
        }

        .gradient-text {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;