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
      <h2 className="text-2xl font-bold mb-4">📝 Fill Resume Details</h2>

      {selectedSections.length === 0 && (
        <p className="text-gray-500">
          Please select at least one section to continue.
        </p>
      )}

      {selectedSections.map((section) => (
        <div key={section} className="mb-6">
          <h3 className="text-lg font-semibold mb-2">{section}</h3>

          {section === "Profile" && (
            <textarea
              rows={4}
              placeholder="Tell us about yourself..."
              className="w-full border p-2 rounded"
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
              className="w-full border p-2 rounded"
              value={formData?.Skills?.list || ""}
              onChange={(e) => handleChange("Skills", "list", e.target.value)}
            />
          )}

          {section === "Projects" && (
            <input
              type="text"
              placeholder="Add links or titles"
              className="w-full border p-2 rounded"
              value={formData?.Projects?.info || ""}
              onChange={(e) => handleChange("Projects", "info", e.target.value)}
            />
          )}

          {section === "Education" && (
            <>
              <input
                type="text"
                placeholder="Degree (e.g. BSc in Zoology)"
                className="w-full border p-2 rounded mb-2"
                value={formData?.Education?.degree || ""}
                onChange={(e) =>
                  handleChange("Education", "degree", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Institution"
                className="w-full border p-2 rounded mb-2"
                value={formData?.Education?.institution || ""}
                onChange={(e) =>
                  handleChange("Education", "institution", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Year (e.g. 2022)"
                className="w-full border p-2 rounded"
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
              className="w-full border p-2 rounded"
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
              className="w-full border p-2 rounded mb-2"
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
                className="w-full border p-2 rounded mb-2"
                value={formData?.Experience?.company || ""}
                onChange={(e) =>
                  handleChange("Experience", "company", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Your Role"
                className="w-full border p-2 rounded mb-2"
                value={formData?.Experience?.role || ""}
                onChange={(e) =>
                  handleChange("Experience", "role", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Duration (e.g. Jan 2022 – Dec 2023)"
                className="w-full border p-2 rounded mb-2"
                value={formData?.Experience?.duration || ""}
                onChange={(e) =>
                  handleChange("Experience", "duration", e.target.value)
                }
              />
              <textarea
                rows={3}
                placeholder="Describe your work or responsibilities"
                className="w-full border p-2 rounded"
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
                className="w-full border p-2 rounded mb-2"
                value={formData?.["Social Links"]?.linkedin || ""}
                onChange={(e) =>
                  handleChange("Social Links", "linkedin", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="GitHub URL"
                className="w-full border p-2 rounded mb-2"
                value={formData?.["Social Links"]?.github || ""}
                onChange={(e) =>
                  handleChange("Social Links", "github", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Portfolio Website"
                className="w-full border p-2 rounded"
                value={formData?.["Social Links"]?.portfolio || ""}
                onChange={(e) =>
                  handleChange("Social Links", "portfolio", e.target.value)
                }
              />
            </>
          )}

          {section === "Profile Picture" && (
            <>
              <input
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
                className="mb-2"
              />

              {/* Preview */}
              {formData?.["Profile Picture"]?.image && (
                <img
                  src={formData["Profile Picture"].image}
                  alt="Preview"
                  className="w-32 h-32 object-cover border rounded"
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
