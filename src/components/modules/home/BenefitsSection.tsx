import React from "react";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Stay Focused",
      desc: "Never miss deadlines or classes. Keep your study life organized and stress-free.",
      icon: "🎯",
    },
    {
      title: "Save Time",
      desc: "All your study tools in one place. No more juggling between multiple apps.",
      icon: "⏱️",
    },
    {
      title: "Manage Money Easily",
      desc: "Track your pocket money and expenses effortlessly with our Budget Tracker.",
      icon: "💰",
    },
    {
      title: "Boost Productivity",
      desc: "Plan your study goals and break them into manageable tasks to achieve more.",
      icon: "🚀",
    },
  ];

  return (
    <section className="py-16 px-8 bg-green-50 text-center">
      <h3 className="text-3xl font-bold mb-12">
        🎓 Why Choose Student Life Toolkit?
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition duration-300"
          >
            <div className="text-5xl mb-4">{benefit.icon}</div>
            <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
            <p className="text-gray-700">{benefit.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
