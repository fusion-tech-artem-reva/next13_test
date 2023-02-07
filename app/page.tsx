import Link from 'next/link';
import React from 'react';

type Props = {

};

const MainPAge:React.FC<Props> = (props) => {
  return (
    <>
    <h1>Main Page</h1>
    <Link href="/dns">DNS</Link>
    </>
  );
};

export default MainPAge;