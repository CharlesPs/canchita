import SearchIcon from '@mui/icons-material/Search'
import { useEffect, useState } from 'react'

import { discoverMovies, searchMovies } from '../../redux/slices/movies.slice'
import { AppDispatch, useAppDispatch } from '../../redux/store'

import { Search, SearchIconWrapper, StyledInputBase } from "./SearchInput.styled"

const SearchInput = () => {

  const dispatch: AppDispatch = useAppDispatch();

  const [criteria, setCriteria] = useState('')

  useEffect(() => {

    if (criteria) {

      dispatch(searchMovies(criteria))
    } else {

      dispatch(discoverMovies())
    }
  }, [criteria])

  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          data-testid="SearchInput"
          placeholder="Search movies…"
          value={criteria}
          onChange={(e) => setCriteria(e.target.value)}
        />
      </Search>
    </>
  )
}

export default SearchInput
