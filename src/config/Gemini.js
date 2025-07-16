


import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyCKSJ49B6J1idTQMmju-XxCC7iKouwX_lU" });

async function main() {
  const result = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "Explain how AI works in a few words",
  });
  const text=result.response.text();
  console.log(text);
}

main();