import * as React from 'react'

import Button from './Button'

interface SearchProps {
  onSearch: (searchTerm: string) => void
}

const Search: React.FC<SearchProps> = ({onSearch}) => {
  const [search,setSearch] = React.useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value)
  }

  const handleSearch = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSearch(search)
  }

  return (
    <div className="flex items-center mx-8 mb-8 space-x-2">
      <form
        onSubmit={handleSearch}
      >
        <label htmlFor="search" className="block text-sm font-medium text-slate-600">
          Search videos on Pexels
        </label>
        <div className="mt-1 relative flex items-center">
          <input
            onChange={handleChange}
            type="text"
            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full pr-12 sm:text-sm border-slate-300 rounded-md"
          />
          <div className="mx-4">
            <Button>Search</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Search
