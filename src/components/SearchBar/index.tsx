import MagniFyingGlass from '../../assets/magnifying-glass.svg'

type SearchBarProps = {
  setSearchInput: (input: string) => void
}

export default function SearchBar({ setSearchInput }: SearchBarProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setSearchInput(event.target.value)
  }

  return (
    <div className='bg-zinc-50 flex w-fit p-2 rounded-full cursor-pointer'>
      <input
        type="search"
        placeholder="Buscar..."
        onChange={handleChange}
        className='bg-transparent'
      />
      <img src={MagniFyingGlass} alt="Buscar" className='size-10 p-2 rounded-full hover:bg-zinc-400' />
    </div>
  )
}
