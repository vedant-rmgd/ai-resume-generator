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
    return rawText;

    // const cleanedText = rawText
    //   .replace(/\[Phone Number\]/gi, "")
    //   .replace(/\[Email Address\]/gi, "")
    //   .replace(/^\s*\* /gm, "- ") // replace bullet points
    //   .replace(/^\s*Note:.*$/gim, "") // remove note lines
    //   .replace(/^\s*[\*\-]\s*\[.*?\]/gm, "") // remove markdown links in bullets
    //   .replace(/\n{3,}/g, "\n\n") // collapse multiple newlines
    //   .replace(/https?:\/\/[^\s)]+/g, "") // remove all plain URLs
    //   .replace(/LinkedIn:?.*?\n?/gi, "") // remove lines starting with LinkedIn
    //   .replace(/GitHub:?.*?\n?/gi, "") // remove lines starting with GitHub
    //   .replace(/Portfolio:?.*?\n?/gi, "") // remove Portfolio lines
    //   .replace(/[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/g, ""); // remove emails

    // return cleanedText;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "⚠️ Gemini failed to generate resume. Try again.";
  }
}
