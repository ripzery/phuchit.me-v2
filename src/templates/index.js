import * as React from "react"
import "../styles/global.css"
import Activity from "../components/Activity"
import Item from '../components/Item'
import Footer from "../components/Footer"
import { skills, name, introduction } from '../../public/static/self.json'
import { Link } from "gatsby"

const IndexPage = ({ pageContext: { activities, posts }}) => {
  const recentPosts = posts.slice(0, 5)

  return (
    <div className='container'>
      <section>
        <h1>{name}</h1>
        <blockquote>
          <i>
            {introduction}
          </i>
        </blockquote>
      </section>
      <section>
        <h1>
          My Interests
        </h1>
        <ul>
          {skills.map((skill, i) => <Item key={i}>{skill}</Item>)}
        </ul>
      </section>
      <section>
        <h1>Posts</h1>
        <ul>
          {recentPosts.map(({slug, title, date}) => <Item key={slug}><Link to={slug}>{title}</Link> <span>{date}</span></Item>)}
        </ul>
      </section>
      <section>
        <h1>
          My latest activity on GitHub
        </h1>
        <ul>
          {activities.map((activity) => <Activity activity={activity} key={activity.id}/>)}
        </ul>
      </section>
      <Footer />
    </div>
  )
}

export default IndexPage
