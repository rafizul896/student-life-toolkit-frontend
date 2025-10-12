'use client'
import  { useState } from "react";
import { Mail, MessageSquare, MapPin, Send, HelpCircle, CheckCircle2, Globe } from "lucide-react";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const contactCards = [
    {
      icon: Mail,
      title: "Email Us",
      gradient: "from-blue-500 to-cyan-500",
      items: [
        { label: "For general inquiries:", email: "support@studentlifetoolkit.com" },
        { label: "For partnerships:", email: "partners@studentlifetoolkit.com" },
      ],
    },
    {
      icon: MessageSquare,
      title: "Community",
      gradient: "from-purple-500 to-pink-500",
      items: [
        { label: "Discord Community", link: "#" },
        { label: "Twitter/X @StudentToolkit", link: "#" },
        { label: "Reddit Community", link: "#" },
      ],
    },
    {
      icon: MapPin,
      title: "Location",
      gradient: "from-green-500 to-emerald-500",
      items: [
        { label: "Student Life Toolkit HQ" },
        { label: "Remote-first team" },
        { label: "Serving students worldwide 🌍" },
      ],
    },
  ];

  const faqs = [
    {
      question: "How quickly will I get a response?",
      answer: "We typically respond within 24-48 hours during business days.",
    },
    {
      question: "Is this platform free?",
      answer: "Yes! Student Life Toolkit is completely free for all students.",
    },
    {
      question: "Can I suggest new features?",
      answer: "Absolutely! We love hearing your ideas. Just use the contact form above.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-gray-900 dark:via-blue-950/20 dark:to-gray-900">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
        <div className="absolute top-40 left-20 w-72 h-72 bg-blue-300 dark:bg-blue-800 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-purple-300 dark:bg-purple-800 rounded-full blur-3xl"></div>
      </div>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-6">
            <MessageSquare className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">Get In Touch</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have questions, feedback, or suggestions? We&lsquo;d love to hear from you! 
            Reach out and we&lsquo;ll get back to you as soon as possible.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-12 h-12 rounded-xl flex items-center justify-center">
                <Send className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Send Us a Message
              </h2>
            </div>

            {submitted ? (
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-500 dark:border-green-600 rounded-2xl p-6 text-center">
                <CheckCircle2 className="w-16 h-16 text-green-600 dark:text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-green-700 dark:text-green-400">
                  Thank you for reaching out. We&lsquo;ll get back to you soon.
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300"
                    placeholder="Tell us more..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`bg-gradient-to-br ${card.gradient} w-12 h-12 rounded-xl flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {card.title}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {card.items.map((item, itemIdx) => (
                      <div key={itemIdx}>
                        {item.label && !item.email && !item.link && (
                          <p className="text-gray-700 dark:text-gray-300">
                            {item.label}
                          </p>
                        )}
                        {item.label && item.email && (
                          <>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
                              {item.label}
                            </p>
                            <a
                              href={`mailto:${item.email}`}
                              className="text-blue-600 dark:text-blue-400 hover:underline font-semibold block"
                            >
                              {item.email}
                            </a>
                          </>
                        )}
                        {item.link && (
                          <a
                            href={item.link}
                            className="text-blue-600 dark:text-blue-400 hover:underline font-semibold flex items-center gap-1 group"
                          >
                            <span>{item.label}</span>
                            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 rounded-3xl p-8 md:p-12 shadow-xl border border-purple-100 dark:border-gray-700">
          <div className="flex items-center justify-center gap-3 mb-8">
            <HelpCircle className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-700/50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <Globe className="w-5 h-5" />
            <span className="text-sm">Available 24/7 • Response within 48 hours • Supporting students worldwide</span>
          </div>
        </div>
      </section>
    </div>
  );
}