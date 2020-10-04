import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import { format } from "date-fns"

export default ({ pageContext: { posts } }) => (
  <Layout>
	  <Seo title="Home" />
      {posts.items.map(post => {
        return (
          <div className="post-card" key={post.sys.id}>
            <h2 className="post-card__title">
              <Link to={`/posts/${post.fields.slug}`}>{post.fields.title}</Link>
            </h2>
            <div className="post-card__meta">
              <span className="author">
                Posted by {post.fields.author.fields.name}
              </span>
              <span className="date">
                on {format(new Date(post.sys.createdAt), "LLLL dd, yyyy")}
              </span>
            </div>
            <div className="post-card__img">
              <img src={`http:${post.fields.image.fields.file.url}`} alt="" />
            </div>
            <div className="post-card__content">
              <p>{post.fields.excerpt}</p>
            </div>
          </div>
        )
      })}
  </Layout>
)
