import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="w-full">
      <main className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-24 lg:pt-32 lg:pb-32">
          <div className="flex justify-center mb-6">
            <a
              href="#"
              className="inline-flex items-center gap-2 border border-slate-200 dark:border-slate-700 rounded-full px-3 py-1 text-xs sm:text-sm font-medium hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-colors"
            >
              <div className="flex -space-x-2">
                <Image
                  width={20}
                  height={20}
                  className="w-5 h-5 rounded-full border border-white dark:border-slate-800"
                  src="https://i.pravatar.cc/150?img=1"
                  alt="User 1"
                />
                <Image
                  width={20}
                  height={20}
                  className="w-5 h-5 rounded-full border border-white dark:border-slate-800"
                  src="https://i.pravatar.cc/150?img=2"
                  alt="User 2"
                />
                <Image
                  width={20}
                  height={20}
                  className="w-5 h-5 rounded-full border border-white dark:border-slate-800"
                  src="https://i.pravatar.cc/150?img=3"
                  alt="User 3"
                />
              </div>
              <span className="text-slate-600 dark:text-slate-300 hidden sm:inline">
                Build Beautiful Interfaces with Sera UI
              </span>
              <span className="text-slate-600 dark:text-slate-300 sm:hidden">
                Explore The Platform
              </span>
              <ArrowRight className="w-4 h-4 text-slate-500 dark:text-slate-400" />
            </a>
          </div>

          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl md:text-6xl lg:text-6xl mb-6">
              Your All-in-One Student Life Toolkit 📚
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl md:max-w-3xl mx-auto mb-10">
              Stay organized, track your budget, prepare for exams, and plan
              your study goals — all in one place!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default">All Features</Button>
              <Button variant={"outline"}>Get Started Free</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
