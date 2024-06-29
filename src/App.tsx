import { Container, Grid } from "@mui/material";
import { useSelector } from "react-redux";

import Header from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";

import { RootState } from "./redux/store";

const App = () => {

  const { movies, loading, error } = useSelector((state: RootState) => state.movies);

  return (
    <Container>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Header />
        </Grid>
        <Grid item style={{ paddingTop: 100 }}>
          <MovieList movies={movies} loading={loading} error={error} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default App