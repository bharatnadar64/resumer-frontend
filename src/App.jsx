// @ts-nocheck
import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Root from "./pages/Root.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import GenerateResume from "./pages/GenerateResume.jsx";
import toast, { Toaster } from "react-hot-toast";
import UserForm from "./components/UserForm.jsx";
import DownloadResume from "./components/DownloadResume.jsx";
// import DisplayResume from "./pages/DisplayResume.jsx";
import ThemeSelection from "./pages/ThemeSelection.jsx";
import Analyzer from "./pages/Analyzer.jsx";

function App() {
  const [count, setCount] = useState(0);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <>
      <Toaster
        position="top-center"
        containerStyle={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          position: "fixed",
          zIndex: 9999,
        }}
        toastOptions={{
          style: {
            padding: "16px 28px",
            fontSize: "16px",
            fontWeight: "600",
            borderRadius: "14px",
            backdropFilter: "blur(12px)",
            background:
              "linear-gradient(135deg, rgba(99,102,241,0.85), rgba(139,92,246,0.85))",
            color: "#fff",
            boxShadow:
              "0 10px 30px rgba(99,102,241,0.4), inset 0 0 0 1px rgba(255,255,255,0.15)",
          },

          success: {
            style: {
              background:
                "linear-gradient(135deg, rgba(34,197,94,0.9), rgba(22,163,74,0.9))",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "#22c55e",
            },
          },

          error: {
            style: {
              background:
                "linear-gradient(135deg, rgba(239,68,68,0.9), rgba(220,38,38,0.9))",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "#ef4444",
            },
          },

          loading: {
            style: {
              background:
                "linear-gradient(135deg, rgba(59,130,246,0.9), rgba(37,99,235,0.9))",
            },
          },
        }}
      />

      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="generate-resume" element={<GenerateResume />} />
          <Route path="edit-user-form" element={<UserForm />} />
          <Route path="download-resume" element={<DownloadResume />} />
          {/* <Route path="preview-resume" element={<DisplayResume />} /> */}
          <Route path="analyze-resume" element={<Analyzer />} />
          <Route path="themes" element={<ThemeSelection />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
