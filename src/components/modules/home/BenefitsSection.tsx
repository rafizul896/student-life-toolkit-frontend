import React from "react";
import { Target, Clock, Wallet, Rocket, GraduationCap, Sparkles } from "lucide-react";

type BenefitColor = "emerald" | "blue" | "amber" | "violet";

const BenefitsSection = () => {
  const benefits: Array<{
    title: string;
    desc: string;
    icon: typeof Target;
    color: BenefitColor;
  }> = [
    {
      title: "Stay Focused",
      desc: "Never miss deadlines or classes. Keep your study life organized and stress-free.",
      icon: Target,
      color: "emerald",
    },
    {
      title: "Save Time",
      desc: "All your study tools in one place. No more juggling between multiple apps.",
      icon: Clock,
      color: "blue",
    },
    {
      title: "Manage Money Easily",
      desc: "Track your pocket money and expenses effortlessly with our Budget Tracker.",
      icon: Wallet,
      color: "amber",
    },
    {
      title: "Boost Productivity",
      desc: "Plan your study goals and break them into manageable tasks to achieve more.",
      icon: Rocket,
      color: "violet",
    },
  ];

  const colorClasses: Record<BenefitColor, {
    gradient: string;
    cardBg: string;
    iconBg: string;
    iconColor: string;
    glowColor: string;
  }> = {
    emerald: {
      gradient: "from-emerald-500 to-teal-500",
      cardBg: "bg-emerald-50 dark:bg-emerald-900/20",
      iconBg: "bg-gradient-to-br from-emerald-500 to-teal-500",
      iconColor: "text-white",
      glowColor: "group-hover:shadow-emerald-500/50",
    },
    blue: {
      gradient: "from-blue-500 to-cyan-500",
      cardBg: "bg-blue-50 dark:bg-blue-900/20",
      iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
      iconColor: "text-white",
      glowColor: "group-hover:shadow-blue-500/50",
    },
    amber: {
      gradient: "from-amber-500 to-orange-500",
      cardBg: "bg-amber-50 dark:bg-amber-900/20",
      iconBg: "bg-gradient-to-br from-amber-500 to-orange-500",
      iconColor: "text-white",
      glowColor: "group-hover:shadow-amber-500/50",
    },
    violet: {
      gradient: "from-violet-500 to-purple-500",
      cardBg: "bg-violet-50 dark:bg-violet-900/20",
      iconBg: "bg-gradient-to-br from-violet-500 to-purple-500",
      iconColor: "text-white",
      glowColor: "group-hover:shadow-violet-500/50",
    },
  };

  return (
    <section className="py-20 px-4 sm:px-8 bg-gradient-to-b from-green-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-300 dark:bg-emerald-700 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-300 dark:bg-teal-700 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Why Choose Student Life Toolkit?
            </h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            Discover the benefits that make us the perfect companion for your academic journey
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const colors = colorClasses[benefit.color];
            const Icon = benefit.icon;
            
            return (
              <div
                key={index}
                className={`group relative ${colors.cardBg} backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl ${colors.glowColor} transition-all duration-500 hover:-translate-y-3 border border-white/50 dark:border-gray-700/50`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                
                {/* Icon with gradient background */}
                <div className="relative mb-6 flex justify-center">
                  <div className={`${colors.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <Icon className={`w-10 h-10 ${colors.iconColor}`} strokeWidth={2.5} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="relative text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 text-center">
                  {benefit.title}
                </h3>
                <p className="relative text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                  {benefit.desc}
                </p>

                {/* Animated sparkle effect on hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Sparkles className={`w-5 h-5 text-${benefit.color}-500 animate-pulse`} />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default BenefitsSection;