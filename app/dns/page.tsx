
import React, { Suspense } from 'react';
import InfoComponent from './InfoComponent';
import { PageWrapper } from './PageWrapper';
import { PostList } from './PostList';

type Props = {
  searchParams?: { id?: string }
}

const DNSPage = (props: Props) => {
  console.log('>>>>')
  return (
    <PageWrapper>
      <h1>Hello</h1>
      <Suspense fallback={<Loading1 />}>
        {/* @ts-expect-error Server Component */}
        <InfoComponent id={props.searchParams?.id}/>
      </Suspense>
      <Suspense fallback={<Loading2 />}>
        {/* @ts-expect-error Server Component */}
        <PostList />
      </Suspense>

    </PageWrapper>
  );
};


const Loading1 = () => {
  return <div style={{ width: 200, height: 200, background: 'tomato' }}>
    <h1>Loading .... long</h1>
  </div>
}

const Loading2 = () => {
  return <div style={{ width: 200, height: 200, background: 'blue' }}>
    <h1>Loading .... short</h1>
  </div>
}

export default DNSPage;