import * as React from "react"
import "../styles/global.css"
import Activity from "../components/Activity"
import Skill from '../components/Skill'
import Footer from "../components/Footer"
import { skills, name, introduction } from '../../public/static/self.json'

const IndexPage = ({ pageContext: { activities }}) => {
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
          {skills.map((skill, i) => <Skill key={i}>{skill}</Skill>)}
        </ul>
      </section>
      <section>
        <h1>
          My latest activity on GitHub
        </h1>
        <ul>
          {activities.map((activity, i) => <Activity activity={activity} key={activity.id}/>)}
        </ul>
      </section>
      <Footer />
    </div>
  )
}

export default IndexPage
