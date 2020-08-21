import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Test: React.FC = () => {
  return (
    <Box>
      <Link to='/'>home</Link>
    </Box>
  );
};

export default Test;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  height: 1.5px;
`;
