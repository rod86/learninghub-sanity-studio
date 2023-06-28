import tag from './collections/tag'
import course from './collections/course'
import contentType from './types/contentType'
import tagType from './types/tagType'
import siteSettings from './singletons/settings'
import levelType from './types/levelType'

export const schemaTypes = [
  // types
    contentType,
  	tagType,
    levelType,

  	// collections
	tag,
	course,
  	siteSettings,
]
