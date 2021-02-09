import { graphql, PageProps } from 'gatsby'
import * as React from 'react'
import { PageTemplateQuery } from '../types/generated-gatsby'

interface Props extends PageProps {
  data: PageTemplateQuery
}

const WpPost: React.FC<Props> = (props: Props) => {
  const post = props.data.wpPage

  return (
    <div>
      <h1>{post?.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post?.content ?? '' }} />
    </div>
  )
}

export const query = graphql`
  query PageTemplate($id: String) {
    wpPage(id: { eq: $id }) {
      id
      title
      content
    }
  }
`

export default WpPost
