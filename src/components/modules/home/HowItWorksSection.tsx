import React from "react";

const HowItWorksSection = () => {
  const steps = [
    "Sign up and create your student profile.",
    "Choose the tools you want to use (Class, Budget, Planner, Notes, etc.).",
    "Organize your daily student life easily.",
  ];

  return (
    <section className="py-16 px-8 text-center">
      <h3 className="text-3xl font-bold mb-10">⚡ How It Works</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <div key={i} className="p-6 bg-blue-50 border rounded-lg shadow">
            <span className="text-2xl font-bold text-blue-600">
              Step {i + 1}
            </span>
            <p className="mt-4 text-gray-700">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
