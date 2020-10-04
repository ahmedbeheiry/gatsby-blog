import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { format } from 'date-fns'

export default ({ pageContext: { post } }) => {
  console.log("Post", post)
  return (
    <Layout>
      <SEO title={post.fields.title} />
      <div className="post">
        <h2 className="post__title">{post.fields.title}</h2>
        <div className="post__meta">
          <span className="author">
            Posted by {post.fields.author.fields.name}
          </span>
          <span className="date">
            on {format(new Date(post.sys.createdAt), "LLLL dd, yyyy")}
          </span>
        </div>
        <div className="post__img">
          <img src={post.fields.image.fields.file.url} alt="" />
        </div>
        <div className="post__content">
          {documentToReactComponents(post.fields.content)}
        </div>
      </div>
    </Layout>
  )
}
