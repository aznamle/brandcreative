import Prismic from '@prismicio/client'

//endpoint
export const apiEndpoint = 'https://brandcreative.prismic.io/api/v2'
export const accessToken = ''

// Client method to query documents from the Prismic repo
export const Client = (req = null) => (
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken))
)

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}
  return {
    ...reqOption,
    ...accessTokenOption,
  }
}

export const linkResolver = (doc) => {
    if (doc.type === 'page') {
      return `/${doc.uid}`;
    } else if (doc.type === 'blog') {
      return `/blog/${doc.uid}`
    }
    return '/'
}

export const hrefResolver = (doc) => {
  if (doc.type === 'page') {
    return '/[uid]'
  } else if (doc.type === 'blog') {
    return `/blog/[uid]`
  }
  return '/'
}