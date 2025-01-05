type CardProps = {
  id: string
  name: string
  imgUrl: string
}

export default function Card({ id, name, imgUrl }: CardProps) {
  return (
    <figure
      id={id}
      className="grid grid-flow-row p-2 gap-2"
    >
      <img src={imgUrl} alt={name} className="w-80 rounded-2xl aspect-[9/16] object-cover" />
      <figcaption className="text-lg antialiased text-balance text-center w-11/12">
        {name}
      </figcaption>
    </figure>
  )
}
