import { useInfiniteQuery } from '@tanstack/react-query'
import { apiFetch, type PaginatedResponse } from './api'

export interface Campaign {
  id: string
  organizationId: string
  communityId: string
  community: unknown
  name: string
  slug: string
  type: string
  description: string
  imageUrl: string
  categoryId: string
  categoryLabel: string
  goalAmountCents: number
  goalCurrency: string
  status: string
  visibility: string
  startDate: string
  endDate: string
  activatedAt: string
  completedAt: string
  createdAt: string
  updatedAt: string
  totalRaisedCents: number
  donationsCount: number
  sourceCounts: Record<string, number>
}

const PAGE_SIZE = 12

export function useCommunityCampaigns(communitySlug: string) {
  return useInfiniteQuery({
    queryKey: ['community-campaigns', communitySlug],
    queryFn: ({ pageParam }) =>
      apiFetch<PaginatedResponse<Campaign>>(
        `/communities/${communitySlug}/campaigns`,
        {
          page: String(pageParam),
          pageSize: String(PAGE_SIZE),
        },
      ),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.hasNext ? lastPage.page + 1 : undefined,
    enabled: !!communitySlug,
  })
}
