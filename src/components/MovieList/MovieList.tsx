
import { CardContent, Grid, Typography } from "@mui/material";

import { Movie } from "../../types/movie";

import Error from "../Error/Error";
import Loading from "../Loading/Loading";

import { StyledCard, StyledCardMedia, StyledGridContainer } from "./MovieList.styled";

interface MovieListProps {
  movies: Movie[];
  loading: boolean;
  error: string;
}

const MovieList = ({ movies, loading, error }: MovieListProps) => {

  if (loading) return (
    <Loading />
  )

  if (error) return (
    <Error message={error} />
  )

  return (
    <StyledGridContainer container spacing={3}>
      {movies.map((movie) => (
        <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
          <StyledCard>
            <StyledCardMedia
              image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {movie.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Released: {movie.release_date}
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
      ))}
    </StyledGridContainer>
  )
}

export default MovieList
