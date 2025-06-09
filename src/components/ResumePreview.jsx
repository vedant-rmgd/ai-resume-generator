import { useSelector, useDispatch } from "react-redux";
import SectionRenderer from "./SectionRenderer";
import { fetchAIResponse } from "../utilities/openai";
import generatePrompt from "../utilities/generatePromt";
import { setGeneratedResume } from "../store/slices/resumeSlice";
import { useState, useRef } from "react";
import downloadPDF from "../utilities/downloadePdf";

function ResumePreview() {
  const selectedSections = useSelector((state) => state.sections.selected);
  const formData = useSelector((state) => state.form.data);
  const generatedResume = useSelector((state) => state.resume.generatedText);
  const dispatch = useDispatch();

  const [loding, setLoding] = useState(false);
  const pdfRef = useRef();

  const handleAIGenerate = async () => {
    setLoding(true);
    const prompt = generatePrompt(formData, selectedSections);
    const aiText = await fetchAIResponse(prompt);
    dispatch(setGeneratedResume(aiText));
    setLoding(false);
  };

  const handleDownload = () => {
    if (pdfRef.current) {
      downloadPDF(pdfRef.current, "AI-Resume.pdf");
    }
  };

  return (
    <div className="w-full lg:w-1/2 p-4 bg-white dark:bg-zinc-900 text-black dark:text-white rounded-xl border-4 border-zinc-300 dark:border-zinc-700 shadow-md overflow-y-auto max-h-[90vh]">
      <h1 className="text-3xl font-bold text-center mb-4 border-b pb-2 border-zinc-300 dark:border-zinc-600">
        Resume Preview
      </h1>

      {selectedSections.map((section) => (
        <SectionRenderer
          key={section}
          section={section}
          data={formData[section]}
        />
      ))}

      <div className="text-center mt-6 space-x-4">
        <button
          onClick={handleAIGenerate}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          {loding ? "Generating..." : "Generate AI Resume"}
        </button>

        {generatedResume && (
          <button
            onClick={handleDownload}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Download PDF
          </button>
        )}
      </div>

      {generatedResume && (
        <div className="mt-8 p-4 bg-gray-100 dark:bg-zinc-800 rounded-md">
          <h2 className="text-2xl font-semibold mb-2">AI Generated Resume:</h2>
          <pre className="whitespace-pre-wrap">{generatedResume}</pre>
        </div>
      )}
    </div>
  );
}

export default ResumePreview;
