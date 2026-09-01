import { completeChat, parseChatMessages } from '../../../shared/chat/complete'

type Env = {
  OPENROUTER_API_KEY?: string
  OPENROUTER_API?: string
  SITE_URL: string
}

const ALLOWED_ORIGINS = new Set([
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'https://chesteragsamosam.github.io',
])

const RATE_WINDOW_MS = 60_000
const RATE_MAX = 10
const hits = new Map<string, number[]>()

function corsHeaders(origin: string) {
  const headers = new Headers({
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    Vary: 'Origin',
  })
  if (ALLOWED_ORIGINS.has(origin)) {
    headers.set('Access-Control-Allow-Origin', origin)
  }
  return headers
}

function json(body: unknown, status: number, cors: Headers) {
  const headers = new Headers(cors)
  headers.set('Content-Type', 'application/json')
  return new Response(JSON.stringify(body), { status, headers })
}

function isRateLimited(ip: string) {
  const now = Date.now()
  const recent = (hits.get(ip) || []).filter(stamp => now - stamp < RATE_WINDOW_MS)
  if (recent.length >= RATE_MAX) {
    hits.set(ip, recent)
    return true
  }
  recent.push(now)
  hits.set(ip, recent)
  return false
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get('Origin') || ''
    const cors = corsHeaders(origin)

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: cors })
    }

    if (request.method !== 'POST') {
      return json({ statusMessage: 'Method not allowed.' }, 405, cors)
    }

    if (!ALLOWED_ORIGINS.has(origin)) {
      return json({ statusMessage: 'Origin not allowed.' }, 403, cors)
    }

    const ip = request.headers.get('CF-Connecting-IP') || 'unknown'
    if (isRateLimited(ip)) {
      return json({ statusMessage: 'Too many messages. Pause a minute, then try again.' }, 429, cors)
    }

    const apiKey = env.OPENROUTER_API_KEY || env.OPENROUTER_API || ''
    if (!apiKey) {
      return json({ statusMessage: 'OpenRouter is not configured on this worker.' }, 500, cors)
    }

    let messages
    try {
      messages = parseChatMessages(await request.json())
    }
    catch (error) {
      return json({
        statusMessage: error instanceof Error ? error.message : 'Invalid chat request.',
      }, 400, cors)
    }

    try {
      const reply = await completeChat({
        apiKey,
        siteUrl: env.SITE_URL,
        messages,
      })
      return json({ reply }, 200, cors)
    }
    catch (error) {
      return json({
        statusMessage: error instanceof Error ? error.message : 'Chat request failed.',
      }, 502, cors)
    }
  },
}
