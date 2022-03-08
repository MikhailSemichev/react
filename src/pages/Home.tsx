import React from 'react'; // we need this to make JSX compile

export const Home = (props: unknown) => {
  return (
    <div>
      <h1>Home Test</h1>
      <code>{JSON.stringify(props)}</code>
    </div>
  );
};
