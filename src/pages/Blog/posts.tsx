import customComponents from '../../Theme/components'
import PostLayout from './Layout'

const posts = import.meta.glob('./content/**/*.mdx', {eager: true})

const blogPosts = Object.entries(posts).map(
  ([globPattern, { default: PostMdx, title }]) => {
    const regexp = /^\.\/content\/(?<postName>.*)\/.*\.mdx$/
    const postName = globPattern.match(regexp)?.groups?.postName
    return {
      path: `/blog/${postName}`,
      key: `/blog/${postName}`,
      element: (
        <PostLayout title={title}>
          <Box textAlign="justify">
            <PostMdx components={customComponents} />
          </Box>
        </PostLayout>
      ),
    }
  }
)

export default blogPosts
