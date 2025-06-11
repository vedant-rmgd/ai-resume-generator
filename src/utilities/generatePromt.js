export default function generatePrompt(formData, selectedSections) {
  let prompt = `You are a professional resume builder. Based on the following user input, write a clean, concise and impactful resume section(s):\n\n`;

  selectedSections.forEach((section) => {
    const data = formData[section];

    if (data) {
      prompt += `### ${section}:\n`;

      switch (section) {
        case "Profile":
          prompt += `Summary: ${data.summery || ""}\n`;
          break;

        case "Skills":
          prompt += `Skills: ${data.list || ""}\n`;
          break;

        case "Projects":
          prompt += `Projects: ${data.info || ""}\n`;
          break;

        case "Experience":
          prompt += `Role: ${data.role || ""}\nCompany: ${
            data.company || ""
          }\nDuration: ${data.duration || ""}\nDetails: ${
            data.description || ""
          }\n`;
          break;

        case "Soft Skills":
          prompt += `Soft Skills: ${data.list || ""}\n`;
          break;

        case "Social Links":
          if (data.linkedin || data.github || data.portfolio) {
            prompt += `LinkedIn: ${data.linkedin || "N/A"}\n`;
            prompt += `GitHub: ${data.github || "N/A"}\n`;
            prompt += `Portfolio: ${data.portfolio || "N/A"}\n`;
          }
          break;

        case "Education":
          prompt += `Degree: ${data.degree || ""}\nInstitution: ${
            data.institution || ""
          }\nYear: ${data.year || ""}\n`;
          break;

        case "Achievements":
          prompt += `Achievements: ${data.details || ""}\n`;
          break;

        default:
          prompt += `${JSON.stringify(data)}\n`;
          break;
      }

      prompt += "\n";
    }
  });

  prompt +=
    "Now write a professional version of the above information for the resume.\n";
  return prompt;
}
