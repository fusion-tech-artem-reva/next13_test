import React from 'react';

type Props = {
  id?: string;
}

const InfoComponent = async (props: Props) => {
  await new Promise((res) => setTimeout(() => res(1), 12000))
  const data = await fetch(`https://jsonplaceholder.typicode.com/users/${props.id}`, { method: 'GET' });
  const response = await data.json() as { id: number; name: string };

  return (
    <ul>
      <li key={response.id}>{response.name}</li>
    </ul>
  );
};

export default InfoComponent;