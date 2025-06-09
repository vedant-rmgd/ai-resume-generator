import ResumePreview from "../components/ResumePreview";

export default function Generate() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 px-4 py-6">
      <ResumePreview />
    </div>
  );
}
