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

exports.createPages = async({ actions: { createPage } }) => {
  return getActivities()
    .then(activities => {
      createPage({
        path: '/',
        component: path.resolve('./src/templates/index.js'),
        context: { activities }
      })
    })
}
