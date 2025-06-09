export default function generatePrompt(formData, selectedSections) {
  let prompt = `you are a professional resume builder. Based on the following user input, write a clean, concise and impactful resume section(s):\n\n`;

  selectedSections.forEach((section) => {
    const data = formData[section];

    if (!data) {
      prompt += `### ${section}:\n`;

      switch (section) {
        case "Profile":
          prompt += `Summary: ${data.summery}\n`;
          break;
        case "Skills":
          prompt += `Skills: ${data.list}\n`;
          break;
        case "Projects":
          prompt += `Projects: ${data.projects.join(", ")}\n`;
          break;
        case "Experience":
          prompt += `Role: ${data.role}\nCompany: ${data.company}\nDuration: ${data.duration}\nDetails: ${data.details}\n`;
          break;
        case "Soft Skills":
          prompt += `Soft Skills: ${data.list}\n`;
          break;
        case "Social Links":
          prompt += `LinkedIn: ${data.linkedin}\nGitHub: ${data.github}\nPortfolio: ${data.portfolio}\n`;
          break;
        default:
          break;
      }
    }

    prompt += "\n";
  });

  prompt += "Now write a professional version of the above information for the resume.\n";
  return prompt;
}
