import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import Iframe from 'sanity-plugin-iframe-pane'
import {SanityDocument} from 'sanity'

export default defineConfig({
  name: 'default',
  title: 'Density-Market',

  projectId: '5xikm7hk',
  dataset: 'production',

  document: {
    // prev is the result from previous plugins and thus can be composed
    productionUrl: async (prev, context) => {
      // context includes the client and other details
      const {getClient, dataset, document} = context
      const client = getClient({apiVersion: '2022-03-07'})

      if (document._type === 'blog') {
        const slug = await client.fetch(
          `*[_type == 'blog' && blog._ref == $blogId][0].slug.current`,
          {blogId: document._id},
        )

        const params = new URLSearchParams()
        params.set('preview', 'true')
        params.set('dataset', dataset)

        return `https://dev-market.densityexchange.org/blogs/${slug}?${params}`
      }

      return prev
    },
  },

  plugins: [
    structureTool(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
