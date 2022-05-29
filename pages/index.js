import React from 'react'
import { client } from '../lib/client'

const Home = ({ author }) => {
  console.log(author)
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>
}

export const getServerSideProps = async () => {
  const contactQuery = `*[_type == "contact"]`
  const contact = await client.fetch(contactQuery)
  const authorQuery = `*[_type == "author"]`
  const author = await client.fetch(authorQuery)
  return {
    props: {
      contact,
      author,
    },
  }
}

export default Home
