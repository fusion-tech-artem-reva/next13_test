import { NextPage } from 'next';
import React from 'react';

type Props = {
  params: {id: string};
  searchParams: {name?: string};
};

const UserPage:React.FC<Props> = ({params, searchParams}) => {
  
  return (
    <h2>
      User {params.id} and query = {searchParams.name}
    </h2>
  );
};

export default UserPage;