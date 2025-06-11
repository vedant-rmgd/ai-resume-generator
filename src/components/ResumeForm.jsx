import { useSelector, useDispatch } from "react-redux";
import { updateFormField } from "../store/slices/formSlice";

function ResumeForm() {
  const selectedSections = useSelector(
    (state) => state.section.selectedSections
  );
  const formData = useSelector((state) => state.form.formData);
  const dispatch = useDispatch();

  const handleChange = (section, field, value) => {
    dispatch(updateFormField({ section, field, value }));
  };

  return (
    <div className="p-4 mt-8 border-t pt-6">
      <h2 className="text-2xl font-medium mb-4">📝 Fill Resume Details</h2>

      {selectedSections.length === 0 && (
        <p className="text-gray-500">
          Please select at least one section to continue.
        </p>
      )}

      {selectedSections.map((section) => (
        <div key={section} className="mb-6">
          <h3 className="text-xl font-light mb-3 underline decoration-yellow-400 underline-offset-4">
            {section}
          </h3>

          {section === "Profile" && (
            <textarea
              rows={4}
              placeholder="Tell us about yourself..."
              className="w-full border-[3px] border-black rounded-xl p-3 shadow-[3px_3px_0px_black] bg-purple-200 text-black font-light placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData?.Profile?.summery || ""}
              onChange={(e) =>
                handleChange("Profile", "summery", e.target.value)
              }
            />
          )}

          {section === "Skills" && (
            <input
              type="text"
              placeholder="your skills"
              className="w-full border-[3px] border-black rounded-xl p-3 shadow-[3px_3px_0px_black] bg-purple-200 text-black font-light placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData?.Skills?.list || ""}
              onChange={(e) => handleChange("Skills", "list", e.target.value)}
            />
          )}

          {section === "Projects" && (
            <input
              type="text"
              placeholder="Add links or titles"
              className="w-full border-[3px] border-black rounded-xl p-3 shadow-[3px_3px_0px_black] bg-purple-200 text-black font-light placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData?.Projects?.info || ""}
              onChange={(e) => handleChange("Projects", "info", e.target.value)}
            />
          )}

          {section === "Education" && (
            <>
              <input
                type="text"
                placeholder="Degree (e.g. BSc in Zoology)"
                className="w-full mb-2 border-[3px] border-black rounded-xl p-3 shadow-[3px_3px_0px_black] bg-purple-200 text-black font-light placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData?.Education?.degree || ""}
                onChange={(e) =>
                  handleChange("Education", "degree", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Institution"
                className="w-full mb-2 border-[3px] border-black rounded-xl p-3 shadow-[3px_3px_0px_black] bg-purple-200 text-black font-light placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData?.Education?.institution || ""}
                onChange={(e) =>
                  handleChange("Education", "institution", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Year (e.g. 2022)"
                className="w-full border-[3px] border-black rounded-xl p-3 shadow-[3px_3px_0px_black] bg-purple-200 text-black font-light placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData?.Education?.year || ""}
                onChange={(e) =>
                  handleChange("Education", "year", e.target.value)
                }
              />
            </>
          )}

          {section === "Achievements" && (
            <textarea
              rows={3}
              placeholder="Mention your awards or achievements"
              className="w-full border-[3px] border-black rounded-xl p-3 shadow-[3px_3px_0px_black] bg-purple-200 text-black font-light placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData?.Achievements?.details || ""}
              onChange={(e) =>
                handleChange("Achievements", "details", e.target.value)
              }
            />
          )}

          {section === "Soft Skills" && (
            <input
              type="text"
              placeholder="Enter soft skills (comma-separated)"
              className="w-full border-[3px] border-black rounded-xl p-3 shadow-[3px_3px_0px_black] bg-purple-200 text-black font-light placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData?.["Soft Skills"]?.list || ""}
              onChange={(e) =>
                handleChange("Soft Skills", "list", e.target.value)
              }
            />
          )}

          {section === "Experience" && (
            <>
              <input
                type="text"
                placeholder="Company Name"
                className="w-full mb-2 border-[3px] border-black rounded-xl p-3 shadow-[3px_3px_0px_black] bg-purple-200 text-black font-light placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData?.Experience?.company || ""}
                onChange={(e) =>
                  handleChange("Experience", "company", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Your Role"
                className="w-full mb-2 border-[3px] border-black rounded-xl p-3 shadow-[3px_3px_0px_black] bg-purple-200 text-black font-light placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData?.Experience?.role || ""}
                onChange={(e) =>
                  handleChange("Experience", "role", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Duration (e.g. Jan 2022 – Dec 2023)"
                className="w-full mb-2 border-[3px] border-black rounded-xl p-3 shadow-[3px_3px_0px_black] bg-purple-200 text-black font-light placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData?.Experience?.duration || ""}
                onChange={(e) =>
                  handleChange("Experience", "duration", e.target.value)
                }
              />
              <textarea
                rows={3}
                placeholder="Describe your work or responsibilities"
                className="w-full mb-2 border-[3px] border-black rounded-xl p-3 shadow-[3px_3px_0px_black] bg-purple-200 text-black font-light placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData?.Experience?.description || ""}
                onChange={(e) =>
                  handleChange("Experience", "description", e.target.value)
                }
              />
            </>
          )}

          {section === "Social Links" && (
            <>
              <input
                type="text"
                placeholder="LinkedIn URL"
                className="w-full mb-2 border-[3px] border-black rounded-xl p-3 shadow-[3px_3px_0px_black] bg-purple-200 text-black font-light placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData?.["Social Links"]?.linkedin || ""}
                onChange={(e) =>
                  handleChange("Social Links", "linkedin", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="GitHub URL"
                className="w-full mb-2 border-[3px] border-black rounded-xl p-3 shadow-[3px_3px_0px_black] bg-purple-200 text-black font-light placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData?.["Social Links"]?.github || ""}
                onChange={(e) =>
                  handleChange("Social Links", "github", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Portfolio Website"
                className="w-full mb-2 border-[3px] border-black rounded-xl p-3 shadow-[3px_3px_0px_black] bg-purple-200 text-black font-light placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData?.["Social Links"]?.portfolio || ""}
                onChange={(e) =>
                  handleChange("Social Links", "portfolio", e.target.value)
                }
              />
            </>
          )}

          {section === "Profile Picture" && (
            <>
              <div className="relative inline-block mb-3">
                <label
                  htmlFor="profilePicInput"
                  className="cursor-pointer px-4 py-2 border-2 border-red-700 bg-amber-50 text-zinc-700 shadow-[3px_3px_0px_black] rounded-md font-cartoon transition hover:bg-red-50"
                >
                  📷 Upload Profile Picture
                </label>
                <input
                  id="profilePicInput"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        handleChange("Profile Picture", "image", reader.result);
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                  className="hidden"
                />
              </div>

              {/* Preview */}
              {formData?.["Profile Picture"]?.image && (
                <img
                  src={formData["Profile Picture"].image}
                  alt="Preview"
                  className="w-32 h-32 object-cover border-[3px] border-black shadow-[3px_3px_0px_black] rounded-xl"
                />
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default ResumeForm;
