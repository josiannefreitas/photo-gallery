import { photos } from '../../database'
import Card from '../Card'

export default function Gallery() {
  return (
    <div className='grid grid-cols-4 m-4'>
      {
        photos.map(photo => (
          <Card
            id={photo.id}
            name={photo.name}
            imgUrl={photo.imgUrl}
          />
        ))
      }
    </div>
  )
}
