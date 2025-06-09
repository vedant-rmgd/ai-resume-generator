export async function fetchAIResponse(prompt) {
  const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      message: [{ role: "user", content: prompt }],
      temperature: 0.7,
    }),
  });

  const data = await response.JSON();
  return data.choices?.[0]?.message?.content;
}
