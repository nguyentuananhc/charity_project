import groq from 'groq'
import { client } from '@/lib/client'
import PostLayout from '@/layouts/PostLayout'

const Blog = ({ blog }) => {
  return <PostLayout post={blog} />
}

const query = groq`*[_type == "blog" && slug.current == $slug][0]`

export async function getStaticPaths() {
  const blogs = await client.fetch(groq`*[_type == "blog"]`)
  return {
    paths: blogs.map((blog) => ({
      params: {
        slug: blog.slug.current,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const blog = await client.fetch(query, { slug: params.slug })
  return {
    props: {
      blog,
    },
  }
}

export default Blog
