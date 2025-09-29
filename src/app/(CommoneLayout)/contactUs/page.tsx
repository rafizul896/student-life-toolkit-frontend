import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageSquare, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
      <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
        Have questions, feedback, or suggestions? We'd love to hear from you! 
        Reach out to us and we'll get back to you as soon as possible.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Contact Form */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-6 w-6 text-indigo-600" />
              Send Us a Message
            </CardTitle>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-center">
                Thank you! Your message has been sent successfully.
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="What is this about?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                    placeholder="Tell us more..."
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition flex items-center justify-center gap-2 font-medium"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-6">
          <Card className="shadow-md hover:shadow-lg transition">
            <CardHeader className="flex flex-row items-center gap-3">
              <Mail className="h-8 w-8 text-indigo-600" />
              <CardTitle>Email Us</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600">
              <p className="mb-2">For general inquiries:</p>
              <a href="mailto:support@studentlifetoolkit.com" className="text-indigo-600 hover:underline font-medium">
                support@studentlifetoolkit.com
              </a>
              <p className="mt-4 mb-2">For partnerships:</p>
              <a href="mailto:partners@studentlifetoolkit.com" className="text-indigo-600 hover:underline font-medium">
                partners@studentlifetoolkit.com
              </a>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition">
            <CardHeader className="flex flex-row items-center gap-3">
              <MessageSquare className="h-8 w-8 text-indigo-600" />
              <CardTitle>Community</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600">
              <p className="mb-3">Join our community for tips, updates, and support:</p>
              <div className="space-y-2">
                <a href="#" className="block text-indigo-600 hover:underline font-medium">
                  Discord Community →
                </a>
                <a href="#" className="block text-indigo-600 hover:underline font-medium">
                  Twitter/X @StudentToolkit →
                </a>
                <a href="#" className="block text-indigo-600 hover:underline font-medium">
                  Reddit Community →
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition">
            <CardHeader className="flex flex-row items-center gap-3">
              <MapPin className="h-8 w-8 text-indigo-600" />
              <CardTitle>Location</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600">
              <p>Student Life Toolkit HQ</p>
              <p className="text-sm mt-1">
                Remote-first team<br />
                Serving students worldwide 🌍
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-center">Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">How quickly will I get a response?</h3>
            <p className="text-gray-600 text-sm">We typically respond within 24-48 hours during business days.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Is this platform free?</h3>
            <p className="text-gray-600 text-sm">Yes! Student Life Toolkit is completely free for all students.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Can I suggest new features?</h3>
            <p className="text-gray-600 text-sm">Absolutely! We love hearing your ideas. Just use the contact form above.</p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}