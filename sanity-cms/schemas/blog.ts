import React, {ReactNode} from 'react'
import {PlayIcon} from '@sanity/icons'
import { YouTubePreview } from './youtubeType/YouTubePreview'

const HighlightIcon = () => {
  return React.createElement('span', {style: {fontWeight: 'bold'}}, 'H')
}

interface HighlightDecoratorProps {
  children: ReactNode
}

const HighlightDecorator: React.FC<HighlightDecoratorProps> = ({children}) => {
  return React.createElement('span', {style: {backgroundColor: 'yellow'}}, children)
}

const strongStyle = {
  fontWeight: 'bold',
}

const strongText: React.FC<HighlightDecoratorProps> = ({children}) => {
  return React.createElement('strong', {style: strongStyle}, children)
}
const spanText: React.FC<HighlightDecoratorProps> = ({children}) => {
  return React.createElement('span', {style: strongStyle}, children)
}

export default {
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
      description: "Click on 'Generate'. Do not write it manually",
      validation: (Rule: any) => Rule.required(),
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
      // validation: (Rule: any) => Rule.required(),
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          description: 'Do not write a caption without uploading an image',
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
              {title: 'Strong', value: 'strong', component: strongText},
              {title: 'Emphasis', value: 'em'},
              {title: 'Code', value: 'code'},
              {
                title: 'Highlight',
                value: 'highlight',
                icon: HighlightIcon,
                component: HighlightDecorator,
              },
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
        {
          type: 'object',
          name: 'youtube',
          title: 'Youtube Embed',
          icon: PlayIcon,
          fields: [
            {
              name: 'url',
              type: 'url',
              title: 'YouTube video URL',
            },
          ],
          preview: {
            select: {title: 'url'},
          },
          components: {
            preview: YouTubePreview,
          },
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
      validation: (Rule: any) => Rule.required(),
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
      validation: (Rule: any) => Rule.required(),
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

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'featureImage',
    },
    prepare(selection: any) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
}
