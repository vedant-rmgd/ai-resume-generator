const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

export async function generateResumeFromGemini(prompt) {
  const chatHistory = [
    {
      role: "user",
      parts: [{ text: prompt }],
    },
  ];

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ contents: chatHistory }),
  };

  try {
    const res = await fetch(API_URL, requestOptions);
    const data = await res.json();

    if (!res.ok) throw new Error(data.error.message);

    let rawText = data.candidates[0].content.parts[0].text.trim();

    // Clean up hallucinated or placeholder content
    const cleanedText = rawText
      .replace(/\[Phone Number\]/gi, "")
      .replace(/\[Email Address\]/gi, "")
      .replace(/^\s*\* /gm, "- ")                     
      .replace(/^\s*Note:.*$/gim, "")                 
      .replace(/^\s*[\*\-]\s*\[.*?\]/gm, "")           
      .replace(/\n{3,}/g, "\n\n");                    

    return cleanedText;

  } catch (error) {
    console.error("Gemini Error:", error);
    return "⚠️ Gemini failed to generate resume. Try again.";
  }
}


