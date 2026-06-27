import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { apiFetch, type PaginatedResponse } from './api'

export interface Community {
  id: string
  name: string
  slug: string
  description: string
  imageUrl: string
  ownerType: string
  ownerId: string
  visibility: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

const PAGE_SIZE = 12

export function useCommunities(search: string) {
  return useInfiniteQuery({
    queryKey: ['communities', search],
    queryFn: ({ pageParam }) =>
      apiFetch<PaginatedResponse<Community>>('/communities', {
        page: String(pageParam),
        pageSize: String(PAGE_SIZE),
        ...(search && { q: search }),
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.hasNext ? lastPage.page + 1 : undefined,
  })
}

export function useCommunity(slug: string) {
  return useQuery({
    queryKey: ['community', slug],
    queryFn: () => apiFetch<Community>(`/communities/${slug}`),
    enabled: !!slug,
  })
}
