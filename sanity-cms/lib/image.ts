import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'

import { projectId } from '../env'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: 'production',
})

export const urlFor = (source: Image) => {
  return imageBuilder?.image(source).auto('format').fit('max').url()
}