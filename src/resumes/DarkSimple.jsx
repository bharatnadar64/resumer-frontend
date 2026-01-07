// @ts-nocheck
import React, { useContext } from "react";
import { userContext } from "../context/ContextProvider";
import {
  User,
  AlignLeft,
  Settings,
  Briefcase,
  Book,
  Award,
} from "lucide-react";
import toast from "react-hot-toast";

const DarkSimple = () => {
  const { data } = useContext(userContext);
  if (!data) return toast.error("No Data Available"); // safety check

  const hasSkills =
    data.skills &&
    Object.values(data.skills).some((arr) => Array.isArray(arr) && arr.length);
  const hasExperience = data.experience?.some(
    (exp) =>
      exp.jobTitle ||
      exp.company ||
      exp.location ||
      exp.startDate ||
      exp.endDate ||
      (exp.responsibilities && exp.responsibilities.length > 0)
  );
  const hasEducation = data.education?.some(
    (edu) => edu.degree || edu.university || edu.location || edu.graduationYear
  );
  const hasCertifications = data.certifications?.some(
    (cert) => cert.name || cert.issuer || cert.year
  );
  const hasProjects = data.projects?.some(
    (project) =>
      project.title ||
      project.description ||
      (project.technologies && project.technologies.length > 0) ||
      project.gitHubLink
  );
  const hasAchievements = data.achievements && data.achievements.length > 0;
  const hasLanguages = data.languages && data.languages.length > 0;
  const hasInterests = data.interests && data.interests.length > 0;

  return (
    <div data-theme="dark">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-extrabold flex justify-center items-center gap-3">
          <User className="w-9 h-9 text-primary" />
          {data.mandatoryInformation?.fullName || "Your Name"}
        </h1>
        {data.summary && <p className="text-base-content/70">{data.summary}</p>}
      </div>

      {/* Contact Information */}
      {data.mandatoryInformation && (
        <div
          // className="card bg-base-100 shadow-xl border border-base-200"
          className="card bg-base-100 shadow-xl"
        >
          <div className="card-body">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <User /> Contact Information
            </h2>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {Object.entries(data.mandatoryInformation).map(([key, value]) => (
                <div key={key} className="flex flex-col">
                  <span className="font-semibold capitalize">
                    {key.replace(/([A-Z])/g, " $1")}
                  </span>
                  <span className="text-base-content/80">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Skills */}
      {hasSkills && (
        <div
          // className="card bg-base-100 shadow-xl border border-base-200"
          className="card bg-base-100 shadow-xl"
        >
          <div className="card-body">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Settings /> Skills
            </h2>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {Object.entries(data.skills).map(([category, skills]) =>
                skills.length ? (
                  <div key={category}>
                    <h3 className="font-semibold text-lg capitalize mb-2">
                      {category.replace(/([A-Z])/g, " $1")}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, i) => (
                        <span key={i} className="badge badge-primary">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
      )}

      {/* Experience */}
      {hasExperience && (
        <div
          // className="card bg-base-100 shadow-xl border border-base-200"
          className="card bg-base-100 shadow-xl"
        >
          <button>Remove</button>
          <div className="card-body">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Briefcase /> Experience
            </h2>
            <div className="space-y-4 mt-4">
              {data.experience.map((exp, i) => (
                <div
                  key={i}
                  className="border border-base-300 rounded-xl p-5 bg-base-50"
                >
                  <h3 className="text-xl font-bold">
                    {exp.jobTitle} @ {exp.company}
                  </h3>
                  <p className="text-sm text-base-content/70">{exp.location}</p>
                  <p className="text-sm text-base-content/60">
                    {exp.startDate} - {exp.endDate || "Present"}
                  </p>
                  <ul className="list-disc list-inside mt-2">
                    {exp.responsibilities?.map((res, idx) => (
                      <li key={idx}>{res}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Education */}
      {hasEducation && (
        <div
          // className="card bg-base-100 shadow-xl border border-base-200"
          className="card bg-base-100 shadow-xl"
        >
          <div className="card-body">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Book /> Education
            </h2>
            <div className="space-y-4 mt-4">
              {data.education.map((edu, i) => (
                <div key={i} className="p-4 border rounded-lg bg-base-50">
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <p className="text-base-content/80">
                    {edu.university}, {edu.location}
                  </p>
                  <p className="text-sm text-base-content/60">
                    Graduation: {edu.graduationYear}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Certifications */}
      {hasCertifications && (
        <div
          // className="card bg-base-100 shadow-xl border border-base-200"
          className="card bg-base-100 shadow-xl"
        >
          <div className="card-body">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Award /> Certifications
            </h2>
            <ul className="list-disc list-inside mt-4">
              {data.certifications.map((cert, i) => (
                <li key={i}>
                  {cert.name} - {cert.issuer} ({cert.year})
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Projects */}
      {hasProjects && (
        <div
          // className="card bg-base-100 shadow-xl border border-base-200"
          className="card bg-base-100 shadow-xl"
        >
          <div className="card-body">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Book /> Projects
            </h2>
            <div className="space-y-4 mt-4">
              {data.projects.map((proj, i) => (
                <div key={i} className="p-4 border rounded-lg bg-base-50">
                  <h3 className="font-semibold">{proj.title}</h3>
                  <p className="text-base-content/80">{proj.description}</p>
                  {proj.technologies.length > 0 && (
                    <p className="mt-1">
                      <span className="font-semibold">Technologies:</span>{" "}
                      {proj.technologies.join(", ")}
                    </p>
                  )}
                  {proj.gitHubLink && (
                    <a href={proj.gitHubLink} className="link link-primary">
                      {proj.gitHubLink}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Achievements, Languages, Interests */}
      <div className="grid md:grid-cols-3 gap-6">
        {hasAchievements && (
          <div className="card bg-base-100 shadow-xl p-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Award /> Achievements
            </h3>
            <ul className="list-disc list-inside mt-2">
              {data.achievements.map((ach, i) => (
                <li key={i}>{ach}</li>
              ))}
            </ul>
          </div>
        )}

        {hasLanguages && (
          <div className="card bg-base-100 shadow-xl p-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Book /> Languages
            </h3>
            <ul className="list-disc list-inside mt-2">
              {data.languages.map((lang, i) => (
                <li key={i}>{lang}</li>
              ))}
            </ul>
          </div>
        )}

        {hasInterests && (
          <div className="card bg-base-100 shadow-xl border p-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Book /> Interests
            </h3>
            <ul className="list-disc list-inside mt-2">
              {data.interests.map((interest, i) => (
                <li key={i}>{interest}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DarkSimple;
