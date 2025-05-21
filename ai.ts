import { puter } from 'puter'

export default async function handler(req, res) {
  const { prompt } = req.body

  try {
    const response = await puter.chat({
      messages: [
        { role: 'system', content: 'You are a helpful AI life assistant' },
        { role: 'user', content: prompt }
      ]
    })

    res.status(200).json({ result: response.choices[0].message.content })
  } catch (error) {
    res.status(500).json({ error: 'AI failed to respond' })
  }
}

// Placeholder for api/ai.ts
