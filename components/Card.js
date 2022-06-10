import Image from './Image'
import Link from './Link'
import { useNextSanityImage } from 'next-sanity-image'
import { client } from '@/lib/client'

const Card = ({ title, description, imgSrc, slug, page }) => {
  const imageProps = useNextSanityImage(client, imgSrc)
  return (
    <div className="p-4 md md:w-1/2" style={{ maxWidth: '544px' }}>
      <div
        className={`${
          imgSrc && 'h-full'
        }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
      >
        {imgSrc && (
          <Image
            alt={title}
            {...imageProps}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        )}
        <div className="p-6">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
            {slug ? (
              <Link href={`/${page}/${slug?.current}`} aria-label={`Link to ${title}`}>
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
          <p className="mb-3 prose text-gray-500 max-w-none dark:text-gray-400">{description}</p>
          {slug && (
            <Link
              href={`/${page}/${slug?.current}`}
              className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label={`Link to ${title}`}
            >
              Read more &rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card
