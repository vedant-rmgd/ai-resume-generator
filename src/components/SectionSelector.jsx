import { useDispatch, useSelector } from "react-redux";
import { toggleSection } from "../store/slices/sectionSlice";

function SectionSelector() {
  const sections = [
    "Profile",
    "Skills",
    "Projects",
    "Education",
    "Experience",
    "Achievements",
    "Soft Skills",
    "Social Links",
    "Profile Picture",
  ];

  const dispatch = useDispatch();
  const selected = useSelector((state) => state.section.selectedSections);

  const handleToggle = (section) => {
    dispatch(toggleSection(section));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Choose Resume Sections</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {sections.map((sec) => (
          <label
            key={sec}
            className={`border-2 rounded-lg p-3 cursor-pointer text-center font-semibold transition-all 
            ${
              selected.includes(sec)
                ? "bg-blue-600 text-white border-blue-800"
                : "bg-white border-gray-600 text-black hover:bg-gray-100"
            }`}
          >
            <input
              type="checkbox"
              checked={selected.includes(sec)}
              onChange={() => handleToggle(sec)}
              className="hidden"
            />
            {sec}
          </label>
        ))}
      </div>
    </div>
  );
}

export default SectionSelector;
