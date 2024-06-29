import { AppBar, Toolbar, Typography } from "@mui/material"

import SearchInput from "../SearchInput/SearchInput"

const Header = () => {

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" noWrap>
          Movie Search
        </Typography>
        <SearchInput />
      </Toolbar>
    </AppBar>
  )
}

export default Header
