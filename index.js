import React from "react"

import Layout from "./src/components/layout"
import SEO from "./src/components/seo"
import BlogsTemplate from './src/templates/blogs.template'

export default () => (
  <Layout>
    <SEO title="Home" />
    <p>Welcome to our Gatsby Blog!</p>

    {/* {console.log("MarkdownData", data)}
	{ data.allMarkdownRemark.edges.map(post => {
		return <div className='post-card' key={post.node.id}>
			<h4>
				<Link to='/'>{post.node.frontmatter.title}</Link>
			</h4>
			<p>{post.node.excerpt}</p>
		</div>
	}) } */}
	<BlogsTemplate />
  </Layout>
);
