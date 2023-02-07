'use client';

import { createContext, PropsWithChildren, useCallback, useState } from 'react';
import { UserType } from '../models/user.model';

export const RootContext = createContext<{
  data: UserType | null;
  setData(data: UserType | null): void;
}>({ data: null, setData() { } });


const RootContextProvider: React.FC<PropsWithChildren> = (props) => {
  const [user, setUser] = useState<UserType | null>(null)

  const setData = useCallback((data: UserType | null) => {
    setUser(data)
  }, [])
  return (
    <RootContext.Provider value={{ data: user, setData }}>
      {props.children}
    </RootContext.Provider>
  )
}

export default RootContextProvider;