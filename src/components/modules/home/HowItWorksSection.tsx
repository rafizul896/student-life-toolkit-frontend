import React from "react";
import { UserPlus, Settings, Sparkles, ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Create Your Profile",
      description: "Sign up and create your personalized student profile in seconds.",
      color: "blue",
    },
    {
      icon: Settings,
      title: "Choose Your Tools",
      description: "Select from Class, Budget, Planner, Notes, and more tools tailored to your needs.",
      color: "indigo",
    },
    {
      icon: Sparkles,
      title: "Stay Organized",
      description: "Manage your daily student life effortlessly with all your tools in one place.",
      color: "purple",
    },
  ];

  const colorClasses = {
    blue: {
      bg: "bg-blue-50 dark:bg-blue-900/20",
      iconBg: "bg-blue-100 dark:bg-blue-900/40",
      iconColor: "text-blue-600 dark:text-blue-400",
      border: "border-blue-200 dark:border-blue-800",
      stepColor: "text-blue-600 dark:text-blue-400",
    },
    indigo: {
      bg: "bg-indigo-50 dark:bg-indigo-900/20",
      iconBg: "bg-indigo-100 dark:bg-indigo-900/40",
      iconColor: "text-indigo-600 dark:text-indigo-400",
      border: "border-indigo-200 dark:border-indigo-800",
      stepColor: "text-indigo-600 dark:text-indigo-400",
    },
    purple: {
      bg: "bg-purple-50 dark:bg-purple-900/20",
      iconBg: "bg-purple-100 dark:bg-purple-900/40",
      iconColor: "text-purple-600 dark:text-purple-400",
      border: "border-purple-200 dark:border-purple-800",
      stepColor: "text-purple-600 dark:text-purple-400",
    },
  };

  return (
    <section className="py-20 px-4 sm:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-blue-600 dark:text-blue-400 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              How It Works
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Get started in three simple steps and transform your student life
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection arrows for desktop */}
          <div className="hidden md:flex absolute top-24 left-0 right-0 items-center justify-center pointer-events-none">
            <div className="flex items-center w-full max-w-5xl mx-auto px-32">
              <ArrowRight className="w-8 h-8 text-gray-300 dark:text-gray-600 mx-auto" />
              <ArrowRight className="w-8 h-8 text-gray-300 dark:text-gray-600 mx-auto" />
            </div>
          </div>

          {steps?.map((step, i) => {
            const colors = colorClasses[step.color];
            const Icon = step.icon;
            
            return (
              <div
                key={i}
                className={`relative p-8 ${colors.bg} border-2 ${colors.border} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group`}
              >
                {/* Step Number Badge */}
                <div className={`absolute -top-4 -left-4 w-12 h-12 ${colors.iconBg} rounded-full flex items-center justify-center border-4 border-white dark:border-gray-900 shadow-md`}>
                  <span className={`text-xl font-bold ${colors.stepColor}`}>
                    {i + 1}
                  </span>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 ${colors.iconBg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${colors.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
            Get Started Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;