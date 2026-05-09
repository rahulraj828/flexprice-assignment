/**
 * Query configuration presets for TanStack Query.
 */
export const QUERY_PRESETS = {
  REALTIME: { staleTime: 0, gcTime: 10 * 60 * 1000 }, // 0 min stale, 10 min gc
  DEFAULT: { staleTime: 5 * 60 * 1000, gcTime: 10 * 60 * 1000 }, // 5 min stale, 10 min gc
  STATIC: { staleTime: 30 * 60 * 1000, gcTime: 60 * 60 * 1000 }, // 30 min stale, 60 min gc
} as const;

export type QueryConfigOptions = {
  staleTime?: number;
  gcTime?: number;
};

/**
 * Creates a query configuration object merging presets with optional overrides.
 * 
 * @param preset - The predefined caching strategy (REALTIME, DEFAULT, STATIC).
 * @param overrides - Optional overrides for staleTime or gcTime.
 * @returns A configuration object for useQuery.
 */
export function createQueryConfig(
  preset: keyof typeof QUERY_PRESETS = 'DEFAULT',
  overrides?: QueryConfigOptions
) {
  const baseConfig = QUERY_PRESETS[preset];
  return { ...baseConfig, ...overrides };
}
