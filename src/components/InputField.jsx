import { Wand2, RotateCcw } from "lucide-react";
import React, { useContext } from "react";
import { userContext } from "../context/ContextProvider";

const InputField = () => {
  const {
    handlePromptSubmit,
    loading,
    description,
    setDescription,
    handleClear,
  } = useContext(userContext);
  return (
    <div className="card w-full max-w-3xl bg-base-100/80 backdrop-blur-xl shadow-2xl border border-base-300">
      <div className="card-body">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-extrabold flex justify-center items-center gap-2">
            <Wand2 className="w-8 h-8 text-primary" />
            Generate Your Resume
          </h1>
          <p className="mt-2 text-sm opacity-70">
            Describe yourself and let AI craft a professional resume for you.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handlePromptSubmit} className="space-y-5">
          <div>
            <label className="label">
              <span className="label-text font-semibold">
                Your Professional Summary
              </span>
            </label>

            <textarea
              disabled={loading}
              className="textarea textarea-bordered textarea-lg w-full h-48 resize-none focus:outline-none focus:border-primary"
              placeholder="Example: I am a frontend developer with 2 years of experience in React, Tailwind CSS, and building responsive web applications..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              disabled={loading}
              type="submit"
              className="btn btn-primary flex-1 gap-2 text-lg"
            >
              <Wand2 className="w-5 h-5" />
              Generate Resume
            </button>

            <button
              disabled={loading}
              type="button"
              onClick={handleClear}
              className="btn btn-outline btn-error flex-1 gap-2 text-lg"
            >
              <RotateCcw className="w-5 h-5" />
              Clear
            </button>
          </div>
        </form>

        {/* AI Hint */}
        <div className="mt-6 text-center text-xs opacity-60">
          💡 Tip: Include skills, experience, achievements, and career goals for
          best results.
        </div>
      </div>
    </div>
  );
};

export default InputField;
