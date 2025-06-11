import { useSelector, useDispatch } from "react-redux";
import SectionRenderer from "./SectionRenderer";
import { generateResumeFromGemini } from "../utilities/gemini";
import generatePrompt from "../utilities/generatePromt";
import { setGeneratedResume } from "../store/slices/resumeSlice";
import { useState, useRef } from "react";
import downloadPDF from "../utilities/downloadePdf";

function ResumePreview() {
  const selectedSections = useSelector(
    (state) => state.section.selectedSections
  );
  const formData = useSelector((state) => state.form.formData);
  const generatedResume = useSelector((state) => state.resume.generatedText);
  const dispatch = useDispatch();

  const [loding, setLoding] = useState(false);
  const pdfRef = useRef();

  const handleAIGenerate = async () => {
    console.log(formData);
    setLoding(true);
    const prompt = generatePrompt(formData, selectedSections);
    const resume = await generateResumeFromGemini(prompt);
    dispatch(setGeneratedResume(resume));
    setLoding(false);
  };

  const handleDownload = () => {
    if (pdfRef.current) {
      downloadPDF(pdfRef.current, "AI-Resume.pdf");
    }
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
        <div className="mt-8 p-4 bg-gray-100 dark:bg-zinc-700 rounded-md">
          <h2 className="text-2xl text-white font-semibold mb-2">
            AI Generated Resume:
          </h2>
          <pre className="whitespace-pre-wrap text-amber-50">
            {generatedResume}
          </pre>
        </div>
      )}
    </div>
  );
}

export default ResumePreview;
