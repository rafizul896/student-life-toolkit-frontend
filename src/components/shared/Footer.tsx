"use client";
import React from "react";
import { Github, Twitter, Linkedin, BookOpen, Calendar, GraduationCap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-black text-gray-900 dark:text-white py-12 px-4 font-inter border-t border-blue-200 dark:border-gray-800">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h3 className="text-3xl font-bold">
              Student Life Toolkit
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Empowering students with essential tools and resources for academic success, 
            personal growth, and a balanced university life.
          </p>
          <div className="flex space-x-5 pt-2">
            <a
              href="#"
              className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-transform transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={28} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-transform transform hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter size={28} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-transform transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Quick Links
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center space-x-2"
              >
                <BookOpen size={16} />
                <span>Study Tools</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center space-x-2"
              >
                <Calendar size={16} />
                <span>Schedule Planner</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Campus Resources
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Study Groups
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Blog & Tips
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Get in Touch
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Student Success Center, Campus Building A
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Email: support@studentlifetoolkit.com
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Hours: Mon-Fri, 9AM-5PM
          </p>
          <div className="pt-2">
            <a
              href="#"
              className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors duration-300"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
      
      <div className="text-center text-gray-500 dark:text-gray-400 text-sm pt-10 mt-10 border-t border-gray-200 dark:border-gray-700">
        <p>
          &copy; {new Date().getFullYear()} Student Life Toolkit. All rights reserved.
        </p>
        <p className="mt-1">
          Made with <span className="text-red-500">&hearts;</span> for students, by students
        </p>
      </div>
    </footer>
  );
};

export default Footer;