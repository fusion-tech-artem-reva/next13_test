import React from 'react';

const InfoComponent = async () => {
  await new Promise((res) => setTimeout(() => res(1), 12000))
  const data = await fetch('https://jsonplaceholder.typicode.com/users', { method: 'GET' });
  const response = await data.json() as { id: number; name: string }[];

  return (
    <ul>
      {response.map((item) => <li key={item.id}>{item.name}</li>)}
    </ul>
  );
};

export default InfoComponent;