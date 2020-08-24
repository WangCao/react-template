import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import BottomBar from './compoments/bottomBar';
import ListItem from './compoments/listItem';

interface Author {
  loginname: string;
  avatar_url: string;
}

export interface TopicList {
  id: string;
  author_id: string;
  tab: string;
  content: string;
  title: string;
  good: boolean;
  top: boolean;
  create_at: string;
  author: Author;
}

const Home: React.FC = () => {
  const [list, setList] = useState<TopicList[]>([]);
  useEffect(() => {
    axios
      .get('https://cnodejs.org/api/v1/topics')
      .then((res) => {
        console.log(res.data.data);
        return setList(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Box>
      <>
        {list.map((item) => {
          return <ListItem listItem={item} />;
        })}
      </>
      <BottomBar />
    </Box>
  );
};

export default Home;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-bottom: 1.4rem;
`;
