import React from 'react';
import { Link } from 'react-router-dom';

const ListItem: React.FC = (props) => {
  return (
    <div>
      <Link to='/'>home</Link>
    </div>
  );
};

export default ListItem;
