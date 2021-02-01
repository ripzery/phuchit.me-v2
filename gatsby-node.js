const axios = require('axios')
const path = require('path')
const moment = require('moment')

function getActivities() {
 return axios.get("https://api.github.com/users/ripzery/events/public")
    .then((resp) => resp.data)
    .then(resp => resp.slice(0, 5))
    .then(data => data.map(activity => ({
      id: activity.id,
      type: activity.type,
      repo: activity.repo,
      payload: activity.payload,
      created_at: moment(activity.created_at).format('lll')
    })))
}

async function getMarkdown(graphql, reporter) {
  const result = await graphql(`
    {
      allMdx(
        sort: {order: DESC, fields: [frontmatter___date]}
        limit: 100
      ) {
        edges {
          node {
            frontmatter {
              slug
              date
              title
            }
            children
          }
        }
      }
    }
  `)

  if(result.errors) {
    reporter.panicOnBuild(`Error while running graphql query`, result.errors)
    return
  }

  console.log(result.data)

  return result.data.allMdx.edges
}

exports.createPages = async({ actions: { createPage }, graphql, reporter }) => {

  const markdowns = await getMarkdown(graphql, reporter)
  markdowns.forEach(({ node }) => {
    console.log(node)
    createPage({
      path: node.frontmatter.slug,
      component: require.resolve('./src/templates/post.js'),
      context: { node }
    })
  })

  return getActivities()
    .then(activities => {
      createPage({
        path: '/',
        component: path.resolve('./src/templates/index.js'),
        context: { activities }
      })
    })
}
