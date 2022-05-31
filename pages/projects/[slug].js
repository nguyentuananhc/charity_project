import groq from 'groq'
import { client } from '@/lib/client'
import PostLayout from '@/layouts/PostLayout'

const Project = ({ project }) => {
  return <PostLayout post={project} />
}

const query = groq`*[_type == "project" && slug.current == $slug][0]`

export async function getStaticPaths() {
  const projects = await client.fetch(groq`*[_type == "project"]`)
  return {
    paths: projects.map((project) => ({
      params: {
        slug: project.slug.current,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const project = await client.fetch(query, { slug: params.slug })
  return {
    props: {
      project,
    },
  }
}

export default Project
