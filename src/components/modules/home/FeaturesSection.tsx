import React from "react";
import { Calendar, Wallet, FileQuestion, CalendarCheck, BookOpen, Sparkles } from "lucide-react";

type FeatureColor = "blue" | "green" | "purple" | "orange" | "pink";

const FeaturesSection = () => {
  const features: Array<{
    icon: typeof Calendar;
    title: string;
    desc: string;
    color: FeatureColor;
  }> = [
    {
      icon: Calendar,
      title: "Class Schedule Tracker",
      desc: "Never miss a class again with your personal timetable and smart reminders.",
      color: "blue",
    },
    {
      icon: Wallet,
      title: "Budget Tracker",
      desc: "Track every penny of your pocket money with clarity and insightful spending analytics.",
      color: "green",
    },
    {
      icon: FileQuestion,
      title: "Exam Q&A Generator",
      desc: "Prepare for exams with smart Q&A sets tailored to your study materials.",
      color: "purple",
    },
    {
      icon: CalendarCheck,
      title: "Study Planner",
      desc: "Break down big study goals into small manageable tasks with deadline tracking.",
      color: "orange",
    },
    {
      icon: BookOpen,
      title: "Notes",
      desc: "Keep your study notes safe and organized in one place with easy search.",
      color: "pink",
    },
  ];

  const colorClasses: Record<FeatureColor, {
    gradient: string;
    iconBg: string;
    iconColor: string;
    borderHover: string;
  }> = {
    blue: {
      gradient: "from-blue-500 to-cyan-500",
      iconBg: "bg-blue-100 dark:bg-blue-900/30",
      iconColor: "text-blue-600 dark:text-blue-400",
      borderHover: "group-hover:border-blue-400",
    },
    green: {
      gradient: "from-green-500 to-emerald-500",
      iconBg: "bg-green-100 dark:bg-green-900/30",
      iconColor: "text-green-600 dark:text-green-400",
      borderHover: "group-hover:border-green-400",
    },
    purple: {
      gradient: "from-purple-500 to-pink-500",
      iconBg: "bg-purple-100 dark:bg-purple-900/30",
      iconColor: "text-purple-600 dark:text-purple-400",
      borderHover: "group-hover:border-purple-400",
    },
    orange: {
      gradient: "from-orange-500 to-red-500",
      iconBg: "bg-orange-100 dark:bg-orange-900/30",
      iconColor: "text-orange-600 dark:text-orange-400",
      borderHover: "group-hover:border-orange-400",
    },
    pink: {
      gradient: "from-pink-500 to-rose-500",
      iconBg: "bg-pink-100 dark:bg-pink-900/30",
      iconColor: "text-pink-600 dark:text-pink-400",
      borderHover: "group-hover:border-pink-400",
    },
  };

  return (
    <section id="features" className="py-20 px-4 sm:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-purple-600 dark:text-purple-400 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Toolkit Features
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            Everything you need to excel in your student life, all in one powerful toolkit
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, i) => {
            const colors = colorClasses[feature.color];
            const Icon = feature.icon;
            
            return (
              <div
                key={i}
                className={`group relative p-6 md:p-8 bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 ${colors.borderHover} shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
              >
                {/* Gradient background effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`relative w-14 h-14 md:w-16 md:h-16 ${colors.iconBg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 md:w-8 md:h-8 ${colors.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="relative text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="relative text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.desc}
                </p>

                {/* Decorative corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
            Ready to transform your student experience?
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
            Explore All Features
            <Sparkles className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;