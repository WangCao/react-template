import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { TopicList } from '..';

interface propsType {
  listItem: TopicList;
}

const ListItem: React.FC<propsType> = ({ listItem }: propsType) => {
  return (
    <Box>
      <img src={listItem.author.avatar_url} alt='' />
      <div>
        <Title>{listItem.title}</Title>
        <Time>{moment().subtract(1, 'days').calendar(listItem.create_at)}</Time>
      </div>
    </Box>
  );
};

export default ListItem;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 94%;
  height: 1.5rem;
  margin-bottom: 0.2rem;
  background-color: #fff;
  border-radius: 0.2rem;

  img {
    width: 0.9rem;
    height: 0.9rem;
    margin: 0 0.2rem;
    border-radius: 0.5rem;
  }
`;

const Title = styled.p`
  width: 8rem;
  overflow: hidden;
  color: #444;
  font-size: 0.38rem;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Time = styled.p`
  margin-top: 0.2rem;
  /* width: 2rem; */
  color: #666;
  font-size: 0.2rem;
`;
