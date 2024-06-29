import { CircularProgress } from '@mui/material';
import styled from 'styled-components';

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Loading = () => {
  return (
    <CenteredContainer>
      <CircularProgress />
    </CenteredContainer>
  );
};

export default Loading;