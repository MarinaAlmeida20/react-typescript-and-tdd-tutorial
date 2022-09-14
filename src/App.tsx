import React from 'react';
import Counter from './Counter';
// import Counter1 from './Counter1';
import { Heading } from './Heading';

function App() {
  return (
    <div>
      <Heading />
      <Counter label={"Current"} count={0} />
      {/* <Counter1 label1={"Other"} /> */}
    </div>
  );
}

export default App;
