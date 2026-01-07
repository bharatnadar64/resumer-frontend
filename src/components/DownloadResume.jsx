// @ts-nocheck
import React, { useContext, useRef } from "react";
import Resume from "./Resume";
import { useReactToPrint } from "react-to-print";
import { userContext } from "../context/ContextProvider";

const DownloadResume = () => {
  const { data } = useContext(userContext);
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 px-4 gap-10 py-10">
      <div
        id="resume-pdf"
        ref={resumeRef}
        // className="w-[794px] mx-auto bg-base-200"
        className="w-full mx-auto bg-base-200 py-5"
      >
        <Resume data={data} />
      </div>

      <button onClick={handlePrint} className="btn btn-primary print:hidden">
        Download
      </button>
    </div>
  );
};

export default DownloadResume;
