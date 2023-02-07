'use client'
import React, { useContext, useEffect } from 'react';
import { getData } from '../../../api/server/getData';
import { RootContext } from '../../../context/RootContextProvider';

type Props = {

};

const MvideoPage: React.FC<Props> = (props) => {
  const { setData } = useContext(RootContext);

  useEffect(() => {
    (async () => {
      const resp = await getData();
      setData(resp.data)
    })()
  }, []);


  return (
    <h1>Mvideo page </h1>
  );
};

export default MvideoPage;