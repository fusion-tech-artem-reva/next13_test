'use client'
import Link from 'next/link';
import React, { PropsWithChildren, useState } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';

const ShopLayout: React.FC<PropsWithChildren> = (props) => {
  const [state, setState] = useState(1);
  const path = usePathname();

  return (
    <section
      style={{ background: '#81cdff', width: 500, height: 350, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <button onClick={() => setState(state + 1)}>{state}</button>
      <Link href={path === "/mvideo" ? "/dns" : "/mvideo"}>Link</Link>
      {props.children}
    </section>
  );
};

export default ShopLayout;