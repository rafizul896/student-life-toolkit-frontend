import {
  Users,
  Target,
  BookOpen,
  Heart,
  TrendingUp,
  Award,
  Sparkles,
  CheckCircle,
} from "lucide-react";

export default function AboutPage() {
  const cards = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "Empower students by providing them with digital tools to stay productive, focused, and stress-free during their academic journey.",
      gradient: "from-blue-500 to-cyan-500",
      iconBg: "bg-blue-100 dark:bg-blue-900/30",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: BookOpen,
      title: "Our Vision",
      description:
        "To become the go-to student companion app worldwide — helping students achieve success with better planning and smarter tools.",
      gradient: "from-purple-500 to-pink-500",
      iconBg: "bg-purple-100 dark:bg-purple-900/30",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
    {
      icon: Users,
      title: "Who We Are",
      description:
        "A passionate group of developers, designers, and learners who understand the struggles of student life and aim to solve them with technology.",
      gradient: "from-green-500 to-emerald-500",
      iconBg: "bg-green-100 dark:bg-green-900/30",
      iconColor: "text-green-600 dark:text-green-400",
    },
  ];

  const stats = [
    { icon: Users, value: "10,000+", label: "Active Students" },
    { icon: TrendingUp, value: "40%", label: "Productivity Boost" },
    { icon: Award, value: "4.9/5", label: "User Rating" },
    { icon: Heart, value: "95%", label: "Satisfaction Rate" },
  ];

  const values = [
    { icon: CheckCircle, text: "Student-first approach" },
    { icon: CheckCircle, text: "Continuous innovation" },
    { icon: CheckCircle, text: "Privacy & security" },
    { icon: CheckCircle, text: "Accessible to all" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-gray-900 dark:via-blue-950/20 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 dark:bg-blue-800 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300 dark:bg-purple-800 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                About Us
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
                Student Life Toolkit
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Built with one mission in mind – to make student life{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                smarter, simpler, and more organized
              </span>
              . Whether it&lsquo;s managing your class schedule, keeping track
              of your budget, planning your study sessions, or preparing for
              exams, this toolkit brings everything into one easy-to-use
              platform.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
                >
                  <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Who We Are */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 overflow-hidden"
              >
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                {/* Icon */}
                <div
                  className={`relative ${card.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon
                    className={`w-8 h-8 ${card.iconColor}`}
                    strokeWidth={2.5}
                  />
                </div>

                {/* Content */}
                <h3 className="relative text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {card.title}
                </h3>
                <p className="relative text-gray-600 dark:text-gray-300 leading-relaxed">
                  {card.description}
                </p>

                {/* Decorative element */}
                <div
                  className={`absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br ${card.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`}
                ></div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Our Values */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-3xl p-8 md:p-12 border border-blue-100 dark:border-gray-700">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Our Core Values
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-4 bg-white dark:bg-gray-700/50 rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {value.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-10 md:p-14 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Community
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Be part of thousands of students who are transforming their academic
            journey with our toolkit.
          </p>
          <button className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2">
            Get Started Free
            <Sparkles className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
