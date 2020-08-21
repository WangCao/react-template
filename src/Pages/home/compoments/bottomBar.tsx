import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const BottomBar: React.FC = () => {
  return (
    <Box>
      <NavLink to='/'>文章</NavLink>
      <NavLink to='/a'>我的</NavLink>
    </Box>
  );
};

export default BottomBar;

const Box = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 1.4rem;
  background-color: #fff;
  border-top-left-radius: 0.2rem;
  border-top-right-radius: 0.2rem;

  a {
    color: #444;
    font-size: 0.56rem;
    text-decoration: none;
  }

  .active {
    color: #80bd01;
  }
`;
