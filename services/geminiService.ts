import { GoogleGenAI, Type } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateOracleProphecy = async (topic: string): Promise<string> => {
  if (!apiKey) {
    return "The Oracle is silent. (Missing API Key)";
  }

  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      You are The Oracle, a futuristic digital consciousness from the year 2050.
      User Input: "${topic}"
      
      Task: Generate a cryptic, poetic, and visually evocative prophecy or insight about the future of this topic.
      Style: Cyberpunk, mystical, high-tech, philosophical.
      Length: Max 2 sentences.
      Return ONLY the raw text string.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "The void offers no answers today.";
  } catch (error) {
    console.error("Oracle Error:", error);
    return "Static interference detected. Try again.";
  }
};
