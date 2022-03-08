import React from 'react'; // we need this to make JSX compile

export const Home = (props: unknown) => {
  return (
    <div>
      <div>Home</div>
      <code>{JSON.stringify(props)}</code>
    </div>
  );
};
