const axios = require("axios");

async function generateCreative(data) {
  const prompt = `
You are an AI Creative Director.

Brand: ${data.brand}
Tone: ${data.tone}
Product: ${data.product}
Audience: ${data.audience}
Pain Points: ${data.painPoints}
Platform: ${data.platform}
Offer: ${data.offer}

Generate:
- Headline
- Subheadline
- Body
- CTA
- 5 headline variations
- 3 CTA variations
- Emotional impact score (1-10)
- Clarity score (1-10)
- Estimated CTR score (1-10)

Return structured JSON.
`;

  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.8,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data.choices[0].message.content;
}

module.exports = { generateCreative };
