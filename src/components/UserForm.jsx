// @ts-nocheck
import {
  AlignLeft,
  BadgeCheck,
  BookCheck,
  Briefcase,
  FileUser,
  FolderGit2,
  GraduationCap,
  Plus,
  Save,
  Trash2,
  Trophy,
  Wrench,
} from "lucide-react";
import React, { useContext } from "react";
import { userContext } from "../context/ContextProvider";

const UserForm = () => {
  const {
    data,
    setData,
    handlePromptSubmit,
    handleClear,
    removeItem,
    addItem,
    updateField,
    submitForm,
  } = useContext(userContext);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 px-4 gap-10">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitForm();
        }}
      >
        <div className="max-w-6xl mx-auto p-6 lg:p-10 space-y-10">
          {/* Page Header */}
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-extrabold flex justify-center items-center gap-3">
              <FileUser className="w-9 h-9 text-primary" />
              Resume Builder
            </h1>
            <p className="text-base-content/70">
              Build a professional resume step by step
            </p>
          </div>

          {/* Personal Information */}
          <div className="card bg-base-100 shadow-xl border border-base-200">
            <div className="card-body space-y-6">
              <div className="flex items-center gap-3">
                <FileUser className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Personal Information</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {Object.keys(
                  data?.mandatoryInformation || {
                    fullName: "",
                    email: "",
                    phoneNumber: "",
                    location: "",
                    linkedIn: "",
                    gitHub: "",
                    portfolio: "",
                  }
                ).map((key) => (
                  <label key={key} className="form-control">
                    <span className="label-text font-semibold capitalize">
                      {key.replace(/([A-Z])/g, " $1")}
                    </span>
                    <input
                      required
                      className="input input-bordered focus:input-primary"
                      placeholder={`Enter ${key}`}
                      value={data.mandatoryInformation?.[key] || ""}
                      onChange={(e) =>
                        updateField(
                          ["mandatoryInformation", key],
                          e.target.value
                        )
                      }
                    />
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="card bg-base-100 shadow-xl border border-base-200">
            <div className="card-body space-y-4">
              <div className="flex items-center gap-3">
                <AlignLeft className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Professional Summary</h2>
              </div>

              <textarea
                required
                className="textarea textarea-bordered focus:textarea-primary w-full"
                rows={5}
                placeholder="Write a compelling summary about yourself..."
                value={data.summary}
                onChange={(e) => updateField(["summary"], e.target.value)}
              />
            </div>
          </div>

          {/* Skills */}
          <div className="card bg-base-100 shadow-xl border border-base-200">
            <div className="card-body space-y-6">
              <div className="flex items-center gap-3">
                <Wrench className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Skills</h2>
              </div>

              {Object.entries(
                data?.skills || {
                  programmingLanguages: [],
                  frameworks: [],
                  databases: [],
                  cloud: [],
                  devOpsTools: [],
                  otherSkills: [],
                }
              ).map(([category, items]) => (
                <div key={category} className="space-y-3">
                  <h3 className="font-semibold text-lg capitalize">
                    {category.replace(/([A-Z])/g, " $1")}
                  </h3>

                  {items.map((item, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        className="input input-bordered w-full"
                        value={item}
                        placeholder="Enter skill"
                        onChange={(e) =>
                          updateField(
                            ["skills", category, index],
                            e.target.value
                          )
                        }
                      />
                      <button
                        type="button"
                        className="btn btn-error btn-outline btn-sm"
                        onClick={() => removeItem(["skills", category], index)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}

                  <button
                    type="button"
                    className="btn btn-outline btn-sm gap-2"
                    onClick={() => addItem(["skills", category], "")}
                  >
                    <Plus className="w-4 h-4" /> Add Skill
                  </button>

                  <div className="divider" />
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="card bg-base-100 shadow-xl border border-base-200">
            <div className="card-body space-y-6">
              <div className="flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Experience</h2>
              </div>

              {(data?.experience || []).map((exp, i) => (
                <div
                  key={i}
                  className="border border-base-300 rounded-xl p-5 space-y-4"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "jobTitle",
                      "company",
                      "location",
                      "startDate",
                      "endDate",
                    ].map((field) => (
                      <input
                        key={field}
                        className="input input-bordered"
                        placeholder={field.replace(/([A-Z])/g, " $1")}
                        value={exp[field]}
                        onChange={(e) =>
                          updateField(["experience", i, field], e.target.value)
                        }
                      />
                    ))}
                  </div>

                  <h4 className="font-semibold">Responsibilities</h4>
                  {(exp?.responsibilities || []).map((res, rIndex) => (
                    <div key={rIndex} className="flex gap-2">
                      <input
                        className="input input-bordered w-full"
                        value={res}
                        placeholder="Describe your responsibility"
                        onChange={(e) =>
                          updateField(
                            ["experience", i, "responsibilities", rIndex],
                            e.target.value
                          )
                        }
                      />
                      <button
                        type="button"
                        className="btn btn-error btn-outline btn-sm"
                        onClick={() =>
                          removeItem(
                            ["experience", i, "responsibilities"],
                            rIndex
                          )
                        }
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}

                  <div className="flex gap-2.5 justify-around">
                    <button
                      type="button"
                      className="btn btn-outline btn-sm gap-2"
                      onClick={() =>
                        addItem(["experience", i, "responsibilities"], "")
                      }
                    >
                      <Plus className="w-4 h-4" />
                      Add Responsibility
                    </button>
                    <button
                      type="button"
                      className="btn btn-error btn-outline btn-sm gap-2"
                      onClick={() => removeItem(["experience"], i)}
                    >
                      <Trash2 className="w-4 h-4" />
                      Remove Experience
                    </button>
                  </div>
                </div>
              ))}

              <button
                type="button"
                className="btn btn-primary gap-2"
                onClick={() =>
                  addItem(["experience"], {
                    jobTitle: "",
                    company: "",
                    location: "",
                    startDate: "",
                    endDate: "",
                    responsibilities: [""],
                  })
                }
              >
                <Plus className="w-4 h-4" />
                Add Experience
              </button>
            </div>
          </div>

          {/* Education */}
          <div className="card bg-base-100 shadow-xl border border-base-200">
            <div className="card-body space-y-6">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Education</h2>
              </div>

              {(data?.education || []).map((edu, i) => (
                <div
                  key={i}
                  className="border border-base-300 rounded-xl p-5 space-y-4"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    {["degree", "university", "location", "graduationYear"].map(
                      (field) => (
                        <input
                          key={field}
                          className="input input-bordered"
                          placeholder={field.replace(/([A-Z])/g, " $1")}
                          value={edu[field]}
                          onChange={(e) =>
                            updateField(["education", i, field], e.target.value)
                          }
                        />
                      )
                    )}
                  </div>

                  <button
                    type="button"
                    className="btn btn-error btn-outline btn-sm"
                    onClick={() => removeItem(["education"], i)}
                  >
                    <Trash2 className="w-4 h-4" /> Remove Education
                  </button>
                </div>
              ))}

              <button
                type="button"
                className="btn btn-primary gap-2"
                onClick={() =>
                  addItem(["education"], {
                    degree: "",
                    university: "",
                    location: "",
                    graduationYear: "",
                  })
                }
              >
                <Plus className="w-4 h-4" />
                Add Education
              </button>
            </div>
          </div>

          {/* Certifications */}
          <div className="card bg-base-100 shadow-xl border border-base-200">
            <div className="card-body space-y-6">
              <div className="flex items-center gap-3">
                <BadgeCheck className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Certifications</h2>
              </div>

              {(data?.certifications || []).map((cert, i) => (
                <div
                  key={i}
                  className="border border-base-300 rounded-xl p-5 space-y-4"
                >
                  <div className="grid md:grid-cols-3 gap-4">
                    <input
                      className="input input-bordered"
                      placeholder="Certification Name"
                      value={cert.name}
                      onChange={(e) =>
                        updateField(
                          ["certifications", i, "name"],
                          e.target.value
                        )
                      }
                    />

                    <input
                      className="input input-bordered"
                      placeholder="Issuer"
                      value={cert.issuer}
                      onChange={(e) =>
                        updateField(
                          ["certifications", i, "issuer"],
                          e.target.value
                        )
                      }
                    />

                    <input
                      className="input input-bordered"
                      placeholder="Year"
                      value={cert.year}
                      onChange={(e) =>
                        updateField(
                          ["certifications", i, "year"],
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <button
                    type="button"
                    className="btn btn-error btn-outline btn-sm"
                    onClick={() => removeItem(["certifications"], i)}
                  >
                    <Trash2 className="w-4 h-4" /> Remove Certification
                  </button>
                </div>
              ))}

              <button
                type="button"
                className="btn btn-primary gap-2"
                onClick={() =>
                  addItem(["certifications"], {
                    name: "",
                    issuer: "",
                    year: "",
                  })
                }
              >
                <Plus className="w-4 h-4" />
                Add Certification
              </button>
            </div>
          </div>

          {/* Projects */}
          <div className="card bg-base-100 shadow-xl border border-base-200">
            <div className="card-body space-y-6">
              <div className="flex items-center gap-3">
                <FolderGit2 className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Projects</h2>
              </div>

              {(data?.projects || []).map((project, i) => (
                <div
                  key={i}
                  className="border border-base-300 rounded-xl p-5 space-y-4"
                >
                  {/* Title */}
                  <input
                    className="input input-bordered w-full"
                    placeholder="Project Title"
                    value={project.title}
                    onChange={(e) =>
                      updateField(["projects", i, "title"], e.target.value)
                    }
                  />

                  {/* Description */}
                  <textarea
                    className="textarea textarea-bordered w-full"
                    rows={3}
                    placeholder="Project Description"
                    value={project.description}
                    onChange={(e) =>
                      updateField(
                        ["projects", i, "description"],
                        e.target.value
                      )
                    }
                  />

                  {/* GitHub Link */}
                  <input
                    className="input input-bordered w-full"
                    placeholder="GitHub Repository Link"
                    value={project.gitHubLink}
                    onChange={(e) =>
                      updateField(["projects", i, "gitHubLink"], e.target.value)
                    }
                  />

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="font-semibold">Technologies Used</h4>

                    {(project.technologies || []).map((tech, tIndex) => (
                      <div key={tIndex} className="flex gap-2">
                        <input
                          className="input input-bordered w-full"
                          placeholder="Technology (e.g. React, Spring Boot)"
                          value={tech}
                          onChange={(e) =>
                            updateField(
                              ["projects", i, "technologies", tIndex],
                              e.target.value
                            )
                          }
                        />
                        <button
                          type="button"
                          className="btn btn-error btn-outline btn-sm"
                          onClick={() =>
                            removeItem(["projects", i, "technologies"], tIndex)
                          }
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}

                    <button
                      type="button"
                      className="btn btn-outline btn-sm gap-2"
                      onClick={() =>
                        addItem(["projects", i, "technologies"], "")
                      }
                    >
                      <Plus className="w-4 h-4" />
                      Add Technology
                    </button>
                  </div>

                  {/* Remove Project */}
                  <button
                    type="button"
                    className="btn btn-error btn-outline btn-sm"
                    onClick={() => removeItem(["projects"], i)}
                  >
                    <Trash2 className="w-4 h-4" /> Remove Project
                  </button>
                </div>
              ))}

              {/* Add Project */}
              <button
                type="button"
                className="btn btn-primary gap-2"
                onClick={() =>
                  addItem(["projects"], {
                    title: "",
                    description: "",
                    technologies: [""],
                    gitHubLink: "",
                  })
                }
              >
                <Plus className="w-4 h-4" />
                Add Project
              </button>
            </div>
          </div>

          {/* Achievements */}
          <div className="card bg-base-100 shadow-xl border border-base-200">
            <div className="card-body space-y-6">
              <div className="flex items-center gap-3">
                <Trophy className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Achievements</h2>
              </div>

              {(data?.achievements || []).map((item, i) => (
                <div key={i} className="flex gap-2">
                  <input
                    className="input input-bordered w-full"
                    value={item}
                    placeholder="Achievement"
                    onChange={(e) =>
                      updateField(["achievements", i], e.target.value)
                    }
                  />
                  <button
                    type="button"
                    className="btn btn-error btn-outline btn-sm"
                    onClick={() => removeItem(["achievements"], i)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}

              <button
                type="button"
                className="btn btn-outline btn-sm gap-2"
                onClick={() => addItem(["achievements"], "")}
              >
                <Plus className="w-4 h-4" />
                Add Achievement
              </button>
            </div>
          </div>

          {/* Languages */}
          {["languages", "interests"].map((section) => (
            <div
              key={section}
              className="card bg-base-100 shadow-xl border border-base-200"
            >
              <div className="card-body space-y-6">
                <div className="flex items-center gap-3">
                  <BookCheck className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">{section}</h2>
                </div>
                {(data?.[section] || []).map((item, i) => (
                  <div key={i} className="flex gap-2">
                    <input
                      className="input input-bordered w-full"
                      value={item}
                      placeholder={`Add ${section.slice(0, -1)}`}
                      onChange={(e) =>
                        updateField([section, i], e.target.value)
                      }
                    />
                    <button
                      type="button"
                      className="btn btn-error btn-outline btn-sm"
                      onClick={() => removeItem([section], i)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}

                <button
                  type="button"
                  className="btn btn-outline btn-sm gap-2"
                  onClick={() => addItem([section], "")}
                >
                  <Plus className="w-4 h-4" />
                  Add {section.slice(0, -1)}
                </button>
              </div>
            </div>
          ))}
          {/* Save */}
          <button className="btn btn-success btn-lg w-full gap-2" type="submit">
            <Save className="w-5 h-5" />
            Save Resume
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
