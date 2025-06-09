import SectionSelector from "../components/SectionSelector"
import ResumeForm from "../components/ResumeForm"

export default function Home() {
  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <h1 className="text-3xl font-bold mb-6">AI Resume Builder</h1>
      <SectionSelector />
      <ResumeForm/>
    </div>
  )
}