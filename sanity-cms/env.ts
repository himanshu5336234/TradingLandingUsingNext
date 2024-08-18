export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2022-03-07'

export const dataset = assertValue(
  (process.env.NEXT_PUBLIC_SANITY_DATASET || "production"),
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "5xikm7hk"),
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const algoliaAdminApiKey =
  process.env.ALGOLIA_ADMIN_API_KEY || 'e3048c38dd96fff2b33769dab3474b07'

export const algoliaSearchKey =
  process.env.ALGOLIA_SEARCH_KEY || 'Missing environment variable: ALGOLIA_SEARCH_KEY'

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}