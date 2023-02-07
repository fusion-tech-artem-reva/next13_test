'use client';
import { PropsWithChildren, useContext } from 'react';
import { RootContext } from '../../context/RootContextProvider'

export const PageWrapper: React.FC<PropsWithChildren> = (props) => {
  const { data } = useContext(RootContext);

  return (
    <>
      <h1>DNS PAge  {data?.name}</h1>
      {props.children}
    </>
  )

}