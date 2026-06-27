function getApiBase(): string {
  const baseUrl = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, '')

  if (import.meta.env.PROD && baseUrl) {
    return `${baseUrl}/api/v1`
  }

  return '/api/v1'
}

const API_BASE = getApiBase()

export interface PaginatedResponse<T> {
  items: T[]
  totalCount: number
  page: number
  pageSize: number
  totalPages: number
  hasNext: boolean
  hasPrevious: boolean
}

export async function apiFetch<T>(
  endpoint: string,
  params?: Record<string, string>,
): Promise<T> {
  const url = params
    ? `${API_BASE}${endpoint}?${new URLSearchParams(params)}`
    : `${API_BASE}${endpoint}`

  const res = await fetch(url)
  if (!res.ok) throw new Error(`API error: ${res.status}`)

  const json = await res.json()
  return json.data ?? json
}
