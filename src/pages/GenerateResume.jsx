// @ts-nocheck
import React, { useContext, useState } from "react";
import UserForm from "../components/UserForm";
import {
  FileUser,
  AlignLeft,
  Wand2,
  RotateCcw,
  Wrench,
  Briefcase,
  Plus,
  Trash2,
  Save,
  GraduationCap,
  BadgeCheck,
  FolderGit2,
  Trophy,
  Languages,
  BookCheck,
} from "lucide-react";

import toast from "react-hot-toast";
import { generateResume } from "../api/resumeService";
import Resume from "../components/Resume";
import DownloadResume from "../components/DownloadResume";
import { userContext } from "../context/ContextProvider";
import InputField from "../components/InputField";

export default function GenerateResume() {
  const { description, setDescription } = useContext(userContext);

  const {
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
  } = useContext(userContext);

  /* ---------- UNIVERSAL UPDATE ---------- */

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 px-4 gap-10">
      <InputField />
    </div>
  );
}
