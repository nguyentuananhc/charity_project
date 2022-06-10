import { client } from '@/lib/client'
import Card from '@/components/Card'

export default function Blogs({ blogs }) {
  console.log()
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Blogs
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Showcase your Blogs with a hero image (16 x 9)
          </p>
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap -m-4">
            {blogs.map((d) => (
              <Card
                key={d.slug}
                title={d.name}
                description={d.description}
                imgSrc={d.image && d.image[0]}
                slug={d.slug}
                page={'blogs'}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const blogsQuery = `*[_type == "blog"]`
  const blogs = await client.fetch(blogsQuery)
  return {
    props: {
      blogs,
    },
  }
}
