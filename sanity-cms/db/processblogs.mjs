import {load} from 'ts-import';
import {JSDOM} from 'jsdom'
import ndjson from 'ndjson'
import {readFileSync, writeFileSync, createReadStream} from 'fs'
import {Schema} from '@sanity/schema'
import {htmlToBlocks} from '@sanity/block-tools'
// import { createClient } from 'next-sanity'
// import {client} from '../lib/client'
// import {schemaTypes} from '../schemas/index'
// import blog from '../schemas/blog'

// export const client = createClient({
//   apiVersion: '2024-02-09',
//   dataset: 'production',
//   projectId: '5xikm7hk',
//   useCdn: false,
// })

const ndSerialize = ndjson.stringify()
let ndJsonLines = ''
ndSerialize.on('data', (line) => (ndJsonLines += `${line}`))

function writeJson(obj) {
  ndSerialize.write(obj)
}

const defaultSchema = Schema.compile({
  name: 'densityCMS',
  types: [
    {
      name: 'blog',
      type: 'document',
      title: 'Blogs',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title of blog article',
        },
        {
          name: 'slug',
          type: 'slug',
          title: 'Slug of your blog article',
          // validation: (Rule: any) => Rule.required(),
          options: {
            source: 'title',
          },
        },
        {
          name: 'titleDescription',
          type: 'string',
          title: 'Title Description',
        },
        {
          name: 'metaDescription',
          type: 'string',
          title: 'Meta Description',
        },
        {
          name: 'featureImage',
          type: 'image',
          title: 'Hero Image of your blog article',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
        {
          name: 'content',
          type: 'array',
          title: 'Content',
          of: [
            {
              type: 'block',
              styles: [
                {title: 'h2', value: 'h2'},
                {title: 'p', value: 'p'},
              ],
              marks: {
                decorators: [
                  {title: 'Strong', value: 'strong'},
                  {title: 'Emphasis', value: 'em'},
                  {title: 'Code', value: 'code'},
                ],
              },
            },
            {
              type: 'image',
              fields: [
                {
                  type: 'text',
                  name: 'alt',
                  title: 'Alternative Text',
                  description: 'Alternative text is beneficial for screen readers',
                },
              ],
            },
          ],
          styles: [],
        },
        {
          name: 'cta',
          type: 'object',
          title: 'Call to Action Button',
          // validation: (Rule: any) => Rule.required(),
          fields: [
            {
              name: 'buttonText',
              type: 'string',
              title: 'Text to be displayed on the button',
            },
            {
              name: 'buttonLink',
              type: 'string',
              title: 'Link the button navigates to',
            },
          ],
        },
        {
          name: 'publishDate',
          type: 'datetime',
          title: 'Published Date',
          options: {
            dateFormat: 'DD-MM-YY',
            timeFormat: 'HH:mm',
            timeStep: 15,
            calendarTodayLabel: 'Today',
          },
        },
        {
          name: 'author',
          type: 'object',
          // validation: (Rule: any) => Rule.required(),
          fields: [
            {
              name: 'author',
              type: 'reference',
              title: 'Author',
              to: [{type: 'author'}],
            },
          ],
        },
        {
          name: 'tag',
          type: 'object',
          fields: [
            {
              name: 'tag',
              type: 'reference',
              title: 'Blog Tag',
              to: [{type: 'tag'}],
            },
          ],
        },
      ],
    },
  ],
})

const blockContentType = defaultSchema
  .get('blog')
  .fields.find((field) => field.name === 'content').type

async function uploadImageToSanity(imageUrl) {
  // Use Sanity client to upload the image
  const response = await client.assets.upload('image', imageUrl)

  // Return the asset ID
  return response._id
}

async function processPost(post) {
  const {uuid, title, slug, html, feature_image, published_at, custom_excerpt} = post

  // Convert HTML to block array
  const blocks = htmlToBlocks(html, blockContentType, {
    parseHtml: (html) => new JSDOM(html).window.document,
  })

  // Upload feature image to Sanity and get asset ID
  // let featureImageAssetId = null;
  // if (feature_image) {
  //   featureImageAssetId = await uploadImageToSanity(feature_image);
  // }

  const objectToWrite = {
    title,
    _id: uuid,
    slug: slug,
    _type: 'blog',
    metaDescription: custom_excerpt,
    // featureImage: featureImageAssetId ? {
    //   _type: 'image',
    //   asset: {
    //     _type: 'reference',
    //     _ref: featureImageAssetId,
    //   },
    // } : undefined,
    content: blocks,
    publishDate: published_at,
    author: 'Team Density',
    cta: {
      buttonLink: 'https://app.density.exchange/',
      buttonText: 'Trade Now',
    },
    // titleDescription
    // tag
  }

  // if (feature_image) {

  //   const featureImageAssetId = await uploadImageToSanity(feature_image)

  //   objectToWrite.featureImage = {
  //     _type: 'image',
  //     asset: {
  //       _type: 'reference',
  //       _ref: featureImageAssetId, // Use the asset ID here
  //     },
  //   }
  // }

  if (slug) {
    objectToWrite.slug = {
      _type: 'slug',
      current: slug,
    }
  }

  writeJson(objectToWrite)

  // Invoke writeJson function
  //   writeJson({
  //     _id: id,
  //     _type: 'blog',
  //     title,
  //     slug,
  //     // titleDescription
  //     metaDescription: custom_excerpt,
  //     featureImage: feature_image,
  //     content: blocks,
  //     publishDate: published_at,
  //     author: 'Team Density',
  //     // tag
  //   })
}

// Read the input JSON file
const inputData = JSON.parse(readFileSync('densityblogs.ghost.2024-02-19-06-41-42.json', 'utf8'))

const data = inputData.db[0].data

// console.log(data)

// Process each post in the input JSON
data.posts.forEach(processPost)

// // End the serialization
ndSerialize.end()

ndSerialize.on('end', () => {
  // Write ndjsonLines to a file
  writeFileSync('sanity-import.ndjson', ndJsonLines)
  console.log('Successfully wrote ndjson file.')
})

console.log('Conversion completed.')
