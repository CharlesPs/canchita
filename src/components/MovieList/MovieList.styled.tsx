import { Card, CardMedia, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledGridContainer = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const StyledCard = styled(Card)(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
}));

export const StyledCardMedia = styled(CardMedia)({
  paddingTop: '56.25%',
  height: 280,
});