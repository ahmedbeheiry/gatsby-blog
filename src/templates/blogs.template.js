import React from "react";
import { Link } from "gatsby";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

function BlogsTemplate(pageContext) {
  console.log("POSTS", pageContext)
  return (
    <React.Fragment>
      {/* {posts.map(post => {
        return (
          <div className="post-card" key={post.sys.id}>
            <h4>
              <Link to={`/posts/${post.fields.slug}`}>{post.fields.slug}</Link>
            </h4>
			{documentToReactComponents(post.fields.content)}
			
          </div>
        )
      })} */}
    </React.Fragment>
  )
}

export default BlogsTemplate
