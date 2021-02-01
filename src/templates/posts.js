import React from 'react'
import { Link } from 'gatsby'
import Item from '../components/Item'
import { VscChevronRight } from 'react-icons/vsc'

export default ({ pageContext: { posts } }) => {
    return (
        <div className='container'>
            <header>
                <div className='post-path'>
                    <Link to='/'>Home</Link>
                    <VscChevronRight />
                    <Link to='/posts'>Posts</Link>
                </div>
            </header>
            <section>
                <h1>Posts</h1>
                <ul>
                    {posts.map(({ slug, title, date }) => <Item key={slug}><Link to={slug}>{title}</Link></Item>)}
                </ul>
            </section>
        </div>
    )
}