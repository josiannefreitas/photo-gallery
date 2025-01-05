type CardProps = {
  id: string
  name: string
  imgUrl: string
}

export default function Card({ id, name, imgUrl }: CardProps) {
  return (
    <figure
      id={id}
      className="grid grid-flow-row p-2 gap-2 group"
    >
      <img src={imgUrl} alt={name} className="w-80 rounded-2xl aspect-[9/16] object-cover group-hover:scale-105 group-hover:ease-in-out group-hover:duration-200" />
      <figcaption className="text-lg antialiased text-balance text-center w-11/12 group-hover:font-semibold group-hover:ease-in-out group-hover:duration-200">
        {name}
      </figcaption>
    </figure>
  )
}
