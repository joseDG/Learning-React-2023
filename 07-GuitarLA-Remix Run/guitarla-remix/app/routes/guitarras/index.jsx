import { useLoaderData } from '@remix-run/react'
import { getGuitarras } from '~/models/guitarras.server'
import ListadoGuitarras from '~/components/listado-guitarras'


export function meta() {
  return [
    { title: "GuitarLA - Tienda de Guitarras" },
    {
      name: "description",
      content: "GuitarLA - Nuestra colección de guitarras",
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
    const guitarras = await getGuitarras()
    return guitarras.data
}

function Tienda() {
  const guitarras = useLoaderData()
  return (
      <ListadoGuitarras 
        guitarras={guitarras}
      />
  )
}

export default Tienda