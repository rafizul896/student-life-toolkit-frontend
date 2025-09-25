const FeaturesSection = () => {
  const features = [
    {
      title: "Class Schedule Tracker",
      desc: "Never miss a class again with your personal timetable.",
    },
    {
      title: "Budget Tracker",
      desc: "Track every penny of your pocket money with clarity.",
    },
    {
      title: "Exam Q&A Generator",
      desc: "Prepare for exams with smart Q&A sets.",
    },
    {
      title: "Study Planner",
      desc: "Break down big study goals into small manageable tasks.",
    },
    {
      title: "Notes",
      desc: "Keep your study notes safe and organized in one place.",
    },
  ];

  return (
    <section id="features" className="py-16 px-8 bg-gray-50 text-center">
      <h3 className="text-3xl font-bold mb-10">✨ Toolkit Features</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="p-6 bg-white shadow rounded-lg hover:shadow-lg"
          >
            <h4 className="text-xl font-semibold mb-2">{f.title}</h4>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
