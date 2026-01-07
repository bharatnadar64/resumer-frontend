import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="bg-base-100 dark:bg-base-200 py-20 px-4 md:px-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-primary mb-6">
          Our Services
        </h1>
        <p className="text-base-content text-lg md:text-xl leading-relaxed">
          We provide AI-powered tools to help you create professional resumes
          and analyze them for ATS compatibility — all for free.
        </p>
      </div>

      {/* Services Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* AI Resume Builder */}
        <div className="card bg-base-200 dark:bg-base-300 text-base-content shadow-xl hover:scale-105 transition-transform duration-300">
          <div className="card-body text-center">
            <div className="mx-auto w-20 h-20 rounded-full bg-primary dark:bg-secondary text-white flex items-center justify-center text-3xl font-bold mb-4">
              📝
            </div>
            <h2 className="card-title justify-center text-2xl md:text-3xl text-primary dark:text-secondary">
              AI Resume Builder
            </h2>
            <p className="mt-4">
              Create a professional, eye-catching resume in minutes. Our AI
              generates optimized layouts and content tailored to your
              experience.
            </p>
            <div className="card-actions justify-center mt-6">
              <Link
                to={"/generate-resume"}
                className="btn btn-outline btn-primary dark:btn-secondary"
              >
                Try Builder
              </Link>
            </div>
          </div>
        </div>

        {/* AI Resume Analyzer */}
        <div className="card bg-base-200 dark:bg-base-300 text-base-content shadow-xl hover:scale-105 transition-transform duration-300">
          <div className="card-body text-center">
            <div className="mx-auto w-20 h-20 rounded-full bg-secondary dark:bg-primary text-white flex items-center justify-center text-3xl font-bold mb-4">
              🔍
            </div>
            <h2 className="card-title justify-center text-2xl md:text-3xl text-secondary dark:text-primary">
              AI Resume Analyzer
            </h2>
            <p className="mt-4">
              Check your resume’s ATS compatibility instantly. Our AI evaluates
              structure, keywords, and formatting, providing actionable
              suggestions to improve your chances.
            </p>
            <div className="card-actions justify-center mt-6">
              <Link
                to={"/analyze-resume"}
                className="btn btn-outline btn-secondary dark:btn-primary"
              >
                Analyze Resume
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-action Footer */}
      <div className="mt-20 text-center">
        <p className="text-base-content text-lg md:text-xl">
          Explore our AI tools and craft resumes that open doors to your dream
          career!
        </p>
      </div>
    </div>
  );
};

export default Services;
