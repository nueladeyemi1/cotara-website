export const FRONTEND_URL =
  import.meta.env.VITE_FRONTEND_URL?.replace(/\/$/, '') ||
  'https://cotara-fe.vercel.app'
