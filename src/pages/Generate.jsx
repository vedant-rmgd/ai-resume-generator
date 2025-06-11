import ResumePreview from "../components/ResumePreview";

export default function Generate() {
  return (
  <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 font-cartoon bg-yellow-50">
    <h1 className="text-3xl text-center mb-6 text-black">🎨 Preview Your Resume</h1>

    <div className="w-full max-w-4xl bg-yellow-300 border-[3px] border-black shadow-[6px_6px_0px_black] rounded-xl p-3 mb-6">
      <ResumePreview />
    </div>
  </div>
);
}
