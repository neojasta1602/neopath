// components/LifePathSimulator.tsx
import { useState } from 'react'

export default function LifePathSimulator() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const res = await fetch('/api/ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt: `Bantu saya memilih arah hidup terbaik. Situasi saya: ${input}`
      })
    })
    const data = await res.json()
    setResult(data.result)
    setLoading(false)
  }

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow-xl rounded-xl">
      <h1 className="text-2xl font-bold mb-4">Life Path Simulator</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full border p-2 rounded"
          rows={5}
          placeholder="Ceritain situasi hidup lo sekarang..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="mt-4 bg-purple-600 text-white px-4 py-2 rounded"
          type="submit"
        >
          {loading ? 'Menganalisis...' : 'Simulasikan Jalan Hidup'}
        </button>
      </form>

      {result && (
        <div className="mt-6 p-4 bg-gray-100 rounded">
          <h2 className="font-semibold mb-2">Hasil Simulasi AI:</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  )
}
