import { useLoaderData } from '@remix-run/react'
import ListadoPosts from '~/components/listado-posts'
import { getPosts } from '~/models/posts.server'

export function meta() {
  return [
    { title: "GuitarLA - Nuestro Blog" },
    {
      name: "description",
      content: "GuitarLA, Blog de música y venta de guitarras",
    },
    { property: "og:title", content: "..." },

    // you can now add SEO related <links>
    { tagName: "link", rel: "canonical", href: "..." },

    // and <script type=ld+json>
    {
      "script:ld+json": {
        some: "value",
      },
    },
  ];
}

export async function loader() {
  const posts = await getPosts()
  return posts.data
}

function Blog() {
  const posts = useLoaderData()
  return (
    <ListadoPosts 
        posts={posts}
    />
  )
}

export default Blog