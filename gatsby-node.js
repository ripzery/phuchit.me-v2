const axios = require('axios')
const path = require('path')
const moment = require('moment')
const { get } = require('http')

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

async function getPosts(graphql, reporter) {
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
              date(formatString: "MMM DD, YYYY")
              title
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running graphql query`, result.errors)
    return
  }

  return result.data.allMdx.edges.map(edge => ({ slug: edge.node.frontmatter.slug, title: edge.node.frontmatter.title, date: edge.node.frontmatter.date }))
}

exports.createPages = async ({ actions: { createPage }, graphql, reporter }) => {
  const posts = await getPosts(graphql, reporter)

  return getActivities()
    .then(activities => {
      // Create index page
      createPage({
        path: '/',
        component: path.resolve('./src/templates/index.js'),
        context: { activities, posts }
      })

      // Create /posts page

      createPage({
        path: '/posts',
        component: path.resolve('./src/templates/posts.js'),
        context: { posts }
      })
    })
}
