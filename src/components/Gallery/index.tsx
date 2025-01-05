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
    <div className='mt-4 grid grid-cols-1 gap-2 justify-items-center'>
      <SearchBar setSearchInput={setSearchInput} searchInput={searchInput} />

      {
        filteredPhotos.length > 0 ?
        <div className="grid grid-cols-2 justify-items-center m-4 lg:grid-cols-4">
          {filteredPhotos.map(photo => (
            <Card
              key={photo.id}
              id={photo.id}
              name={photo.name}
              imgUrl={photo.imgUrl}
            />
          ))}
        </div> :
        <p className='mt-4 text-lg antialiased text-balance text-center'>Nenhuma foto encontrada</p>
      }
    </div>
  )
}
