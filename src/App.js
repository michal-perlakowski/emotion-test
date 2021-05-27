import { Global } from '@emotion/react';

function App() {
  return (
    <div>
      <Global
        styles={{
          '@keyframes test-animation': {},
        }}
      />
      <div
        id="test-el"
        style={{
          animationName: 'test-animation',
          animationDuration: '10ms',
        }}
        onAnimationStart={(event) => {
          console.log(event.animationName);
        }}
      />
    </div>
  );
}

export default App;
