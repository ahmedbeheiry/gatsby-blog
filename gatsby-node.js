var contentful = require("contentful");
const dotenv = require("dotenv");

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESSTOKEN,
})

exports.createPages = async ({ actions: { createPage } }) => {
	const posts = await client.getEntries({
		content_type: 'post',
		order: '-sys.createdAt'
	})

	createPage({
		path: '/',
		component: require.resolve('./src/templates/home.template.js'),
		context: { posts }
	})

    posts.items.forEach(function (post) {
		createPage({
			path: `/posts/${post.fields.slug}`,
			component: require.resolve('./src/templates/blog-post.template.jsx'),
			context: { post }
		})
    });
}