// utils/parseResumeMarkdown.js
export default function parseResumeMarkdown(markdown) {
  const sections = {};
  const lines = markdown.split("\n");

  let currentSection = "";
  for (let line of lines) {
    line = line.trim();

    // Match section headers like ## Skills
    if (line.startsWith("## ")) {
      currentSection = line.replace("## ", "").toLowerCase().replace(" ", "");
      sections[currentSection] = [];
    } else if (currentSection) {
      sections[currentSection].push(line);
    }
  }

  // Clean up arrays: remove empty strings and join paragraphs
  const cleanedSections = Object.fromEntries(
    Object.entries(sections).map(([key, value]) => {
      if (key === "summary") {
        return [key, value.join(" ")];
      } else if (key === "projects") {
        const projects = value
          .filter(Boolean)
          .map((line) => {
            const [title, link] = line.split(" - ");
            return { title, link };
          });
        return [key, projects];
      } else {
        return [key, value.filter(Boolean)];
      }
    })
  );

  return cleanedSections;
}
