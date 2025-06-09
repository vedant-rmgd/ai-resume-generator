import SectionSelector from "../components/SectionSelector";
import ResumeForm from "../components/ResumeForm";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">AI Resume Builder</h1>
      <SectionSelector />
      <ResumeForm />
      <button
        onClick={() => navigate("/preview")}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Go to Preview
      </button>
    </div>
  );
}
