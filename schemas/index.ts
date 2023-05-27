import Tag from './collections/tag'
import CourseSchema from './collections/course'
import contentType from './types/contentType'
import tagType from './types/tagType'
import siteSettings from './singletons/settings'
import seoSettings from './singletons/seo'

export const schemaTypes = [
	Tag,
	CourseSchema,
	contentType,
  	tagType,
  	siteSettings,
	seoSettings,
]
