import {createClient} from 'next-sanity'

import {apiVersion, projectId, useCdn} from '../env'

export const client = createClient({
  apiVersion,
  dataset: 'production',
  projectId,
  useCdn,
  perspective: 'previewDrafts',
  stega: {
    enabled: false,
    studioUrl: 'https://density-exchange.sanity.studio/',
  },
})
