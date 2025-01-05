import { useState } from 'react'
import { photos } from '../../database'
import Card from '../Card'
import SearchBar from '../SearchBar'

export default function Gallery() {
  const [searchInput, setSearchInput] = useState('')

  const filteredPhotos = photos.filter(photo =>
    photo.name.toLowerCase().includes(searchInput.toLowerCase())
  )

  return (
    <div className='mt-4 flex flex-col items-center'>
      <SearchBar setSearchInput={setSearchInput} />

      <div className="grid grid-cols-4 m-4">
        {filteredPhotos.map(photo => (
          <Card
            key={photo.id}
            id={photo.id}
            name={photo.name}
            imgUrl={photo.imgUrl}
          />
        ))}
      </div>
    </div>
  )
}
