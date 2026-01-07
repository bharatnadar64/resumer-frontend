// @ts-nocheck
import React, { useContext, useState, useRef } from "react";
import { userContext } from "../context/ContextProvider";
import { useReactToPrint } from "react-to-print";
const ThemeSelection = () => {
  const { themes, navigate } = useContext(userContext);
  const [Theme, setTheme] = useState(null);
  const [showThemes, setShowThemes] = useState(true);
  const resumeRef = useRef(null);
  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: "My_Resume",
    pageStyle: `
          @page { size: A4; margin-top: 5mm; margin-bottom: 5mm; }
          body { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          `,
  });

  return (
    <>
      {showThemes && (
        <div className="max-w-7xl mx-auto py-5">
          <h1 className="text-4xl font-bold text-center mb-5">Themes</h1>
          <div className="grid grid-cols-3">
            {themes.map((theme, i) => (
              <div key={i} className="card w-96 bg-base-100 border shadow-sm">
                <div className="card-body">
                  <span
                    className={`badge badge-xs badge-warning ${
                      theme.popular === true ? "" : "z-[-1]"
                    }`}
                  >
                    Most Popular
                  </span>
                  <div className="flex">
                    <h2 className="text-3xl font-bold">{theme.theme}</h2>
                  </div>
                  <ul className="mt-6 flex flex-col gap-2 text-xs">
                    {theme.pros.map((pro, i) => (
                      <li key={i}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-4 me-2 inline-block text-success"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{pro}</span>
                      </li>
                    ))}
                    {theme.cons.map((con, i) => (
                      <li key={100 - i} className="opacity-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-4 me-2 inline-block text-base-content/50"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="line-through">{con}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <button
                      onClick={() => {
                        setTheme(() => theme.to);
                        setShowThemes(false);
                      }}
                      className="btn btn-primary btn-block"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {Theme && (
        <>
          <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 px-4 gap-10 print:bg-none print:block print:px-0 print:gap-0">
            <div
              ref={resumeRef}
              className="max-w-5xl mx-auto my-5 p-6 lg:p-5 space-y-5 bg-base-200"
            >
              <Theme />
            </div>
            <div className="flex mb-5 gap-x-20">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setShowThemes(true);
                  setTheme(null);
                }}
              >
                Other Themes
              </button>
              <button
                className="btn btn-error"
                onClick={() => {
                  navigate("/edit-user-form");
                }}
              >
                Edit
              </button>
              <button onClick={handlePrint} className="btn btn-success">
                Download
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ThemeSelection;
