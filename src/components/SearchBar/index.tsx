import MagniFyingGlass from '../../assets/magnifying-glass.svg'

type SearchBarProps = {
  setSearchInput: (input: string) => void
  searchInput: string
}

export default function SearchBar({
  setSearchInput,
  searchInput
}: SearchBarProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setSearchInput(event.target.value)
  }

  return (
    <div className="bg-zinc-50 flex w-fit p-2 rounded-full cursor-pointer border border-transparent focus-within:border-zinc-800">
      <input
        type="search"
        value={searchInput}
        placeholder="Buscar..."
        onChange={handleInputChange}
        className="bg-transparent outline-none pl-2"
      />
      <img
        src={MagniFyingGlass}
        alt="Buscar"
        onClick={() => setSearchInput(searchInput)}
        className="size-10 p-2 rounded-full hover:bg-zinc-300"
      />
    </div>
  )
}
