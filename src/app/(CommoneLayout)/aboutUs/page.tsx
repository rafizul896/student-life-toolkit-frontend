import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, BookOpen } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
      <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
        The <span className="font-semibold">Student Life Toolkit</span> is built 
        with one mission in mind – to make student life smarter, simpler, and more organized. 
        Whether it’s managing your class schedule, keeping track of your budget, 
        planning your study sessions, or preparing for exams, this toolkit brings 
        everything into one easy-to-use platform.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Our Mission */}
        <Card className="shadow-md hover:shadow-lg transition">
          <CardHeader className="flex flex-col items-center">
            <Target className="h-10 w-10 text-indigo-600 mb-2" />
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600 text-center">
            Empower students by providing them with digital tools to stay productive, 
            focused, and stress-free during their academic journey.
          </CardContent>
        </Card>

        {/* Our Vision */}
        <Card className="shadow-md hover:shadow-lg transition">
          <CardHeader className="flex flex-col items-center">
            <BookOpen className="h-10 w-10 text-indigo-600 mb-2" />
            <CardTitle>Our Vision</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600 text-center">
            To become the go-to student companion app worldwide — 
            helping students achieve success with better planning and smarter tools.
          </CardContent>
        </Card>

        {/* Who We Are */}
        <Card className="shadow-md hover:shadow-lg transition">
          <CardHeader className="flex flex-col items-center">
            <Users className="h-10 w-10 text-indigo-600 mb-2" />
            <CardTitle>Who We Are</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600 text-center">
            A passionate group of developers, designers, and learners who 
            understand the struggles of student life and aim to solve them with technology.
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
