"use client"
import React from "react";
import { ArrowRight, Sparkles, BookOpen, Calendar, Wallet, FileText, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="w-full relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-gray-900 dark:via-blue-950/20 dark:to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-200 dark:bg-purple-900 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-cyan-200 dark:bg-cyan-900 rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Floating icons decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <BookOpen className="absolute top-32 left-[10%] w-8 h-8 text-blue-400 dark:text-blue-600 opacity-30 animate-float" />
        <Calendar className="absolute top-48 right-[15%] w-10 h-10 text-purple-400 dark:text-purple-600 opacity-30 animate-float-delayed" />
        <Wallet className="absolute bottom-40 left-[20%] w-9 h-9 text-green-400 dark:text-green-600 opacity-30 animate-float" />
        <FileText className="absolute bottom-32 right-[25%] w-8 h-8 text-orange-400 dark:text-orange-600 opacity-30 animate-float-delayed" />
      </div>

      <main className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-24 lg:pt-32 lg:pb-32">
          {/* Top Badge */}
          <div className="flex justify-center mb-8">
            <a
              href="#"
              className="group inline-flex items-center gap-3 border-2 border-blue-200 dark:border-blue-800 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white dark:border-gray-800 flex items-center justify-center">
                  <Star className="w-3 h-3 text-white fill-white" />
                </div>
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white dark:border-gray-800"></div>
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white dark:border-gray-800"></div>
              </div>
              <span className="text-slate-700 dark:text-slate-200 hidden sm:inline">
                Join 10,000+ students achieving their goals
              </span>
              <span className="text-slate-700 dark:text-slate-200 sm:hidden">
                Join 10K+ students
              </span>
              <ArrowRight className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Main Content */}
          <div className="text-center">
            {/* Headline */}
            <div className="mb-6 inline-flex items-center justify-center gap-3">
              <Sparkles className="w-10 h-10 text-yellow-500 dark:text-yellow-400 animate-pulse" />
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl md:text-6xl lg:text-7xl">
                Your All-in-One
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
                  Student Life Toolkit
                </span>
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-xl md:max-w-3xl mx-auto mb-10 leading-relaxed">
              Stay organized, track your budget, prepare for exams, and plan your study goals — 
              <span className="font-semibold text-slate-800 dark:text-slate-200"> all in one place!</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2">
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="group bg-white dark:bg-gray-800 text-slate-800 dark:text-slate-200 font-semibold px-8 py-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center gap-2">
                Explore Features
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </button>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center justify-center gap-4 max-w-3xl mx-auto">
              {[
                { icon: BookOpen, text: "Smart Notes" },
                { icon: Calendar, text: "Class Scheduler" },
                { icon: Wallet, text: "Budget Tracker" },
                { icon: FileText, text: "Exam Prep" },
              ].map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-md transition-all duration-300"
                  >
                    <Icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {feature.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700">
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                Trusted by students from top universities worldwide
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 opacity-60 hover:opacity-100 transition-opacity duration-300">
                {["Harvard", "MIT", "Stanford", "Oxford", "Cambridge"].map((uni, idx) => (
                  <div key={idx} className="text-slate-600 dark:text-slate-400 font-semibold text-sm md:text-base">
                    {uni}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;