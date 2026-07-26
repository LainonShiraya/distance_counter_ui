export type ApiResult<T> = {
  data?: T
  error?: string
  status: number
}
const API_URL = (import.meta.env).VITE_API_URL;

export async function post<T>(endpoint: string, payload: unknown): Promise<ApiResult<T>> {
  try {
    const resp = await fetch(API_URL + endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    const status = resp.status
    const text = await resp.text()
    let json = null
    try {
      json = text ? JSON.parse(text) : null
    } catch (e) {
    }

    if (!resp.ok) {
      const error = json?.error || `Server error: ${status}`
      return { error, status }
    }

    return { data: json as T, status }
  } catch (e: Error | unknown) {
    return { error: (e as Error)?.message ?? 'Network error', status: 0 }
  }
}
