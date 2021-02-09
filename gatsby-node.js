exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allWpPost {
        nodes {
          id
          uri
          title
          content
        }
      }
    }
  `)

  if (result.errors) {
    reporter.error('There was an error fetching posts', result.errors)
  }

  const { allWpPost } = result.data

  // Define the template to use
  const template = require.resolve(`./src/templates/WpPost.tsx`)

  if (allWpPost.nodes.length) {
    allWpPost.nodes.map((post) => {
      actions.createPage({
        path: `/blog${post.uri}`,
        component: template,
        context: post,
      })
    })
  }
}
