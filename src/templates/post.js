import React from 'react'
import "../styles/post.css"

export default function Post({
  pageContext: { node }
}) {
  const html = {
    __html: node.html
  }

  return (
    <article className='post'>
      <header>
        <h1>{node.frontmatter.title}</h1>
      </header>
      <div className='post-content'>
        <div dangerouslySetInnerHTML={html} />
      </div>
    </article>
  )
}
