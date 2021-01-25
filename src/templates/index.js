import * as React from "react"
import "../styles/global.css"
import Activity from "../components/Activity"
import Skill from '../components/Skill'

const IndexPage = ({ pageContext: { activities }}) => {
  return (
    <div className='container'>
      <section>
        <h1>Phuchit Sirimongkolsathien (Euro)</h1>
        <blockquote>
          <i>
            I am a self-taught software developer with passion for full-stack web development and distributed systems. My goal is to deliver reliable and maintainable software while working collaboratively with multidisciplinar teams. I also like to mentor people technically to help them thrive in those same aspects.
          </i>
        </blockquote>
      </section>
      <section>
        <h1>
          My Interests
        </h1>
        <ul>
          <Skill>Fullstack Web Development</Skill>
          <Skill>Mobile Development</Skill>
          <Skill>Ethereum Smart Contract Development</Skill>
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
    </div>
  )
}

export default IndexPage
