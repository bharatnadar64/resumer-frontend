// @ts-nocheck
import React, { createContext, useState } from "react";
import toast from "react-hot-toast";
import { generateResume } from "../api/resumeService";
import { useNavigate } from "react-router-dom";
import LightSimple from "../resumes/LightSimple";
import DarkSimple from "../resumes/DarkSimple";

export const userContext = createContext();

const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [showFormUi, setShowFormUi] = useState(true);
  const [showPrompt, setShowPrompt] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [download, setDownload] = useState(false);
  const [description, setDescription] = useState("");
  const themes = [
    {
      theme: "Classic",
      popular: true,
      pros: [
        "ATS friendly",
        "Clean single-column layout",
        "Standard fonts and headings",
        "No graphics or complex styling",
      ],
      cons: [
        "Limited visual appeal",
        "Less creative design",
        "Minimal branding",
        "Basic layout",
      ],
      to: LightSimple,
    },
    {
      theme: "Dark",
      popular: false,
      pros: [
        "Modern appearance",
        "High visual contrast",
        "Professional look",
        "Good screen readability",
      ],
      cons: [
        "Less ATS friendly",
        "Printer unfriendly",
        "May reduce readability",
        "Not recruiter preferred",
      ],
      to: DarkSimple,
    },
  ];
  const [data, setData] = useState({
    mandatoryInformation: {
      fullName: "",
      email: "",
      phoneNumber: "",
      location: "",
      linkedIn: "",
      gitHub: "",
      portfolio: "",
    },
    summary: "",
    skills: {
      programmingLanguages: [],
      frameworks: [],
      databases: [],
      cloud: [],
      devOpsTools: [],
      otherSkills: [],
    },
    experience: [
      {
        jobTitle: "",
        company: "",
        location: "",
        startDate: "",
        endDate: "",
        responsibilities: [],
      },
    ],
    education: [
      {
        degree: "",
        university: "",
        location: "",
        graduationYear: "",
      },
    ],
    certifications: [
      {
        name: "",
        issuer: "",
        year: "",
      },
    ],
    projects: [
      {
        title: "",
        description: "",
        technologies: [],
        gitHubLink: "",
      },
    ],
    achievements: [],
    languages: [],
    interests: [],
  });

  const [review, setReview] = useState({
    rating: 0,
    improvements: [],
  });

  const navigate = useNavigate();

  const handlePromptSubmit = async (e) => {
    e.preventDefault();
    if (!description.trim()) {
      toast.error("Prompt is Empty");
      return;
    }
    console.log("User Description:", description);
    try {
      setLoading(true);
      toast.loading("Generating...");
      const userJson = await generateResume(description);
      setData(userJson.data);
      toast.dismiss();
      toast.success("Generated");
      console.log(userJson.data);
      navigate("/edit-user-form");
    } catch (error) {
      toast.dismiss();
      toast.error(error.message);
    }
    setDescription("");
    setLoading(false);
  };
  const updateField = (path, value) => {
    setData((prev) => {
      const updated = structuredClone(prev);
      let current = updated;

      for (let i = 0; i < path.length - 1; i++) {
        current = current[path[i]];
      }

      current[path[path.length - 1]] = value;
      return updated;
    });
  };

  const addItem = (path, newItem) => {
    setData((prev) => {
      const updated = structuredClone(prev);
      let current = updated;

      for (let i = 0; i < path.length; i++) {
        current = current[path[i]];
      }

      current.push(newItem);
      return updated;
    });
  };

  const removeItem = (path, index) => {
    setData((prev) => {
      const updated = structuredClone(prev);
      let current = updated;

      for (let i = 0; i < path.length; i++) {
        current = current[path[i]];
      }

      current.splice(index, 1);
      return updated;
    });
  };

  const handleClear = () => {
    setDescription("");
  };
  const submitForm = () => {
    console.log(data);
    navigate("/themes");
  };

  const value = {
    data,
    setData,
    loading,
    setLoading,
    showFormUi,
    setShowFormUi,
    showPrompt,
    setShowPrompt,
    showResume,
    setShowResume,
    download,
    setDownload,
    handlePromptSubmit,
    handleClear,
    removeItem,
    addItem,
    updateField,
    submitForm,
    navigate,
    description,
    setDescription,
    themes,
    review,
    setReview,
  };
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export default ContextProvider;
