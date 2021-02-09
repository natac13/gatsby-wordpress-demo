import { graphql, PageProps } from 'gatsby'
import * as React from 'react'
import { PostTemplateQuery } from '../types/generated-gatsby'

interface Props extends PageProps {
  data: PostTemplateQuery
}

const WpPost: React.FC<Props> = (props: Props) => {
  const post = props.data.wpPost

  return (
    <div>
      <h1>{post?.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post?.content ?? '' }} />
    </div>
  )
}

export const query = graphql`
  query PostTemplate($id: String) {
    wpPost(id: { eq: $id }) {
      id
      title
      content
    }
  }
`

export default WpPost
