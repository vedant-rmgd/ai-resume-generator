import { useSelector, useDispatch } from "react-redux";
import SectionRenderer from "./SectionRenderer";
import { generateResumeFromGemini } from "../utilities/gemini";
import generatePrompt from "../utilities/generatePromt";
import { setGeneratedResume } from "../store/slices/resumeSlice";
import { useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
import html2pdf from "html2pdf.js";
import parseResumeMarkdown from "../utilities/parseResumeMarkdown";

function ResumePreview() {
  const selectedSections = useSelector(
    (state) => state.section.selectedSections
  );
  const formData = useSelector((state) => state.form.formData);
  const generatedResume = useSelector((state) => state.resume.generatedText);
  console.log(generatedResume)
  const dispatch = useDispatch();

  const [loding, setLoding] = useState(false);
  const pdfRef = useRef();

  const handleAIGenerate = async () => {
    console.log(formData);
    setLoding(true);

    const prompt = generatePrompt(formData, selectedSections);
    const resume = await generateResumeFromGemini(prompt);

    // 🧹 Clean unwanted parts
    const cleaned = resume
      .replace(/\[.*?\]\(.*?\)/g, "") // Remove markdown links
      .replace(/https?:\/\/[^\s]+/g, "") // Remove raw URLs
      .replace(/\S+@\S+\.\S+/g, "") // Remove emails
      .replace(/note:.*$/i, "") // Remove ending notes
      .trim();

    dispatch(setGeneratedResume(cleaned));
    setLoding(false);
  };

  const handleDownload = () => {
    if (!pdfRef.current) return;

    // 1. Clone resume DOM
    const clone = pdfRef.current.cloneNode(true);
    const container = document.createElement("div");

    // 2. Style it off-screen
    container.style.position = "absolute";
    container.style.left = "-9999px";
    container.style.top = "0";
    container.style.zIndex = "-9999";
    container.appendChild(clone);
    document.body.appendChild(container);

    // 3. Disable scrolling while rendering
    // Force scroll unlock after 5 seconds just in case
    setTimeout(() => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }, 5000);

    // 4. Trigger download
    html2pdf()
      .set({
        margin: 0.5,
        filename: "AI-Resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      })
      .from(clone)
      .save()
      .then(() => {
        // 5. Restore scroll and clean up
        document.body.style.overflow = "auto";
        document.documentElement.style.overflow = "auto";
        document.body.removeChild(container);
      })
      .catch((err) => {
        console.error("PDF generation failed:", err);
        document.body.style.overflow = "auto";
        document.documentElement.style.overflow = "auto";
        document.body.removeChild(container);
      });
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-2 bg-white text-black rounded-xl border-4 border-zinc-300  shadow-md overflow-y-auto max-h-[90vh]">
      <h1 className="text-3xl font-bold text-center mb-4 border-b pb-2 border-zinc-300 dark:border-zinc-600">
        Resume Preview
      </h1>

      {selectedSections.map((section) => {
        const sectionData = formData[section];
        if (!sectionData) return null;
        return (
          <SectionRenderer key={section} section={section} data={sectionData} />
        );
      })}

      <div className="text-center mt-6 space-x-4">
        <button
          onClick={handleAIGenerate}
          className="px-6 py-2 bg-blue-500 text-white font-light border-[3px] border-black shadow-[4px_4px_0px_black] rounded-none hover:bg-blue-600 transition active:scale-[0.97]"
        >
          {loding ? "Generating..." : "Generate AI Resume"}
        </button>

        {generatedResume && (
          <button
            onClick={handleDownload}
            className="px-6 py-2 bg-green-500 text-white font-light border-[3px] border-black shadow-[4px_4px_0px_black] rounded-none hover:bg-green-600 transition active:scale-[0.97]"
          >
            Download PDF
          </button>
        )}
      </div>

      {generatedResume && (
        <div
          ref={pdfRef}
          className="mt-8 p-6 rounded-2xl border-[3px] border-[#d4d4d8] shadow-[4px_4px_0px_black] bg-[#fde68a] text-[#18181b] font-serif"
          style={{
            backgroundColor: "#fde68a",
            color: "#18181b",
            borderColor: "#d4d4d8",
          }}
        >
          {formData["Profile Picture"].image && (
            <div className="flex justify-center mb-4">
              <img
                src={formData["Profile Picture"].image}
                alt="Profile"
                className="w-24 h-24 rounded-full border-2 border-[#18181b] object-cover"
              />
            </div>
          )}
          <div className="prose prose-zinc prose-sm sm:prose-base max-w-none">
            <ReactMarkdown>{generatedResume}</ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
}

export default ResumePreview;
