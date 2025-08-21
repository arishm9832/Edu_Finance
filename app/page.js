import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from "@/data/landing";
import HeroSection from "@/components/hero";
import Link from "next/link";
import { ArrowRight, GraduationCap, Users, Target, BookOpen, Award, Shield } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Empowering <span className="text-blue-400">Learners Worldwide</span>
            </h2>
            <p className="text-gray-400">Join our growing community of financially educated individuals</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {statsData.map((stat, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-r from-blue-600/20 to-teal-600/20 rounded-lg p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300">
                  <div className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to{" "}
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Master Financial Literacy
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive learning tools and resources designed to build your financial knowledge and confidence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <Card key={index} className="bg-slate-800/50 border-white/10 hover:border-blue-400/50 transition-all duration-300 group">
                <CardContent className="space-y-4 pt-6 p-6">
                  <div className="text-blue-400 group-hover:text-teal-400 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Learning <span className="text-blue-400">Journey</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Start building your financial expertise with our structured learning path
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {howItWorksData.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center mx-auto text-white text-xl font-bold">
                    {step.icon}
                  </div>
                  {index < howItWorksData.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-600 to-teal-600 transform translate-x-8"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Achievements Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Earn <span className="text-blue-400">Certifications</span> & Build Credentials
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Showcase your financial knowledge with industry-recognized certifications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-r from-blue-600/20 to-blue-800/20 border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 group">
              <CardContent className="pt-6 p-6 text-center">
                <Award className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Personal Finance Basics</h3>
                <p className="text-gray-400 mb-4">Master budgeting, saving, and debt management fundamentals</p>
                <div className="bg-blue-500/20 rounded-full px-4 py-2 inline-block">
                  <span className="text-blue-300 text-sm font-medium">Beginner Level</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-teal-600/20 to-teal-800/20 border-teal-500/20 hover:border-teal-400/50 transition-all duration-300 group">
              <CardContent className="pt-6 p-6 text-center">
                <BookOpen className="w-12 h-12 text-teal-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Investment Strategies</h3>
                <p className="text-gray-400 mb-4">Learn portfolio management and investment planning</p>
                <div className="bg-teal-500/20 rounded-full px-4 py-2 inline-block">
                  <span className="text-teal-300 text-sm font-medium">Intermediate Level</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-indigo-600/20 to-indigo-800/20 border-indigo-500/20 hover:border-indigo-400/50 transition-all duration-300 group">
              <CardContent className="pt-6 p-6 text-center">
                <Shield className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Financial Planning</h3>
                <p className="text-gray-400 mb-4">Advanced retirement and estate planning strategies</p>
                <div className="bg-indigo-500/20 rounded-full px-4 py-2 inline-block">
                  <span className="text-indigo-300 text-sm font-medium">Advanced Level</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Success <span className="text-blue-400">Stories</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Real stories from learners who transformed their financial understanding
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <Card key={index} className="bg-slate-800/50 border-white/10 hover:border-blue-400/50 transition-all duration-300 group">
                <CardContent className="pt-6 p-6">
                  <div className="mb-4">
                    <div className="font-semibold text-lg text-white">{testimonial.name}</div>
                    <div className="text-sm text-blue-400">{testimonial.role}</div>
                  </div>
                  <p className="text-gray-400 italic">"{testimonial.quote}"</p>
                  <div className="flex mt-4 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-sm">⭐</span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-slate-900 to-teal-900 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-40 h-40 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-teal-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="mb-8">
            <GraduationCap className="w-16 h-16 text-blue-400 mx-auto mb-4" />
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Ready to Master Your{" "}
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Financial Future?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Join thousands of learners already building financial confidence with EduFinance.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/dashboard">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 group"
              >
                Start Learning Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <div className="flex items-center gap-2 text-gray-400">
              <Users className="w-5 h-5" />
              <span>Free to get started</span>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Target className="w-4 h-4" />
              <span>Self-paced learning</span>
            </div>
            <div className="flex items-center gap-1">
              <Award className="w-4 h-4" />
              <span>Earn certificates</span>
            </div>
            <div className="flex items-center gap-1">
              <BookOpen className="w-4 h-4" />
              <span>Expert-created content</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;