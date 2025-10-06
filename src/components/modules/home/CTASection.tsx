import React from "react";
import { ArrowRight, CheckCircle, Users, TrendingUp, Award } from "lucide-react";

const CTASection = () => {
  const features = [
    { icon: CheckCircle, text: "Free to get started" },
    { icon: Users, text: "Join 10,000+ students" },
    { icon: TrendingUp, text: "Boost productivity by 40%" },
    { icon: Award, text: "Award-winning platform" },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-8 overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 dark:from-blue-800 dark:via-indigo-800 dark:to-purple-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Dotted pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }}></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Main Content */}
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/30">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-white text-sm font-medium">Limited Time: Get Started Today!</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Organize Your
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-green-300 bg-clip-text text-transparent">
              Student Life?
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
            Join thousands of students who are already mastering their academic journey with our all-in-one toolkit.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-white/50 hover:scale-105 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center">
              Start Free Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center">
              Watch Demo
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <Icon className="w-4 h-4 text-green-300" strokeWidth={2.5} />
                  <span className="text-white text-sm font-medium">{feature.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            { number: "10,000+", label: "Active Students", sublabel: "Worldwide" },
            { number: "4.9/5", label: "Average Rating", sublabel: "From 2,500+ reviews" },
            { number: "50+", label: "Universities", sublabel: "Trust our platform" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-blue-100 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-blue-200">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-blue-200 text-sm">
            No credit card required • Get started in under 2 minutes • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;