import Page from '../../components/Page'
import PostLink from './PostLink'

const posts = import.meta.globEager('./**/post.mdx')

export default function Blog(): JSX.Element {
  return (
    <Page>
      {Object.entries(posts)
        .sort((a, b) =>
          Date.parse(a[1].date) < Date.parse(b[1].date) ? 1 : -1
        )
        .map(([globPattern, post]) => {
          const { date: dateString, title } = post
          console.log(`Date: ${dateString}`)
          const date = new Date(dateString).toISOString().slice(0, 10)
          const regexp = /^\.\/content\/(?<postName>.*)\/.*\.mdx$/
          const postName = globPattern.match(regexp)?.groups?.postName
          return (
            <PostLink
              title={title}
              to={`/blog/${postName}/`}
              date={date}
              key={title}
            />
          )
        })}
    </Page>
  )
}
