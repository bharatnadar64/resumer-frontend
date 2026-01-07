import React from "react";

const About = () => {
  return (
    <div className="bg-base-100 dark:bg-base-200 py-20 px-4 md:px-20">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-primary mb-6">
          About Us
        </h1>
        <p className="text-base-content text-lg md:text-xl leading-relaxed">
          We are passionate about helping job seekers succeed. Many resumes
          never reach a human recruiter because of automated systems known as{" "}
          <strong className="text-secondary">
            Applicant Tracking Systems (ATS)
          </strong>
          . We solve this problem by providing tools that ensure your resume is
          optimized, readable, and ready to pass ATS filters.
        </p>
      </div>

      {/* ATS Visual Section */}
      <div className="mt-16 flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
        {/* Left Side: Illustration */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-sm h-64 bg-gradient-to-tr from-primary to-secondary rounded-xl shadow-lg flex items-center justify-center text-white text-4xl font-bold animate-pulse">
            ATS
          </div>
        </div>

        {/* Right Side: Text */}
        <div className="flex-1">
          <h2 className="text-secondary text-3xl md:text-4xl font-bold mb-4">
            Why Resume Optimization Matters
          </h2>
          <p className="text-base-content mb-4 leading-relaxed">
            The majority of resumes are first read by ATS software that scans
            for keywords, formatting, and structure. A resume that looks perfect
            to humans might be rejected automatically if it isn't ATS-friendly.
          </p>
          <p className="text-base-content mb-4 leading-relaxed">
            Our tools ensure that your resume gets through these systems by
            analyzing and optimizing it, highlighting the areas that need
            improvement, and helping you present your experience effectively.
          </p>
          <p className="text-base-content leading-relaxed">
            We believe everyone deserves a fair chance to shine, and a
            well-crafted resume is the first step toward landing your dream job.
          </p>
        </div>
      </div>

      {/* Meet the Creators Section */}
      <div className="mt-24 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12">
          Meet the Creators
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Creator A */}
          <div className="bg-base-200 dark:bg-base-300 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-primary text-white flex items-center justify-center text-3xl font-bold mb-4">
                B
              </div>
              <h3 className="text-2xl font-semibold text-secondary mb-2">
                Bharat Nadar
              </h3>
              <p className="text-base-content text-center leading-relaxed">
                Bharat focuses on innovation and problem-solving. He works
                behind the scenes to ensure our ATS insights are accurate and
                actionable for everyone.
              </p>
            </div>
          </div>

          {/* Creator B */}
          <div className="bg-base-200 dark:bg-base-300 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-secondary text-white flex items-center justify-center text-3xl font-bold mb-4">
                P
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-2">
                Pranna Nadar
              </h3>
              <p className="text-base-content text-center leading-relaxed">
                Pranna is passionate about technology and education. She ensures
                our resume tools are user-friendly, intuitive, and effective for
                all job seekers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-action Footer */}
      <div className="mt-20 text-center">
        <p className="text-base-content text-lg md:text-xl">
          Start optimizing your resume today and increase your chances of
          success!
        </p>
      </div>
    </div>
  );
};

export default About;
