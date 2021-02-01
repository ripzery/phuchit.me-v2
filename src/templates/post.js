import React from 'react'
import "../styles/post.css"
import CodeBlock from '../components/CodeBlock'
import { MDXProvider } from "@mdx-js/react"
import { Link } from 'gatsby'
import { VscChevronRight } from 'react-icons/vsc'

const components = {
  pre: props => <div className='block' {...props} />,
  code: CodeBlock
}

function formatDate(date) {
  if(!date) return
  
  const months = ['Jan', "Feb", "Mar", "Apr", "May", "Jun", "Jul", 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const [year, month, day] = date.split('-')
  const mon = months[parseInt(month) - 1]
  
  return `${mon} ${day}, ${year}`
}

export default function Post({
  children,
  pageContext
}) {

  console.log(pageContext.frontmatter)

  return (
    <article className='post'>
      <header>
        <div className='post-path'>
          <Link to='/'>Home</Link>
          <VscChevronRight />
          <Link to='/posts'>Posts</Link>
          <VscChevronRight />
          <Link to={pageContext.frontmatter.slug}>{pageContext.frontmatter.title}</Link>
        </div>
        <p className='post-date'>Published at: {formatDate(pageContext.frontmatter.date)}</p>
        <h1>{pageContext.frontmatter.title}</h1>
      </header>
      <div className='post-content'>
        <MDXProvider components={components}>{children}</MDXProvider>
      </div>
    </article>
  )
}
