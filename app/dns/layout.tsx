import { ReactNode } from 'react';

export default function (props: { children: ReactNode }) {
  return <div style={{ display: 'flex', width: 600, height: 400, justifyContent: 'space-between' }}>
    <h1>HHHH</h1>
    {props.children}
  </div>
}