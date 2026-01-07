// @ts-nocheck
import React from "react";
import {
  Sparkles,
  FileText,
  Brain,
  Download,
  Users,
  ShieldCheck,
} from "lucide-react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <Brain className="w-8 h-8 text-primary" />,
    title: "AI-Powered Writing",
    description:
      "Describe yourself once and let AI generate a professional resume instantly.",
  },
  {
    icon: <FileText className="w-8 h-8 text-primary" />,
    title: "ATS Friendly",
    description:
      "Optimized resume structure that passes Applicant Tracking Systems.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "Modern Templates",
    description: "Beautiful, clean, and professional resume templates.",
  },
  {
    icon: <Download className="w-8 h-8 text-primary" />,
    title: "One-Click Export",
    description: "Download your resume instantly in PDF format.",
  },
];

export default function LandingPage() {
  return (
    <div className="bg-base-100 text-base-content">
      {/* Hero Section */}
      <section className="hero min-h-screen bg-gradient-to-br from-primary to-secondary text-primary-content">
        <div className="hero-content text-center max-w-3xl">
          <div>
            <h1 className="text-5xl font-extrabold leading-tight">
              Build Your Resume with AI
            </h1>
            <p className="py-6 text-lg opacity-90">
              Just describe yourself. Our AI will create a professional,
              job-ready resume in seconds.
            </p>
            <Link
              to={"/generate-resume"}
              className="btn btn-accent btn-lg shadow-lg"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14">
          Powerful Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card bg-base-200 shadow-md hover:shadow-xl transition"
            >
              <div className="card-body items-center text-center">
                {feature.icon}
                <h3 className="card-title mt-3">{feature.title}</h3>
                <p className="text-sm opacity-80">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-base-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>

          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <span className="badge badge-primary badge-lg mx-auto mb-3">
                  Step 1
                </span>
                <h3 className="font-bold text-xl">Describe Yourself</h3>
                <p className="opacity-80">
                  Enter your skills, experience, and career goals.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <span className="badge badge-primary badge-lg mx-auto mb-3">
                  Step 2
                </span>
                <h3 className="font-bold text-xl">AI Generates Resume</h3>
                <p className="opacity-80">
                  Our AI crafts a professional resume instantly.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <span className="badge badge-primary badge-lg mx-auto mb-3">
                  Step 3
                </span>
                <h3 className="font-bold text-xl">Download & Apply</h3>
                <p className="opacity-80">
                  Export your resume and start applying confidently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <Users className="w-10 h-10 text-primary" />
        </div>
        <h2 className="text-3xl font-bold">
          <span>
            Trusted by{" "}
            <span className="text-rotate">
              <span>
                <span className="bg-teal-400 text-teal-800 px-2">
                  Job Seekers
                </span>
                <span className="bg-red-400 text-red-800 px-2">Developers</span>
                <span className="bg-blue-400 text-blue-800 px-2">Students</span>
                <span className="bg-green-400 text-green-800 px-2">
                  Recruiters
                </span>
                <span className="bg-yellow-400 text-yellow-800 px-2">
                  Professionals
                </span>
              </span>
            </span>
          </span>
        </h2>
        <p className="mt-4 opacity-80 max-w-2xl mx-auto">
          Thousands of users are already building resumes and landing interviews
          using our AI resume builder.
        </p>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-content text-center">
        <ShieldCheck className="w-12 h-12 mx-auto mb-4" />
        <h2 className="text-4xl font-bold">Create Your Resume Today</h2>
        <p className="py-4 opacity-90">
          No credit card required. Get started in seconds.
        </p>
        <Link to={"/generate-resume"} className="btn btn-accent btn-lg mt-4">
          Start Building
        </Link>
      </section>
    </div>
  );
}
