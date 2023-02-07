import React from 'react';

type Props = {
  params: {id: string};
  searchParams?: {name?: string};
};

const UserPage = ({params, searchParams}: Props) => {
  
  return (
    <h2>
      User {params.id} and query = {searchParams?.name}
    </h2>
  );
};

export default UserPage;