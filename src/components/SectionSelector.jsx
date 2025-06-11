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
    <div className="p-6 bg-white rounded-xl shadow-[4px_4px_0px_black] border-[3px] border-black mt-10">
      <h2 className="text-2xl font-light mb-6 ">Choose Resume Sections</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {sections.map((sec, i) => {
      const colorfulBg = ["bg-yellow-200", "bg-pink-200", "bg-blue-200", "bg-purple-200"];
      const color = colorfulBg[i % colorfulBg.length];

      const isSelected = selected.includes(sec);

      return (
        <label
          key={sec}
          className={`border-4 p-3 cursor-pointer text-center font-light transition-all shadow-[3px_3px_0px_black] 
    text-sm break-words w-full
          ${isSelected
            ? "bg-green-300 text-black border-black"
            : `${color} text-black border-black hover:brightness-95`
          }`}
        >
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => handleToggle(sec)}
            className="hidden"
          />
          {sec}
        </label>
      );
    })}
      </div>
    </div>
  );
}

export default SectionSelector;
