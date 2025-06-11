import SectionSelector from "../components/SectionSelector";
import ResumeForm from "../components/ResumeForm";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-100 p-4">
      <div className="w-full max-w-3xl bg-blue-200 border-[3px] border-black shadow-[5px_5px_0px_black] rounded-xl p-8">
        <h1 className="text-4xl font-light font-cartoon text-center mb-6 text-blue-600 ">
          AI Resume Builder
        </h1>

        <SectionSelector />
        <ResumeForm />

        <div className="text-center">
          <button
            onClick={() => navigate("/preview")}
            className="mt-8 px-6 py-3 bg-red-400 text-black font-light rounded shadow-[3px_3px_0px_black] border-[3px] border-black hover:bg-red-500 transition"
          >
            🔍 Go to Preview
          </button>
        </div>
      </div>
    </div>
  );
}
