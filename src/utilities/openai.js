// export async function fetchAIResponse(prompt) {
//   const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

//   const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${OPENAI_API_KEY}`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${OPENAI_API_KEY}`,
//     },
//     body: JSON.stringify({
//       model: "gpt-3.5-turbo",
//       messages: [{ role: "user", content: prompt }],
//       temperature: 0.7,
//     }),
//   });

//   const data = await response.json();
//   return data.choices?.[0]?.message?.content;
// }
