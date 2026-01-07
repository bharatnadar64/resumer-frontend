// @ts-nocheck
import React, { useContext, useRef, useState } from "react";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { analyzeResume } from "../api/ResumeAnalyzer";
import { userContext } from "../context/ContextProvider";

const Analyzer = () => {
  const { review, setReview } = useContext(userContext);
  const [file, setFile] = useState(null);
  const [showReview, setShowReview] = useState(false);
  const filePointer = useRef(null);
  const [blockAction, setBlockAction] = useState(false);
  // Generate star icons based on rating (max 5)
  const stars = Array.from({ length: 5 }, (_, i) => (
    <span
      key={i}
      className={`text-xl ${
        i < Math.floor(review.rating / 2)
          ? "text-yellow-400"
          : "text-gray-300 dark:text-gray-600"
      }`}
    >
      ★
    </span>
  ));

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      toast.error("Select a file");
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      toast.error("Upload PDF smaller than 2 Mb");
      return;
    }
    // logic for file handling
    try {
      toast.loading("Analyzing Resume");
      setBlockAction(true);
      const res = await analyzeResume(file);
      setBlockAction(false);
      toast.dismiss();
      if (res.success) {
        setReview(res);
        setShowReview(true);
      } else {
        toast.error(res.message);
      }
      console.log(res);
    } catch (error) {
      toast.dismiss();
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-10">
      {!showReview && (
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Section */}
            <div className="hidden rounded-2xl shadow-2xl lg:flex flex-col justify-center space-y-6 p-6">
              <h1 className="text-4xl font-bold text-base-content">
                Smart Resume Analyzer
              </h1>

              <p className="text-lg text-base-content/70">
                Upload your resume and get instant insights on skills,
                structure, and optimization tips.
              </p>

              <ul className="space-y-3 text-base-content/80">
                <li className="flex items-center gap-2">
                  <Check /> ATS compatibility check
                </li>
                <li className="flex items-center gap-2">
                  <Check /> Skill gap analysis
                </li>
                <li className="flex items-center gap-2">
                  <Check /> Role-based suggestions
                </li>
              </ul>
            </div>

            {/* Upload Card */}
            <div className="card bg-base-100 shadow-2xl w-full max-w-md mx-auto lg:max-w-lg">
              <div className="card-body space-y-6">
                <h2 className="card-title text-center justify-center text-2xl text-base-content">
                  Upload Your Resume
                </h2>

                <p className="text-center text-sm text-base-content/60">
                  PDF format only. Your data stays private. Max Size 2 Mb
                </p>

                <form onSubmit={handleFileSubmit} className="space-y-4">
                  <input
                    disabled={blockAction}
                    ref={filePointer}
                    type="file"
                    accept="application/pdf"
                    onChange={handleFileChange}
                    className="file-input file-input-bordered file-input-primary w-full"
                  />

                  <button
                    disabled={blockAction}
                    type="submit"
                    className="btn btn-primary w-full text-base"
                  >
                    Analyze Resume
                  </button>
                </form>

                <div className="divider">OR</div>

                <Link
                  to={"/generate-resume"}
                  className="btn btn-outline w-full"
                >
                  Create Your First Resume
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-24 px-4">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-14 space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-base-content">
                  Ideal Resume Templates
                </h2>
                <p className="text-base-content/70 max-w-2xl mx-auto text-lg">
                  Professionally designed resume templates optimized for ATS
                  systems and modern hiring standards.
                </p>
              </div>

              {/* Templates Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
                <div className="hover-3d">
                  {/* content */}
                  <figure className="w-70 rounded-md">
                    <img
                      src="https://imgs.search.brave.com/yCsmVl1_z9ucqjqa1isxPkua5UJvjcxPRLM_NoLiHkI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMjV6/Y3R0emY0NGk1OS5j/bG91ZGZyb250Lm5l/dC9jb2xsZWdlLXN0/dWRlbnQtc29jaWFs/LXdvcmstc3R1ZGVu/dC1yZXN1bWUtZXhh/bXBsZS5wbmc"
                      alt="Tailwind CSS 3D card"
                    />
                  </figure>
                  {/* 8 empty divs needed for the 3D effect */}
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>

                <div className="hover-3d">
                  {/* content */}
                  <figure className="w-70 rounded-md">
                    <img
                      src="https://imgs.search.brave.com/XHaWAcrrw5ORSGtXCCOY9RJFwpuLVkq0oF4WPCpuiyg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aHVic3BvdC5jb20v/aHMtZnMvaHViZnMv/YmVzdC1yZXN1bWUt/dGVtcGxhdGVzXzE2/LndlYnA_d2lkdGg9/NTAwJmhlaWdodD02/NDcmbmFtZT1iZXN0/LXJlc3VtZS10ZW1w/bGF0ZXNfMTYud2Vi/cA"
                      alt="Tailwind CSS 3D hover"
                    />
                  </figure>
                  {/* 8 empty divs needed for the 3D effect */}
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>

                <div className="hover-3d">
                  {/* content */}
                  <figure className="w-70 rounded-md">
                    <img
                      src="https://imgs.search.brave.com/CYeZ6jEScyq9mz2i2kyfbKM__2nqscWbjmfcqs3nE-8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMjV6/Y3R0emY0NGk1OS5j/bG91ZGZyb250Lm5l/dC9taW5pbWFsaXN0/LWdvb2dsZS1kb2Nz/LXJlc3VtZS10ZW1w/bGF0ZS5wbmc"
                      alt="Tailwind CSS 3D hover"
                    />
                  </figure>
                  {/* 8 empty divs needed for the 3D effect */}
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showReview && (
        <div className="w-full max-w-6xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl shadow-2xl overflow-hidden">
          {/* Card background */}
          <div className="bg-base-100 dark:bg-gray-900 rounded-3xl p-10 md:p-16 shadow-inner">
            {/* Header */}
            <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 animate-gradient-x">
              Resume Review
            </h2>

            {/* Rating Section */}
            <div className="flex flex-col items-center mb-12">
              <div className="relative flex items-center justify-center w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-lg">
                <span className="absolute text-4xl md:text-5xl font-bold text-white">
                  {review.rating / 2}/5
                </span>
              </div>
              <div className="flex mt-4 text-yellow-400 text-2xl md:text-3xl">
                {stars}
              </div>
            </div>

            {/* Improvements Section */}
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
                Recommended Improvements
              </h3>
              <ul className="space-y-4">
                {review.improvements.map((imp, idx) => (
                  <li
                    key={idx}
                    className="flex items-center bg-base-200 dark:bg-gray-800 p-4 rounded-xl shadow-sm hover:shadow-lg hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300"
                  >
                    <span className="mr-4 text-xl md:text-2xl text-primary">
                      ✔
                    </span>
                    <span className="text-base md:text-lg">{imp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <Link
                to={"/generate-resume"}
                className="btn btn-primary btn-lg w-full md:w-auto shadow-lg hover:scale-105 transition-transform duration-200"
              >
                Build Better Resume
              </Link>
              <button
                onClick={() => {
                  setReview({});
                  setBlockAction(false);
                  setShowReview(false);
                }}
                className="btn btn-outline btn-secondary btn-lg w-full md:w-auto shadow-lg hover:scale-105 transition-transform duration-200"
              >
                Analyze Another
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Analyzer;
