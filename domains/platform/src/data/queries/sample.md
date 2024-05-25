import { UseQueryOptions, queryOptions, useQuery } from '@tanstack/react-query'

// Api
import { clientApi } from '@/lib/api'
import { queryKeys } from '@/lib/utils'
import { Api, SportsApi } from '@/lib/types'

export function getBaseballLeaguesQueryOptions(
country?: string,
season?: string,
): UseQueryOptions<
Api.Response<SportsApi.BaseballLeague[]>,
unknown,
Api.Response<SportsApi.BaseballLeague[]>,
string[]

> {

    return queryOptions({
        queryKey: queryKeys.sportsApi.baseball.leagues(country, season),
        queryFn: () => clientApi.sportsApi.baseball.leagues(country, season),
        staleTime: Infinity,
    })

}

export function useGetBaseballLeaguesQuery(country?: string, season?: string) {
return useQuery(getBaseballLeaguesQueryOptions(country, season))
}
